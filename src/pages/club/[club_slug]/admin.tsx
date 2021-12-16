// import react
import React, { createContext, useState } from "react";
// import component
import { WithContainer } from "components/Container";
// import views
import { ContentView, HeadView } from "sections/club/admin";
import { ClubCtx } from "types/common/club";
import { gql, useSubscription } from "@apollo/client";
import { useRouter } from "next/router";

const SUB_CLUB = gql`subscription MyClubSubscription($club_slug: String!) {
  clubs(where: {slug: {_eq: $club_slug}}) {
    name
    banner_image
    logo
    id
    slug
    teams {
      id
      image
      name
      slug
      division
      players{
        id
        last_name
        first_name
      }
    }
    players {
      id
      first_name
      last_name
      image
      slug
      is_professional
      team {
        name
      }
    }
  }
}`

export const ClubAdminContext = createContext<Partial<ClubCtx>>({})

const AdminPage: React.FC = () => {
  const { query: { club_slug } } = useRouter()
  const [club, setClub] = useState<Partial<ClubCtx>>({})

  useSubscription(SUB_CLUB, {
    variables: {
      club_slug
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      data && setClub(data.clubs[0])
    }
  })

  return (
    <ClubAdminContext.Provider value={club}>
      <WithContainer
        mode="wrapper"
        mWidth={1440}
        SectionView={HeadView}
        cColor="black.200"
      />
      <WithContainer
        mWidth={1440}
        cColor="black.200"
        SectionView={ContentView}
      />
    </ClubAdminContext.Provider>
  );
};

export default AdminPage;
