import React, { ReactNode, useContext } from 'react'
import { Scoring, scoreTitles, options } from '../constants'
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { Switch } from "components/Switch";
import { Button } from "components/Button";
import CloseIcon from "assets/icon/close";
import { ScreenContext } from "hooks/context/ScreenContext";
import { StreamPageContext } from "hooks/context/StreamPageContext";
import { EventContext } from "./EventAction";
import useEvents, { EventsTypes } from '../hooks/Events'
import _ from 'lodash';
interface Props {
  children?: ReactNode;
  edit?: boolean
  value?: any
}

const EventOptions: React.FC<Props> = ({ edit = false, value = {} }) => {

  const { show, onClose, setEventShow, form, setDefaultTeam, setTeamPlayers, setEventOption, showKeymoment } = useContext(EventContext)
  const { home_name, home_players, away_players, away_name, away_id, home_id }: any = useContext(StreamPageContext);
  const { scoring, keyMoment } = useEvents()

  const closeEventButton = () => {
    onClose()
    setEventShow("scoring")
    setDefaultTeam("");
    setTeamPlayers([]);
    form.resetFields();
  };

  const onChange = (value: any) => {
    setEventShow(value.target.value);
  };

  const handleScore = (event: EventsTypes) => {
    const isHome = event.title.includes('Home');
    const isScoring = !_.isNull(event.score)

    setEventOption(event.value)
    setDefaultTeam(isScoring ? isHome ? home_id : away_id : home_id);
    setTeamPlayers(isScoring ? isHome ? home_players : away_players : home_players)

    showKeymoment(true);

  };

  return (
    <>
      <Row responsive={{ 480: { display: "none" } }}>
        <Col item={24}>
          <Row
            alignItems="center"
            justifyContent="center"
            css={{ marginTop: 15, height: 30 }}
          >
            <Switch
              data={options}
              onChange={onChange}
              defaultValue={show}
            />
          </Row>
        </Col>
      </Row>

      {show === "scoring" && (
        <Row
          gap={12}
          justifyContent="center"
          css={{
            whiteSpace: "nowrap",
            overflowX: "auto",
          }}
        >
          {scoring.map((item, index: number) => {
            return (
              <Button
                key={index}
                fColor="gray.100"
                css={`
                    width: 100px;
                    height: 50px;
                    background-color: #4a4949;
                    border: 0px;
                    border-radius: 8px;
                    margin: 0 0 10px 0;
                `}
                onClick={() => handleScore(item)}
              >
                <Text fSize={1} fWeight={700}>
                  {`+${item.score}`}
                </Text>
                <Text fSize={0.75}>{item.title}</Text>
              </Button>
            );
          })}
        </Row>
      )}

      {show === "keyMoments" && (
        <Row
          gap={12}
          justifyContent="center"
          css={{
            whiteSpace: "nowrap",
            overflowX: "auto",
          }}
          responsive={{
            834: {
              justifyContent: "flex-start",
            },
          }}
        >
          {keyMoment.map((item, index: number) => {
            return (
              <Button
                key={index}
                fColor="gray.100"
                css={`
                    min-width: 100px;
                    height: 50px;
                    background-color: #4a4949;
                    border: 0px;
                    border-radius: 8px;
                    margin: 0 6px 10px 6px;
                `}
                onClick={() => handleScore(item)}
              >
                <Text fSize={1}>{item.title}</Text>
              </Button>
            );
          })}
        </Row>
      )}
    </>
  )
}

export default EventOptions