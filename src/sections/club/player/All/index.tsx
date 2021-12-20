import React, { useContext } from "react";
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
import { PlayersContext } from "pages/club/[club_slug]/players";

const PlayerAllView: React.FC = () => {
  const { move } = useRouter();

  const { players, club_slug }: any = useContext(PlayersContext);

  const onHandleClick = (slug: string) => {
    const route = {
      path: `/club/${club_slug}/player/${slug}`,
    };
    move(route.path);
  };
  return (
    <PlayerAllWrapper>
      <Text fColor="white" fSize={22} fWeight={700}>
        {"All Players"}
      </Text>
      <Row
        display="grid"
        templateCol="repeat(6, 1fr)"
        gap={30}
        padding="30px 0 0 0"
      >
        {players.map((player: any, index: number) => {
          const item: ClipProps = {
            id: player.id,
            backgroundImage: player.image,
            title: `${player.first_name} ${player.last_name}`,
            mode: "player",
            content: player.team.name,
          };

          return (
            <ClipCard
              {...item}
              key={index}
              handleClick={() => onHandleClick(player.slug)}
            />
          );
        })}
      </Row>
    </PlayerAllWrapper>
  );
};

export default PlayerAllView;
