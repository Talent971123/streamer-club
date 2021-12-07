import React from "react";
import { WithContainer } from "components/Container";

import { AllSection } from "views/club/team";
const TeamAllPage: React.FC = () => {
  return (
    <>
      <WithContainer mode="container" SectionView={AllSection} />
    </>
  );
};

export default TeamAllPage;
