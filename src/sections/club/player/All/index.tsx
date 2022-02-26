import React, { useEffect, useState } from "react";
import { useRouter } from "hooks";
import { connect } from "react-redux";
import { useSubscription } from "@apollo/client";
// component
import { Row } from "components/Layout";
import { ClipCard } from "components/Card";
import { Text } from "components/Text";
// styled
import { PlayerAllWrapper } from "./all.style";
// types
import { ClipProps } from "types/components/ClipCard";
import { PLAYERQL } from "graphql/club";
import { AvatarSkeleton } from "components/Skeleton";
// define the data

const PlayerAllView: React.FC = (props: any) => {
  const { move } = useRouter();
  const { club } = props;
  const [pack, setPack] = useState([]);

  const { loading, data } = useSubscription(PLAYERQL.SUB_PLAYER, {
    variables: {
      where: {
        club: { slug: { _eq: club.slug } },
        user_id: { _is_null: false },
      },
    },
  });

  useEffect(() => {
    setPack(data && data.players_details);
  }, [data]);

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
        {loading
          ? [1, 2, 3, 4, 5, 6].map((item: number) => {
              return <AvatarSkeleton key={`player-all-${item}`} />;
            })
          : pack?.map((player: any, index: number) => {
              const item: ClipProps = {
                id: player.id,
                backgroundImage: player.user.photo,
                title: `${player?.user?.first_name ?? ""} ${
                  player?.user?.last_name ?? ""
                }`,
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
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerAllView);
