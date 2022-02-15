// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import { GameDayView, ClubView } from "sections/main/home";
const HomePage: React.FC = () => {
  return (
    <>
      <WithContainer
        mode="container"
        SectionView={GameDayView}
        sectionProps={{ type: "Live & Upcoming" }}
      />
      <WithContainer
        mode="container"
        SectionView={GameDayView}
        sectionProps={{ type: "Replays" }}
      />
      <WithContainer mode="container" SectionView={ClubView} />
    </>
  );
};

export default HomePage;
