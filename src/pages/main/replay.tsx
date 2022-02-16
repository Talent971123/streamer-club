// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import { ReplaySection } from "sections/club/replay";
const ReplayPage: React.FC = () => {
  return (
    <>
      <WithContainer mode="container" SectionView={ReplaySection} />
    </>
  );
};

export default ReplayPage;
