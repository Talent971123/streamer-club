import React from "react";

import { WithContainer } from "components/Container";
//  import sections
import { default as ProfileSection } from "./Profile";
import { default as ContactSection } from "./Contact";
import { default as DetailSection } from "./Detail";
import { default as PrivacySection } from "./Privacy";
const InformationView: React.FC = () => {
  return (
    <>
      <WithContainer SectionView={ProfileSection} />
      <WithContainer SectionView={ContactSection} />
      <WithContainer SectionView={DetailSection} />
      <WithContainer SectionView={PrivacySection} />
    </>
  );
};

export default InformationView;
