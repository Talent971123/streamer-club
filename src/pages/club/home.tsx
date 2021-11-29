// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import { HeadView, GameDayView } from "views/Club/Home";
const HomePage: React.FC = () => {
  return (
    <>
      <WithContainer
        mode="container"
        mWidth={1440}
        SectionView={HeadView}
        cColor="black.200"
      />
      <WithContainer
        mode="container"
        mWidth={1440}
        SectionView={GameDayView}
        cColor="black.200"
      />
    </>
  );
};

export default HomePage;
