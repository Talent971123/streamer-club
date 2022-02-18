// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import { GameDayView, ClubView, ClipView } from "sections/main/home";
import { siteSettings } from "hooks";
const HomePage: React.FC = () => {
  return (
    <>

      {siteSettings('home_page.gameday') && (
        <WithContainer
          mode="container"
          SectionView={GameDayView}
          sectionProps={{ type: "Live & Upcoming" }}
        />
      )}

      {siteSettings('home_page.replays') && (
        <WithContainer
          mode="container"
          SectionView={GameDayView}
          sectionProps={{ type: "Replays" }}
        />
      )}

      {siteSettings('home_page.clips') && (
        <WithContainer mode="container" SectionView={ClipView} />
      )}

      {siteSettings('home_page.clubs') && (
        <WithContainer mode="container" SectionView={ClubView} />
      )}

    </>
  );
};

export default HomePage;
