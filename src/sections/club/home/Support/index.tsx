import { Col, Row } from "components/Layout";
import React from "react";

import { SupportWrapper, ContentWrapper } from "./support.style";

// assets
import provider1 from "assets/images/home/provider1.png";
import provider2 from "assets/images/home/provider2.png";
import provider3 from "assets/images/home/provider3.png";
import provider4 from "assets/images/home/provider4.png";
import provider5 from "assets/images/home/provider5.png";
import provider6 from "assets/images/home/provider6.png";
import provider7 from "assets/images/home/provider7.png";
import provider8 from "assets/images/home/provider8.png";
import { Image } from "components/Image";
import { Text } from "components/Text";

const Sponsors = [
  { image: provider1 },
  { image: provider2 },
  { image: provider3 },
  { image: provider4 },
  { image: provider5 },
  { image: provider6 },
];

const Parnters = [{ image: provider8 }, { image: provider7 }];

const SupportSection: React.FC = () => {
  return (
    <SupportWrapper>
      <Text fColor="white" fSize={22} fWeight={700}>
        {"Proudly Supported By"}
      </Text>
      <Row>
        <ContentWrapper>
          <Text fColor="white" fSize={17}>
            {"Major Sponsors"}
          </Text>
          <Row justifyContent="flex-start" alignItems="center" gap={50}>
            {Sponsors.map((item: any, index: number) => {
              return (
                <Col key={index}>
                  <Image
                    src={item.image}
                    oFit="contain"
                    width={100}
                    height={80}
                  />
                </Col>
              );
            })}
          </Row>
        </ContentWrapper>
      </Row>
      <Row>
        <ContentWrapper>
          <Text fColor="white" fSize={17}>
            {"Partners"}
          </Text>
          <Row justifyContent="flex-start" alignItems="center" gap={20}>
            {Parnters.map((item: any, index: number) => {
              return (
                <Col key={index}>
                  <Image
                    src={item.image}
                    oFit="contain"
                    width={100}
                    height={80}
                  />
                </Col>
              );
            })}
          </Row>
        </ContentWrapper>
      </Row>
    </SupportWrapper>
  );
};

export default SupportSection;
