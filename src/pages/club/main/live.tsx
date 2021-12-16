// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import { UpcomeSection } from "sections/club/live";
const LivePage: React.FC = () => {
  return (
    <>
      <WithContainer mode="container" SectionView={UpcomeSection} />
    </>
  );
};

export default LivePage;
