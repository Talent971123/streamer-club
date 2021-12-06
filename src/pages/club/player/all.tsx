import React from "react";
import { WithContainer } from "components/Container";

import { AllSection } from "views/Club/Player";
const PlayerAllPage: React.FC = () => {
  return (
    <>
      <WithContainer mode="container" SectionView={AllSection} />
    </>
  );
};

export default PlayerAllPage;
