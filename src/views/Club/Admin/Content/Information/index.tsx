import React from "react";

import { WithContainer } from "components/Container";
//  import sections
import { default as ProfileSection } from "./Profile";
import { default as ContactSection } from "./Contact";

const Information: React.FC = () => {
  return (
    <>
      <WithContainer SectionView={ProfileSection} />
      <WithContainer SectionView={ContactSection} />
    </>
  );
};

export default Information;
