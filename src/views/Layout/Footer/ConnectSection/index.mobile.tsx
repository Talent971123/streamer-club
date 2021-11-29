import React from "react";
// component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Hidden } from "components/Hidden";

// HOC
import LogoImage from "assets/images/layout/logo_mobile.png";

// styled component
import {
  ConnectionSectionWrapper,
  ServiceInfoText,
} from "./ConnectSection.style";
// --------------------------------------------------

const ConnectSection = () => {
  return (
    <Hidden wShow={[768]}>
      <ConnectionSectionWrapper>
        <Row flexDirection="column" padding="0 0 12px 0" gap={10}>
          <Col>
            <Image src={LogoImage} height={32} width={132} />
          </Col>
          <Col>
            <Row flexDirection="column">
              <Text
                fSize={25}
                fWeight={700}
                fColor="white"
                tFont="changa"
                lHeight={25}
                tTransForm="uppercase"
              >
                Customer Service
              </Text>
              <ServiceInfoText>
                <Text fSize={22} fWeight={900}>
                  1300 837 785
                </Text>
              </ServiceInfoText>
            </Row>
          </Col>
        </Row>
      </ConnectionSectionWrapper>
    </Hidden>
  );
};

export default ConnectSection;
