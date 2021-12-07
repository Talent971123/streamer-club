import React from "react";
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
import logo from "assets/images/home/player.png";
import { Text } from "components/Text";

const Action: React.FC<{ level: string }> = ({ level }) => {
  const onHandleEdit = (e: any) => {
    console.log(1);
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

const data = [
  {
    "Player Photo": <Avatar src={logo} Radius="circle" mode="small" />,
    "Player Name": "Joe Blogs",
    Team: "Mens Division 1",
    Status: <Action level={"Player Pro"} />,
  },
  {
    "Player Photo": <Avatar src={logo} Radius="circle" mode="small" />,
    "Player Name": "Jane Doe",
    Team: "Women Division 1",
    Status: <Action level={"Standard"} />,
  },
  {
    "Player Photo": <Avatar src={logo} Radius="circle" mode="small" />,
    "Player Name": "Bob Brown",
    Team: "Mens Division 1",
    Status: <Action level={"Standard"} />,
  },
  {
    "Player Photo": <Avatar src={logo} Radius="circle" mode="small" />,
    "Player Name": "Petter Parker",
    Team: "Mens Division 2",
    Status: <Action level={"Player Pro"} />,
  },
];

const DisplaySection: React.FC = () => {
  return (
    <DisplayWrapper>
      <Row flexDirection="column" gap={20}>
        <Col item={24}>
          <Row justifyContent="flex-end">
            <Button bColor="primary" bSize="small" icon={<BsPlus />}>
              {"Add Plyaer"}
            </Button>
          </Row>
        </Col>
        <Col item={24}>
          <Table data={data} />
        </Col>
      </Row>
    </DisplayWrapper>
  );
};

export default DisplaySection;
