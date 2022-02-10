import React, { useContext } from "react";
import { useRouter } from "hooks";
// component
import { Row } from "components/Layout";
import { ClipCard } from "components/Card";
import { Text } from "components/Text";
// styled
import { PlayerAllWrapper, Item } from "./all.style";
// types
import { ClipProps } from "types/components/ClipCard";
//  define the example data
import { TeamsContext } from "pages/club/[club_slug]/teams";

const TeamAllView: React.FC = () => {
  const { move } = useRouter();

  const { teams, club_slug }: any = useContext(TeamsContext);

  const onHandleClick = (slug: string) => {
    const route = {
      path: `/club/${club_slug}/team/${slug}`,
    };
    move(route.path);
  };
  return (
    <PlayerAllWrapper>
      <Text fColor="white" fSize={1.375} fWeight={700}>
        {"All Teams"}
      </Text>
      <Row
        display="grid"
        templateCol="repeat(5, 1fr)"
        gap={30}
        padding="30px 0 0 0"
      >
        {teams.map((team: any, index: number) => {
          const item: ClipProps = {
            id: team.id,
            backgroundImage: team.image,
            title: team.name,
            mode: "teams",
            content: team.division,
          };

          return (
            <Item key={index}>
              <ClipCard
                {...item}
                handleClick={() => onHandleClick(team.slug)}
              />
            </Item>
          );
        })}
      </Row>
    </PlayerAllWrapper>
  );
};

export default TeamAllView;
