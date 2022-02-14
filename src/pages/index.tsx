// next
import React from "react";
import type { NextPage } from "next";
//  apollo
// import { SampleQuery } from "graphql/sample";
import { initializeApollo } from "api/apollo";
// import page
import HomePage from "pages/main/home";

const Home: NextPage = () => {
  return <HomePage />;
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
