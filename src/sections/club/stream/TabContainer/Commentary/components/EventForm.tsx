import { useMutation, useQuery } from "@apollo/client";
import { mutate, query } from "graphql/stream";
import BackIcon from "assets/icon/back";
import CloseIcon from "assets/icon/close";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Col, Row } from "components/Layout";
import { ScreenContext } from "hooks/context/ScreenContext";
import { StreamPageContext } from "hooks/context/StreamPageContext";
import { EventContext } from "./EventAction";
import moment from 'moment';
import React, { ReactNode, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import {
    DropdownContainer, StyledForm,
    StyledFormItem,
    StyledTimePicker
} from "../commentary.style";
import { ScoreTypes, Scoring } from '../constants';
import { toast } from "react-toastify";
import _ from 'lodash'
import { FormInstance } from "antd";
import { EventsDropDown } from "./index";
import useEvents from '../hooks/Events'


interface Props {
    children?: ReactNode;
    form: FormInstance
}

const EventForm: React.FC<Props> = ({ form }) => {
    const mobileView = useMediaQuery({ query: '(max-width: 480px)' })
    const { scoring } = useEvents()
    const { home_id, home_name, home_players, away_id, away_players, away_name, match_id }: any = useContext(StreamPageContext);
    const { show, editData, onClose, setEventShow, showKeymoment, eventTime, defaultTeam, setDefaultTeam, teamPlayers, setTeamPlayers, eventOption } = useContext(EventContext)
    const { Option } = DropdownContainer;

    const [removeCommentary] = useMutation(mutate.DELETE_COMMENTARY, {
        onCompleted() {
            toast.success("Commentary event deleted");
            form.resetFields();
            onClose()
        },
        onError(e) {
            toast.error("Error while removinb commentary" + e);
        }
    })

    const [addUpdateScore] = useMutation(mutate.UPSERT_SCORE, {
        onError(e) {
            toast.error("Error while adding score" + e);
        }
    })

    const [addCommentaryEvent] = useMutation(mutate.UPSERT_COMMENTARY, {
        onCompleted() {
            toast.success("Added commentary event");
            setEventShow("scoring")
            setDefaultTeam("");
            setTeamPlayers([]);
            onClose()
            form.resetFields();
        },
        onError(e) {
            toast.error("Error while adding event" + e);
        },
    });

    const isEdit = !_.isNull(editData)

    const computeFinal = (goal: number, behind: number) => {
        let total = (goal * 6) + behind;
        return total;
    }

    const eventOptionCloseButton = () => {
        setEventShow("scoring")
        showKeymoment(false);
    }

    const handleTeamChange = (value: any) => {
        setTeamPlayers(value === home_id ? home_players : away_players);
    };

    const handleDelete = () => {
        if (confirm("Are you sure you want remove the selected commentary?")) {
            removeCommentary({
                variables: { where: { id: { _eq: editData.id } } }
            })
        }
    }

    const onFinish = async (values: { comment: string | undefined, event_id: number, player_id: number, team_id: number, video_time: moment.Moment } | any) => {

        const video_time = moment.duration(values.video_time.format('HH:mm:ss')).asSeconds()
        const isHome = values.team_id === home_id
        const isScored = _.find(scoring, (v) => (v.title.includes(isHome ? "Home" : "Away") && v.value === values.event_id))

        /** IF event is scored */
        if (!_.isUndefined(isScored)) {

            const isGoal = isScored?.title.includes("Goal")

            const scoreObjects = {
                match_id,
                h_score_1: isGoal && isHome ? 1 : 0,
                h_score_2: !isGoal && isHome ? 1 : 0,
                h_score_final: computeFinal(
                    isGoal && isHome ? 1 : 0,
                    !isGoal && isHome ? 1 : 0,
                ),
                a_score_1: isGoal && !isHome ? 1 : 0,
                a_score_2: !isGoal && !isHome ? 1 : 0,
                a_score_final: computeFinal(
                    isGoal && !isHome ? 1 : 0,
                    !isGoal && !isHome ? 1 : 0,
                ),
                video_time
            }

            /** add id if edit */
            // if (isEdit) { scoreObjects['id'] = "" }

            console.log(`scoreObjects`, scoreObjects)

            await addUpdateScore({
                variables: {
                    objects: scoreObjects,
                    update_columns: Object.keys(scoreObjects)
                }
            });

        }

        const eventObject = {
            event_id: values.event_id,
            match_id,
            player_id: values.player_id,
            team_id: values.team_id,
            comment: values.comment,
            video_time
        }

        /** add id if edit */
        if (isEdit) {
            eventObject['id'] = editData.id
        }

        await addCommentaryEvent({
            variables: {
                objects: eventObject,
                update_columns: Object.keys(eventObject)
            }
        });

        showKeymoment(false);

    };

    return (
        <StyledForm
            name="commentary"
            form={form}
            onFinish={onFinish}
        >
            <Row
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={10}
            >

                <Col item={24}>
                    <Row
                        gap={50}
                        css={{ marginTop: 20 }}
                        responsive={{
                            480: {
                                flexDirection: "column",
                                gap: 0,
                            },
                            834: {
                                gap: 10,
                            },
                            1024: {
                                gap: 8,
                            },
                        }}
                    >
                        {!mobileView && <Col>
                            <Button
                                bColor="primary"
                                css={{ border: "none" }}
                                icon={<BackIcon />}
                                onClick={eventOptionCloseButton}
                            />
                        </Col>}
                        <Col
                            item={6}
                            responsive={{ 480: { item: 24, }, }}
                        >
                            <StyledFormItem name={"team_id"}
                                initialValue={defaultTeam}
                            >
                                <DropdownContainer
                                    placeholder={"Select Team (mandatory)"}
                                    onChange={(e: any) => handleTeamChange(e)}
                                >
                                    <Option value={home_id}>
                                        {home_name}
                                    </Option>
                                    <Option value={away_id}>
                                        {away_name}
                                    </Option>
                                </DropdownContainer>
                            </StyledFormItem>
                        </Col>
                        <Col
                            item={6}
                            responsive={{ 480: { item: 24, }, }}
                        >
                            <StyledFormItem name={"player_id"} required>
                                <DropdownContainer placeholder="Select Player (non-mandatory)">
                                    {teamPlayers &&
                                        teamPlayers.map((item: any, index: number) => (
                                            <Option value={item.id} key={`player-comentary-dd-${index}`}>
                                                {`${item?.user?.first_name} ${item?.user?.last_name}`}
                                            </Option>
                                        ))}
                                </DropdownContainer>
                            </StyledFormItem>
                        </Col>
                        <Col
                            item={6}
                            responsive={{ 480: { item: 24, }, }}
                        >
                            <StyledFormItem name={"video_time"} required initialValue={moment.utc(eventTime * 1000)}>
                                <StyledTimePicker
                                    placeholder="Adjust Timestamp (non-mandatory)"
                                    format={'HH:mm:ss'}
                                />
                            </StyledFormItem>
                        </Col>
                        <Col
                            item={6}
                            responsive={{ 480: { item: 24, }, }}
                        >

                            <EventsDropDown
                                name="event_id"
                                type={show}
                                initialValue={eventOption ? eventOption : null}
                            />

                        </Col>
                        {!mobileView && <Col>
                            <Button
                                bColor="primary"
                                css={{ border: "none" }}
                                icon={<CloseIcon />}
                                onClick={eventOptionCloseButton}
                            />
                        </Col>}
                    </Row>
                </Col>
                <Col item={24}>
                    <Row
                        padding="0 0 0 90px"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        css={{
                            marginBottom: 20,
                        }}
                        responsive={{
                            480: {
                                flexDirection: "column",
                                padding: "0 0 0 5px",
                            },
                            834: {
                                padding: "0 0 0 50px",
                            },
                            1024: {
                                padding: "0 0 0 50px",
                            },
                        }}
                    >
                        <Col
                            item={18}
                            responsive={{ 480: { item: 24, }, }}
                        >
                            <StyledFormItem name={"comment"}>
                                <Input
                                    css={{ borderRadius: 8 }}
                                    isize="medium"
                                    ifont="normal"
                                    placeholder="Add Comment to be added to Commentary Stream... (non-mandatory)"
                                />
                            </StyledFormItem>
                        </Col>
                        <Col
                            item={6}
                            responsive={{ 480: { item: 24, }, }}
                        >
                            <Row
                                justifyContent="space-around"
                                responsive={{
                                    480: {
                                        padding: "10px 0 10px 10px",
                                        alignItems: "flex-end",
                                        justifyContent: "flex-end",
                                        gap: 10,
                                    },
                                }}
                            >
                                {mobileView && <Button
                                    bColor="primary"
                                    css={{
                                        borderRadius: 12,
                                        height: mobileView ? 36 : 44,
                                        width: "30%",
                                        border: "1px solid white",
                                    }}
                                    onClick={() => showKeymoment(false)}
                                >
                                    {"Cancel"}
                                </Button>}

                                {isEdit && (
                                    <Button
                                        bColor="outlined"
                                        css={{
                                            borderRadius: 12,
                                            height: mobileView ? 36 : 44,
                                            width: mobileView ? "30%" : "40%",
                                        }}

                                        onClick={() => handleDelete()}

                                    >
                                        {"Delete"}
                                    </Button>
                                )}

                                <Button
                                    bColor="warning"
                                    css={{
                                        borderRadius: 12,
                                        height: mobileView ? 36 : 44,
                                        width: mobileView ? "30%" : "40%",

                                    }}
                                    type="submit"
                                >
                                    {"Submit"}
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </StyledForm>
    )
}

export default EventForm