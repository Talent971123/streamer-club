import React, { useContext } from "react";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
//  import component
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";

const VideoPlayer = dynamic(() => import("components/Video/Bitmovin"), {
  ssr: false,
});

// import styled
import { DisplayWrpper, UpcommingDateTime } from "./display.style";
import { StreamPageContext } from "hooks/context/StreamPageContext";
import moment from "moment";

const Banner: React.FC = (props: any) => {
  const { isLive } = props;
  const { playback_id, start_datetime } = useContext(StreamPageContext);

  return (
    <DisplayWrpper>
      <Row>
        <Col item={24}>
          <VideoPlayer playback_id={playback_id} />
          {!isLive && start_datetime && (
            <UpcommingDateTime>
              <Text
                tAlign={"center"}
                fSize={1.5}
                fWeight={600}
                responsive={{
                  480: { fSize: 0.875 },
                  834: { fSize: 1 },
                }}
              >
                Stream commences at
                {` ${moment(start_datetime).format("LL hh:mmA ")}`}
              </Text>
            </UpcommingDateTime>
          )}
        </Col>
      </Row>
    </DisplayWrpper>
  );
};

const mapStateToProps = (state: any) => ({
  isLive: state.watch.live,
});

export default connect(mapStateToProps)(Banner);
