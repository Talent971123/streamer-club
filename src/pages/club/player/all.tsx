import React from "react";
import { WithContainer } from "components/Container";

import { AllSection } from "sections/club/player";
const PlayerAllPage: React.FC = () => {
  return (
    <>
      <WithContainer mode="container" SectionView={AllSection} />
    </>
  );
};

export default PlayerAllPage;
