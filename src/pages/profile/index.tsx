import { initializeApollo } from "api/apollo";
import { WithContainer } from "components/Container";
import React, { createContext, useState } from "react";
import { HomeQL, PLAYERQL, TEAMQL } from "graphql/club";
import { BioDetailsView, ProfilePage } from "sections/profile";
import { useSubscription } from "@apollo/client";
import { siteSettings } from "hooks";


const ProfileView: React.FC = ({ teams }: any) => {
  const [matches, setMatches] = useState([]);

  return (
    <>
      {siteSettings('profile_page.bio') && (
        <WithContainer mode="container" SectionView={BioDetailsView} />
      )}

      <WithContainer mode="container" SectionView={ProfilePage} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const apolloClient = initializeApollo();

  return {
    props: {
      teams: []
    },
  };
};

export default ProfileView;
