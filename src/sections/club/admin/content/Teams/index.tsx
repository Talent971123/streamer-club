import React from "react";

import { WithContainer } from "components/Container";
//  import sections
import { default as DisplaySection } from "./Display";
import { default as ContentSection } from "./Content";

const Teams: React.FC = () => {
  return (
    <>
      <WithContainer SectionView={DisplaySection} />
      <WithContainer SectionView={ContentSection} />
    </>
  );
};

export default Teams;
