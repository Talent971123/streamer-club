// import react
import React from "react";
import { WithContainer } from "components/Container";

// import views
import { LeaguesView } from "sections/main/home";
import { GameDayView, ReplayView, ClipView, ClubView } from "sections/league/home";
import { siteSettings } from "hooks";
const HomePage: React.FC = (props: any) => {
  return (
    <>
      {siteSettings('league_page.leagues') && (
        <WithContainer
          mode="container"
          SectionView={LeaguesView}
          sectionProps={{ type: "Leagues" }}
        />
      )}
      {siteSettings('league_page.gameday') && (
        <WithContainer
          mode="container"
          SectionView={GameDayView}
          sectionProps={{ type: "Live & Upcoming" }}
        />
      )}

      {siteSettings('league_page.replays') && (
        <WithContainer
          mode="container"
          SectionView={ReplayView}
          sectionProps={{ type: "Replays" }}
        />
      )}

      {siteSettings('league_page.clips') && (
        <WithContainer mode="container" SectionView={ClipView} />
      )}

      {siteSettings('league_page.clubs') && (
        <WithContainer mode="container" SectionView={ClubView} />
      )}

    </>
  );
};

export default HomePage;
