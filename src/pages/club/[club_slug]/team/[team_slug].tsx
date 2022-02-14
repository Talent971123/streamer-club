// import react
import React, { createContext, useState } from "react";
import { WithContainer } from "components/Container";

import { GameDayView, ClipView } from "sections/club/home";
import {
  PlayerView,
  BannerView,
  HeadView,
  ReplyView,
} from "sections/club/home";

import { initializeApollo } from "api/apollo";
import { ClubCtx } from "types/common/club";
import { HomeQL } from "graphql/club";
import { Page } from "components/Page";
import _ from "lodash";

export const ClubContext = createContext<Partial<ClubCtx>>({});

const TeamPage: React.FC = (props: any) => {
  const { club, players, team } = props;
  const [banner, setBanner] = useState<any>(team.image);
  const fallback = `https://via.placeholder.com/900x600.png/000/fff?text=${encodeURI(
    team.name || ""
  )}`;

  if (_.isUndefined(team.image)) {
    setBanner(fallback);
  }

  return (
    <Page description={club.name + " - " + team.name} image={banner}>
      <ClubContext.Provider value={club}>
        <WithContainer
          mode="wrapper"
          SectionView={BannerView}
          sectionProps={{ banner }}
        />
        <WithContainer
          mode="wrapper"
          sectionProps={{ data: { logo: club.logo, title: team.name } }}
          SectionView={HeadView}
        />
        <WithContainer mode="container" SectionView={GameDayView} />
        <WithContainer mode="container" SectionView={ReplyView} />
        <WithContainer mode="container" SectionView={ClipView} />
        <WithContainer
          mode="container"
          sectionProps={{ data: players }}
          SectionView={PlayerView}
        />
      </ClubContext.Provider>
    </Page>
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
