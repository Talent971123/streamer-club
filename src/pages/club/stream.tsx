// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import { DisplayView, ToolbarView } from "views/Club/stream";

const StreamPage: React.FC = () => {
  return (
    <>
      <WithContainer mode="wrapper" SectionView={DisplayView} />
      <WithContainer mode="wrapper" SectionView={ToolbarView} />
    </>
  );
};

export default StreamPage;
