import React, { useContext, useState } from "react";
//  component
import { Row, Col } from "components/Layout";
import { Table } from "components/Table";
import { Button } from "components/Button";
import { Avatar } from "components/Avatar";
import { Team_A_Modal, Team_U_Modal } from "components/Modal";

//  import react icons
import { BsPlus } from "react-icons/bs";
//  styled component
import { DisplayWrapper } from "./display.style";
// asset
import { Text } from "components/Text";
import { ClubAdminContext } from "pages/club/[club_slug]/admin";
import DefaultSrc from "assets/images/player/default-player-image.png";

import _ from "lodash";

const Action: React.FC<{ count: number; tid: number; onHandleEdit: any }> = ({
  tid,
  count,
  onHandleEdit,
}) => {
  return (
    <>
      <Row justifyContent="center" alignItems="center" gap={20}>
        <Col>
          <Text mode="p" fSize={1}>
            {count}
          </Text>
        </Col>
        <Col>
          <div onClick={(e: any) => onHandleEdit(tid)}>
            <Text
              fSize={1}
              bColor="primary"
              bSize="small"
              tDecorations="underline"
              fColor="gray.200"
              hoverStyle={{ fColor: "white" }}
            >
              {"Edit"}
            </Text>
          </div>
        </Col>
      </Row>
    </>
  );
};

const DisplaySection: React.FC = () => {
  const club = useContext(ClubAdminContext);
  const [a_show, setAShow] = useState<boolean>(false);
  const [u_show, setUShow] = useState<boolean>(false);
  const [tid, setTid] = useState<any>(null);

  const _handleClose = () => {
    setUShow(false);
    setTid(null);
  };
  const onHandleEdit = (pid: number) => {
    setTid(pid);
    setUShow(true);
  };

  const datasource = () => {
    if (_.isUndefined(club?.teams)) {
      return [
        {
          No: "",
          "Team Photo": "",
          "Team Name": "",
          "# of Players": "",
        },
      ];
    }

    return club.teams.map((team: any, index: number) => ({
      No: index + 1,
      "Team Photo": (
        <Avatar
          src={_.isNull(team.image) ? DefaultSrc : team.image}
          position="center"
          radius="small"
          mode="small"
        />
      ),
      "Team Name": team.name,
      "# of Players": (
        <Action
          tid={team.id}
          count={team.players.length}
          onHandleEdit={onHandleEdit}
        />
      ),
    }));
  };

  return (
    <DisplayWrapper>
      <Row flexDirection="column" gap={20}>
        <Col item={24}>
          <Row justifyContent="flex-end">
            <Button
              bColor="primary"
              bSize="small"
              icon={<BsPlus />}
              onClick={() => setAShow(true)}
            >
              {"Add Team"}
            </Button>
          </Row>
        </Col>
        <Col item={24}>
          <Table data={datasource()} />
        </Col>
      </Row>
      <Team_A_Modal show={a_show} handleClose={() => setAShow(false)} />
      {!_.isUndefined(tid) ? (
        <Team_U_Modal show={u_show} handleClose={_handleClose} mid={tid} />
      ) : null}
    </DisplayWrapper>
  );
};

export default DisplaySection;
