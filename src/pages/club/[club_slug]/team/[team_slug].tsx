// import react
import React, { useEffect, useState } from "react";
import { WithContainer } from "components/Container";

import { GameDayView, ClipView } from "sections/club/home";
import { PlayerView, BannerView, ReplyView } from "sections/club/home";
import { Page } from "components/Page";

import { initializeApollo } from "api/apollo";
import { HomeQL } from "graphql/club";
import _ from "lodash";
import { TeamHeadView } from "sections/club/home/Head";

const TeamPage: React.FC = (props: any) => {
  const { club, players, team } = props;
  const fallback = `https://via.placeholder.com/900x600.png/000/fff?text=${encodeURI(
    team?.name || ""
  )}`;

  const [banner, setBanner] = useState<string>(fallback);
  useEffect(() => {
    if (!_.isUndefined(team?.image)) {
      setBanner(team?.image);
    }
  }, [team?.image]);

  return (
    <Page description={club.name + " - " + team.name} image={banner}>
      <WithContainer
        mode="wrapper"
        sectionProps={{ bannerImage: team.image }}
        SectionView={BannerView}
      />
      <WithContainer
        mode="wrapper"
        sectionProps={{ data: { logo: club.logo, title: team.name } }}
        SectionView={TeamHeadView}
      />
      <WithContainer mode="container" SectionView={GameDayView} />
      <WithContainer mode="container" SectionView={ReplyView} />
      <WithContainer mode="container" SectionView={ClipView} />
      <WithContainer
        mode="container"
        sectionProps={{ data: players }}
        SectionView={PlayerView}
      />
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

  console.log("team", team);

  return {
    props: {
      club: data.clubs[0],
      players,
      team,
    },
  };
};

export default TeamPage;
