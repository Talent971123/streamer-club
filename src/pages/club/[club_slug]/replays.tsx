// import react
import { useSubscription } from "@apollo/client";
import { WithContainer } from "components/Container";
import { HomeQL } from "graphql/club";
import { useRouter } from "next/router";
import React, { createContext, useState } from "react";
// import views
import { ReplaySection } from "sections/club/replay";

export const ReplayPageContext = createContext<Partial<Array<any>>>([]);

const ReplayPage: React.FC = () => {
  // TODO: use redux implementaion see: live
  const router = useRouter();
  const { club_slug } = router.query;
  const [matches, setMatches] = useState([]);

  useSubscription(HomeQL.SUB_CLUB_REPLAYS, {
    variables: {
      club_slug,
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setMatches(data.matches);
    },
  });

  return (
    <ReplayPageContext.Provider value={matches}>
      <WithContainer mode="container" SectionView={ReplaySection} />
    </ReplayPageContext.Provider>
  );
};

export default ReplayPage;
