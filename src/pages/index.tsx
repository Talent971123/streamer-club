// next
import React from "react";
import type { NextPage } from "next";
//  apollo
// import { SampleQuery } from "graphql/sample";
import { initializeApollo } from "api/apollo";
// import page
import HomePage from "pages/main/home";
import { Page } from "components/Page";

const Home: NextPage = () => {
  return (
    <Page>
      <HomePage />
    </Page>
  );
};

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Home;
