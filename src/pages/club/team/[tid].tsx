// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import {
  BannerSection,
  TrendSection,
  FollowSection,
  JuniorSection,
} from "sections/club/team";
const TeamPage: React.FC = () => {
  return (
    <>
      <WithContainer mode="wrapper" SectionView={BannerSection} />
      <WithContainer mode="container" SectionView={TrendSection} />
      <WithContainer mode="container" SectionView={FollowSection} />
      <WithContainer mode="container" SectionView={JuniorSection} />
    </>
  );
};

export default TeamPage;
