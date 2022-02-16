// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import {
  HeadView,
  GameDayView,
  ReplyView,
  ClipView,
  TeamsView,
  PlayerView,
  BannerView,
  NewsView,
  SupportView,
} from "sections/club/home";
const HomePage: React.FC = () => {
  return (
    <>
      {/* <WithContainer mode="wrapper" SectionView={BannerView} /> */}
      {/* <WithContainer mode="wrapper" SectionView={HeadView} />
      <WithContainer mode="container" SectionView={GameDayView} />
      <WithContainer mode="container" SectionView={ReplyView} />
      <WithContainer mode="container" SectionView={ClipView} />
      <WithContainer mode="container" SectionView={TeamsView} />
      <WithContainer mode="container" SectionView={PlayerView} />
      <WithContainer mode="container" SectionView={NewsView} />
      <WithContainer mode="container" SectionView={SupportView} /> */}
    </>
  );
};

export default HomePage;
