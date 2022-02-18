import React, { useContext, useState } from "react";
import { useRouter } from "hooks";
//  component
import { Row, Col } from "components/Layout";
import { Table } from "components/Table";
import { Button } from "components/Button";
import { Avatar } from "components/Avatar";
import { Player_A_Modal, Player_U_Modal } from "components/Modal";
//  import react icons
import { BsPlus } from "react-icons/bs";
//  styled component
import { DisplayWrapper } from "./display.style";
// asset
import _ from "lodash";
import { Text } from "components/Text";
import DefaultSrc from "assets/images/layout/group.png";

import { useSelector, RootStateOrAny } from "react-redux";

const Action: React.FC<{ level: string; pid: number; onHandleEdit: any }> = ({
  level,
  pid,
  onHandleEdit,
}) => {
  return (
    <>
      <Row justifyContent="center" alignItems="center" gap={20}>
        <Col>
          <Text
            mode="p"
            fSize={1}
            fColor={level == "Player Pro" ? "green.100" : "red.100"}
          >
            {level}
          </Text>
        </Col>
        {/* <Col>
          <div onClick={() => onHandleEdit(pid)}>
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
        </Col> */}
      </Row>
    </>
  );
};

const DisplaySection: React.FC = (props: any) => {
  const { move } = useRouter();
  const [a_show, setAShow] = useState<boolean>(false);
  const [u_show, setUShow] = useState<boolean>(false);
  const [pid, setPid] = useState<any>(null);

  const { players, club } = useSelector((state: RootStateOrAny) => state);

  const _handleClose = () => {
    setUShow(false);
    setPid(null);
  };
  const onHandleEdit = (pid: number) => {
    setPid(pid);
    setUShow(true);
  };

  const onHandleClick = (item: any) => {
    const path = `/club/${club.info?.slug}/player/${item?.item_data?.slug}`;
    move(path);
  };

  const datasource = () => {
    if (_.isUndefined(players)) {
      return [
        {
          No: "",
          "Player Photo": "",
          "Player Name": "",
          Team: "",
          Status: "",
        },
      ];
    }

    return players.list.map((player: any, index: number) => ({
      item_data: player,
      No: index + 1,
      "Player Photo": (
        <Avatar
          src={_.isNull(player.user.photo) ? DefaultSrc : player.user.photo}
          position="center"
          radius="circle"
          mode="small"
        />
      ),
      "Player Name": `${player.user.first_name} ${player.user.last_name}`,
      Team: player.team?.name,
      Status: (
        <Action
          pid={player.id}
          level={player.is_professional ? "Player Pro" : "Standard"}
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
              {"Add Player"}
            </Button>
          </Row>
        </Col>
        <Col item={24}>
          <Table data={datasource()} onHandleClick={onHandleClick} />
        </Col>
      </Row>
      <Player_A_Modal show={a_show} handleClose={() => setAShow(false)} />
      {!_.isUndefined(pid) ? (
        <Player_U_Modal show={u_show} handleClose={_handleClose} mid={pid} />
      ) : null}
    </DisplayWrapper>
  );
};

export default DisplaySection;
