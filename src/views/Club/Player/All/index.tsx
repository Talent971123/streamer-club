import React from "react";
import { useRouter } from "hooks";
// component
import { Row } from "components/Layout";
import { ClipCard } from "components/Card";
import { Text } from "components/Text";
// styled
import { PlayerAllWrapper } from "./all.style";
// types
import { ClipProps } from "types/components/ClipCard";
// define the data
import PlayerImage from "assets/images/home/player.png";

const data: ClipProps[] = [
  {
    id: 1,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 2,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 3,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 4,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 5,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 6,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 7,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
  {
    id: 8,
    backgroundImage: PlayerImage,
    title: "Liam Sinclair",
    content: "Senior Mens Divison 1",
    mode: "player",
  },
];
const PlayerAllView: React.FC = () => {
  const { move } = useRouter();

  const onHandleClick = (id: number) => {
    const route = {
      path: `/club/player/${id}`,
      param: { id },
    };
    move(route.path, route.param);
  };
  return (
    <PlayerAllWrapper>
      <Text fColor="white" fSize={22} fWeight={700}>
        {"All Memebers"}
      </Text>
      <Row
        display="grid"
        templateCol="repeat(6, 1fr)"
        gap={30}
        padding="30px 0 0 0"
      >
        {data.map((item: ClipProps, index: number) => {
          return <ClipCard {...item} key={index} handleClick={onHandleClick} />;
        })}
      </Row>
    </PlayerAllWrapper>
  );
};

export default PlayerAllView;
