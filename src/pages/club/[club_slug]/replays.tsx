// import react
import React, { useState, useContext, createContext } from "react";
import { WithContainer } from "components/Container";
// import views
import { ReplySection } from "sections/club/replay";
import { useRouter } from "next/router";
import { useSubscription } from "@apollo/client";
import { HomeQL } from "graphql/club";
import { thumbNailLink } from "utils/common-helper";

export const ReplayPageContext = createContext<Partial<Array<any>>>([]);

const ReplayPage: React.FC = () => {

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
      <WithContainer mode="container" SectionView={ReplySection} />
    </ReplayPageContext.Provider>
  );
};

export default ReplayPage;
