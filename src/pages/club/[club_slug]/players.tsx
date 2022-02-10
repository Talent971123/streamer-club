import { WithContainer } from "components/Container";
import React, { createContext } from "react";
import { AllSection } from "sections/club/player";

export const PlayersContext = createContext({});

const PlayerAllPage: React.FC = ({ players, club_slug }: any) => {
  return (
    <>
      <WithContainer mode="container" SectionView={AllSection} />
    </>
  );
};

export default PlayerAllPage;
