// import react
import React, { createContext, useState } from "react";
// import component
import { WithContainer } from "components/Container";
// import views
import { ContentView, HeadView } from "sections/club/admin";
import { ClubCtx, LeagueCtx } from "types/common/club";
import { useSubscription } from "@apollo/client";
import { useRouter } from "next/router";
import { ADMINQL, TEAMQL } from "graphql/club";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export const ClubAdminContext = createContext<Partial<ClubCtx>>({});
export const ClubLeagueContext = createContext<Partial<Array<LeagueCtx>>>([]);

const AdminPage: React.FC<{ user: any }> = withPageAuthRequired(({ user }) => {
  const {
    query: { club_slug },
  } = useRouter();

  const [club, setClub] = useState<Partial<ClubCtx>>({});
  const [league, setLeague] = useState<Partial<Array<LeagueCtx>>>([]);

  useSubscription(ADMINQL.SUB_CLUB, {
    variables: {
      club_slug,
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setClub(data.clubs[0]);
    },
  });

  useSubscription(TEAMQL.SUB_LEAGUES, {
    variables: {},
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setLeague(data.leagues);
    },
  });

  return (
    <ClubAdminContext.Provider value={club}>
      <ClubLeagueContext.Provider value={league}>
        <WithContainer
          mode="wrapper"
          SectionView={HeadView}
          cColor="black.200"
        />
        <WithContainer cColor="black.200" SectionView={ContentView} />
      </ClubLeagueContext.Provider>
    </ClubAdminContext.Provider>
  );
});

export default AdminPage;
