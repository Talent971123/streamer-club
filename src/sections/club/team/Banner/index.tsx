import React from "react";
//  import component
import { Col, Row } from "components/Layout";
import { Image } from "components/Image";
// import styled
import { BannerWrapper, Content, VSWrapper } from "./banner.style";
// import assets
import bgImg from "assets/images/team/banner-bg.jpg";
import PerthFC from "assets/images/team/PerthFC.png";
import peelthunderfc from "assets/images/team/peelthunderfc-high.png";
import waflLogo from "assets/images/team/wafl-logo.png";
import { Button } from "components/Button";
import { Text } from "components/Text";

const Banner: React.FC = () => {
  return (
    <BannerWrapper>
      <Row>
        <Col item={24}>
          <Image src={bgImg} oFit="cover" height={800} />
        </Col>
      </Row>
      <Content>
        <Row justifyContent="center" alignItems="center" gap={50}>
          <Col>
            <Image src={PerthFC} width={200} height={204} />
          </Col>
          <Col>
            <Row
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              gap={30}
            >
              <Col>
                <Image src={waflLogo} width={40} height={40} />
              </Col>
              <Col>
                <Row gap={70}>
                  <Col>
                    <Text mode="p" fColor="white" fSize={1}>
                      Perth
                    </Text>
                    <Text fColor="white" fSize={1.25} fWeight={800}>
                      Demons
                    </Text>
                  </Col>
                  <Col>
                    <VSWrapper>
                      <Text
                        tAlign="center"
                        fColor="red.100"
                        fSize={1.15625}
                        fWeight={900}
                        lHeight={30}
                        padding="10px"
                      >
                        VS
                      </Text>
                    </VSWrapper>
                  </Col>
                  <Col>
                    <Text mode="p" fColor="white" fSize={1}>
                      Peel
                    </Text>
                    <Text fColor="white" fSize={1.25} fWeight={800}>
                      Thunder
                    </Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Button bColor="outlined">{"Match Details"}</Button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Image src={peelthunderfc} width={200} height={204} />
          </Col>
        </Row>
      </Content>
    </BannerWrapper>
  );
};

export default Banner;
