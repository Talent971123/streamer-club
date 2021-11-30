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
} from "views/Club/Home";
const HomePage: React.FC = () => {
  return (
    <>
      <WithContainer
        mode="wrapper"
        mWidth={1440}
        SectionView={HeadView}
        cColor="black.200"
      />
      <WithContainer mode="container" mWidth={1440} SectionView={GameDayView} />
      <WithContainer mode="container" mWidth={1440} SectionView={ReplyView} />
      <WithContainer mode="container" mWidth={1440} SectionView={ClipView} />
      <WithContainer mode="container" mWidth={1440} SectionView={TeamsView} />
      <WithContainer mode="container" mWidth={1440} SectionView={PlayerView} />
    </>
  );
};

export default HomePage;
