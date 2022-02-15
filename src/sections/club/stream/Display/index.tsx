import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@apollo/client";
import { query } from "graphql/match";
//  import component
import { Col, Row } from "components/Layout";

const VideoPlayer = dynamic(() => import("components/Video/Bitmovin"), {
  ssr: false,
});

// import styled
import { DisplayWrpper } from "./display.style";
import { useRouter } from "next/router";

const Banner: React.FC = () => {
  const router = useRouter();
  const { loading, data } = useQuery(query.GET_MATCH_BY_PK, {
    variables: { id: router.query.asset_id },
  });

  if (loading) return <></>;

  return (
    <DisplayWrpper>
      <Row>
        <Col item={24}>
          <VideoPlayer playback_id={data.matches_by_pk.video_asset_id} />
        </Col>
      </Row>
    </DisplayWrpper>
  );
};

export default Banner;
