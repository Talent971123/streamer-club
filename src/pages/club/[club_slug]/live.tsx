// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import { UpcomeSection } from "sections/club/live";
import { useSubscription } from "@apollo/client";
import { setLiveMatches } from "redux/actions/match";
import { subscribe } from "graphql/match/index";
import { connect } from "react-redux";

const LivePage: React.FC = (props: any) => {
  const { liveList, clubInfo, setLiveMatches } = props;

  useSubscription(subscribe.SUB_MATCHES, {
    variables: {
      where: {
        club_id: { _eq: clubInfo.id },
        status: { _neq: "completed" },
        is_historic: { _eq: false },
      },
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setLiveMatches(data.matches);
    },
  });

  return (
    <>
      <WithContainer mode="container" SectionView={UpcomeSection} />
    </>
  );
};

const mapStateToProps = (state) => ({
  liveList: state.match.live_list,
  clubInfo: state.club.info,
});

const mapDispatchToProps = {
  setLiveMatches: setLiveMatches,
};

export default connect(mapStateToProps, mapDispatchToProps)(LivePage);
