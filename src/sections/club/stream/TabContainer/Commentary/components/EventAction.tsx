import { themeGet } from "@styled-system/theme-get";
import { Form } from "antd";
import { Row } from "components/Layout";
import { StreamPageContext } from "hooks/context/StreamPageContext";
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { EventForm, EventOptions } from './index';
import _ from 'lodash'
import { useMutation, useQuery } from "@apollo/client";
import { mutate, query } from "graphql/stream";

interface Props {
    children?: ReactNode;
    onClose?: () => any
    edit?: any | null
}

const EventAction: React.FC<Props> = ({ onClose, edit = null }) => {

    const { home_id, home_name, home_players, away_id, away_players, away_name, match_id }: any = useContext(StreamPageContext);

    const [keymoment, showKeymoment] = useState<boolean>(false);
    const [eventOption, setEventOption] = useState<string>("");
    const [teamPlayers, setTeamPlayers] = useState<any>([]);
    const [defaultTeam, setDefaultTeam] = useState<string>("");
    const [eventTime, setEventTime] = useState<any>(null);
    const [show, setEventShow] = useState<"" | "scoring" | "keyMoments">("scoring");
    const [editData, setEditData] = useState(edit)
    const [form] = Form.useForm();
    const isEdit = !_.isNull(edit)

    useEffect(() => {

        if (keymoment === false) {
            setDefaultTeam("");
            setTeamPlayers([]);
            form.resetFields();
        }

    }, [keymoment])


    useEffect(() => {
        if (isEdit) {

            const { comment, event_id, match_id, player_id, video_time, team_id, event_collection } = editData
            setEventShow(['Goal', 'Behind'].includes(event_collection.event_name) ? 'scoring' : 'keyMoments')
            setTeamPlayers(team_id === home_id ? home_players : away_players)

            form.setFieldsValue({
                comment,
                event_id,
                match_id,
                player_id,
                // video_time,
                team_id
            })

            showKeymoment(true)

        }
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const video = document.getElementById("bitmovinplayer-video-player-container") as HTMLVideoElement | null;
            var s: any = video?.currentTime ? video?.currentTime : 0;
            var sec = s.toString().split('.');
            setEventTime(sec[0]);
        }
    }, [eventTime, keymoment, show]);

    return (
        <EventContext.Provider value={{
            keymoment, showKeymoment,
            eventOption, setEventOption,
            teamPlayers, setTeamPlayers,
            defaultTeam, setDefaultTeam,
            eventTime, setEventTime,
            editData, setEditData,
            show, setEventShow,
            form,
            onClose
        }}>
            <Row
                flexDirection="column"
                alignItems="center"
                justifyContent="space-around"
                css={`
                    background-color: ${themeGet("colors.gray.900")};
                    padding-right: 10px;
                `}
                gap={20}
            >

                {!keymoment && <EventOptions />}
                {keymoment && <EventForm form={form} />}

            </Row>
        </EventContext.Provider>
    )
}

export default EventAction
export const EventContext = createContext<any>({});