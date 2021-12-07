// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import { UpcomeSection, ReplySection } from "views/Club/match";
const HomePage: React.FC = () => {
  return (
    <>
      <WithContainer mode="container" SectionView={UpcomeSection} />
      <WithContainer mode="container" SectionView={ReplySection} />
    </>
  );
};

export default HomePage;
