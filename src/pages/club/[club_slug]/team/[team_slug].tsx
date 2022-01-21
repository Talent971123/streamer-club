// import react
import React, { createContext } from "react";
import { WithContainer } from "components/Container";

import { GameDayView, ClipView } from "sections/club/home";
import { PlayerView, BannerView, HeadView, ReplayView } from "sections/common";
import { initializeApollo } from "api/apollo";
import { ClubCtx } from "types/common/club";
import { HomeQL } from "graphql/club";
import _ from "lodash";

export const ClubContext = createContext<Partial<ClubCtx>>({});

const TeamPage: React.FC = ({ club, players, team }: any) => {
  return (
    <>
      <ClubContext.Provider value={club}>
        <WithContainer
          mode="wrapper"
          sectionProps={{ bannerImage: team.image }}
          SectionView={BannerView}
        />
        <WithContainer
          mode="wrapper"
          sectionProps={{ data: { logo: club.logo, title: team.name } }}
          SectionView={HeadView}
        />
        <WithContainer mode="container" SectionView={GameDayView} />
        <WithContainer mode="container" SectionView={ReplayView} />
        <WithContainer mode="container" SectionView={ClipView} />
        <WithContainer
          mode="container"
          sectionProps={{ data: players }}
          SectionView={PlayerView}
        />
      </ClubContext.Provider>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const apolloClient = initializeApollo();
  const { club_slug, team_slug } = context.query;

  const { data } = await apolloClient.query({
    query: HomeQL.GET_CLUB,
    variables: {
      club_slug,
    },
  });

  /** Filter players slug */
  const players = _.filter(data.clubs[0].players, ["team.slug", team_slug]);

  /** Team info */
  const team = _.find(data.clubs[0].teams, ["slug", team_slug]);

  return {
    props: {
      club: data.clubs[0],
      players,
      team,
    },
  };
};

export default TeamPage;
