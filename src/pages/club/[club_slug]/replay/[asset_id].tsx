// import react
import React, { createContext, useEffect, useState } from "react";
import { WithContainer } from "components/Container";
// import views
import { DisplayView, ToolbarView } from "sections/club/stream";
import { StreamPageCtx } from "types/common/club";

export const StreamPageContext = createContext<Partial<StreamPageCtx>>({});

const StreamPage: React.FC = ({ streamInfo }: any) => {
  const [stream, setStream] = useState<Partial<StreamPageCtx>>(streamInfo);

  return (
    <StreamPageContext.Provider value={stream}>
      <WithContainer mode="wrapper" SectionView={DisplayView} />
      <WithContainer mode="wrapper" SectionView={ToolbarView} />
    </StreamPageContext.Provider>
  );
};

export const getServerSideProps = async (context: any) => {
  // const { club_slug, asset_id } = context.query;
  // const apolloClient = initializeApollo();

  // const { data } = await apolloClient.query({
  //   query: HomeQL.GET_CLUB,
  //   variables: { asset_id },
  // });

  // console.log(context.query)

  return {
    props: {
      streamInfo: {},
    },
  };
};

export default StreamPage;
