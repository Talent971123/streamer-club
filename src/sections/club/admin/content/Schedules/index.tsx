import React from "react";

import { WithContainer } from "components/Container";
//  import sections
import DisplaySection from "./Display";

const SchedulesView: React.FC = () => {
  return (
    <>
      <WithContainer SectionView={DisplaySection}></WithContainer>
    </>
  );
};

export default SchedulesView;
