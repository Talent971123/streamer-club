import { WithContainer } from "components/Container";
import React from "react";
import { BioDetailsView } from "sections/club/profile";
import ProfilePage from "sections/club/profile/MainPage";

const ProfileView: React.FC = () => {
  return (
    <>
      <WithContainer mode="container" SectionView={BioDetailsView} />
      <WithContainer mode="container" SectionView={ProfilePage} />
    </>
  );
};

export default ProfileView;
