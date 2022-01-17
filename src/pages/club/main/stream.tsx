// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import { DisplayView, ToolbarView, TabContainerView } from "sections/club/stream";

const StreamPage: React.FC = () => {
  return (
    <>
      <WithContainer mode="wrapper" SectionView={DisplayView} />
      <WithContainer mode="wrapper" SectionView={ToolbarView} />
      <WithContainer mode="wrapper" SectionView={TabContainerView} />
    </>
  );
};

export default StreamPage;
