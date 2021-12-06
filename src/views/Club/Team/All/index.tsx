import React from "react";
import { useRouter } from "hooks";
// component
import { Row } from "components/Layout";
import { ClipCard } from "components/Card";
import { Text } from "components/Text";
// styled
import { PlayerAllWrapper, Item } from "./All.style";
// types
import { ClipProps } from "types/components/ClipCard";
//  define the example data
import TeamsImage from "assets/images/home/team.png";

const data: ClipProps[] = [
  {
    id: 1,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 2,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 3,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 4,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 5,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 6,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 7,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
  {
    id: 8,
    backgroundImage: TeamsImage,
    title: "Mens",
    content: "Opens 1",
    mode: "teams",
  },
];

const TeamAllView: React.FC = () => {
  const { move } = useRouter();

  const onHandleClick = (id: number) => {
    const route = {
      path: `/club/team/${id}`,
      param: { id },
    };
    move(route.path, route.param);
  };
  return (
    <PlayerAllWrapper>
      <Text fColor="white" fSize={22} fWeight={700}>
        {"All Teams"}
      </Text>
      <Row
        display="grid"
        templateCol="repeat(5, 1fr)"
        gap={30}
        padding="30px 0 0 0"
      >
        {data.map((item: ClipProps, index: number) => {
          return (
            <Item key={index}>
              <ClipCard {...item} handleClick={onHandleClick} />
            </Item>
          );
        })}
      </Row>
    </PlayerAllWrapper>
  );
};

export default TeamAllView;
