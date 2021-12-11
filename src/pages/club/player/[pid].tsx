// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import {
  GallerySection,
  GamesSection,
  ClipSection,
  ClubSection,
  IntroSection,
} from "sections/club/player";
const PlayerPage: React.FC = () => {
  return (
    <>
      <WithContainer mode="container" SectionView={IntroSection} />
      <WithContainer mode="container" SectionView={ClubSection} />
      <WithContainer mode="container" SectionView={ClipSection} />
      <WithContainer mode="container" SectionView={GamesSection} />
      <WithContainer mode="container" SectionView={GallerySection} />
    </>
  );
};

export default PlayerPage;
