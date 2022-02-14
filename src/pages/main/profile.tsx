import { WithContainer } from "components/Container";
import React from "react";
import { BioDetailsView, ProfilePage } from "sections/club/profile";

const ProfileView: React.FC = () => {
  return (
    <>
      <WithContainer mode="container" SectionView={BioDetailsView} />
      {/* 
        NOTE: @clint Please fix Image error on production build
        <WithContainer mode="container" SectionView={ProfilePage} /> 
      */}
    </>
  );
};

export default ProfileView;
