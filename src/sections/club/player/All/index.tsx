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
import { connect } from "react-redux";

const PlayerAllView: React.FC = (props: any) => {
  const { move } = useRouter();
  const { club, players } = props

  const onHandleClick = (slug: string) => {
    const route = {
      path: `/club/${club.slug}/player/${slug}`,
    };
    move(route.path);
  };
  return (
    <PlayerAllWrapper>
      <Text fColor="white" fSize={1.375} fWeight={700}>
        {"All Members"}
      </Text>
      <Row
        display="grid"
        templateCol="repeat(6, 1fr)"
        gap={30}
        padding="30px 0 0 0"
      >
        {players && players.map((player: any, index: number) => {
          const item: ClipProps = {
            id: player.id,
            backgroundImage: player.user.photo,
            title: `${player?.user?.first_name ?? ''} ${player?.user?.last_name ?? ''}`,
            mode: "player",
            content: player.team?.name,
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


const mapStateToProps = (state) => ({
  club: state.club.info,
  players: state.players.list
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerAllView);
