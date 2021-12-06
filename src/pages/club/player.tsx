// import react
import React from "react";
import { WithContainer } from "components/Container";
// import views
import {
  GallerySection,
  GamesSection,
  ClipSection,
  ClubSection,
  ProfileSection,
} from "views/Club/Player";
const PlayerPage: React.FC = () => {
  return (
    <>
      <WithContainer mode="container" SectionView={ProfileSection} />
      <WithContainer mode="container" SectionView={ClubSection} />
      <WithContainer mode="container" SectionView={ClipSection} />
      <WithContainer mode="container" SectionView={GamesSection} />
      <WithContainer mode="container" SectionView={GallerySection} />
    </>
  );
};

export default PlayerPage;
