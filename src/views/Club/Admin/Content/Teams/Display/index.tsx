import React from "react";
//  component
import { Row, Col } from "components/Layout";
import { Table } from "components/Table";
import { Button } from "components/Button";
import { Avatar } from "components/Avatar";
//  import react icons
import { BsPlus } from "react-icons/bs";
//  styled component
import { DisplayWrapper } from "./Display.style";
// asset
import logo from "assets/images/home/team2.png";
import { Text } from "components/Text";

const Action: React.FC<{ count: number }> = ({ count }) => {
  const onHandleEdit = (e: any) => {
    console.log(1);
  };
  return (
    <>
      <Row justifyContent="flex-start" alignItems="center" gap={5}>
        <Col item={7}>
          <Text mode="p" fSize={16}>
            {count}
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
    "Team Photo": <Avatar src={logo} Radius="circle" mode="small" />,
    "Team Name": "Mens Division 1",
    "# of Players": <Action count={18} />,
  },
  {
    "Team Photo": <Avatar src={logo} Radius="circle" mode="small" />,
    "Team Name": "Mens Division 2",
    "# of Players": <Action count={17} />,
  },
  {
    "Team Photo": <Avatar src={logo} Radius="circle" mode="small" />,
    "Team Name": "Women's Division 1",
    "# of Players": <Action count={17} />,
  },
  {
    "Team Photo": <Avatar src={logo} Radius="circle" mode="small" />,
    "Team Name": "Women's Division 2",
    "# of Players": <Action count={17} />,
  },
];

const DisplaySection: React.FC = () => {
  return (
    <DisplayWrapper>
      <Row flexDirection="column" gap={20}>
        <Col item={24}>
          <Row justifyContent="flex-end">
            <Button bColor="primary" bSize="small" icon={<BsPlus />}>
              {"Add Team"}
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
