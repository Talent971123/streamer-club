import React, { useContext } from "react";
//  component
import { Row, Col } from "components/Layout";
import { Table } from "components/Table";
import { Button } from "components/Button";
import { Avatar } from "components/Avatar";
//  import react icons
import { BsPlus } from "react-icons/bs";
//  styled component
import { DisplayWrapper } from "./display.style";
// asset
import { Text } from "components/Text";
import { ClubAdminContext } from "pages/club/[club_slug]/admin";

import _ from "lodash";

const Action: React.FC<{ level: string; pid: number }> = ({ level, pid }) => {
  const onHandleEdit = (e: any) => {
    console.log(`Edit player with id ${pid}`);
  };
  return (
    <>
      <Row justifyContent="flex-start" alignItems="center" gap={5}>
        <Col item={15}>
          <Text
            mode="p"
            fSize={16}
            fColor={level == "Player Pro" ? "green.100" : "red.100"}
          >
            {level}
          </Text>
        </Col>
        <Col item={1}>
          <div onClick={(e: any) => onHandleEdit(e)}>
            <Text
              fSize={16}
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

  const datasource = () => {
    if (_.isUndefined(club.players)) {
      return [
        {
          "Player Photo": "",
          "Player Name": "",
          Team: "",
          Status: "",
        },
      ];
    }

    return club.players.map((player) => ({
      "Player Photo": (
        <Avatar src={player.image} Radius="circle" mode="small" />
      ),
      "Player Name": `${player.first_name} ${player.last_name}`,
      Team: player.team.name,
      Status: (
        <Action
          pid={player.id}
          level={player.is_professional ? "Player Pro" : "Standard"}
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
              onClick={() => console.log(`object`)}
            >
              {"Add Player"}
            </Button>
          </Row>
        </Col>
        <Col item={24}>
          <Table data={datasource()} />
        </Col>
      </Row>
    </DisplayWrapper>
  );
};

export default DisplaySection;
