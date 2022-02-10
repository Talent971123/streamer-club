import React from "react";
import { Col, Row } from "components/Layout";
import { SupportWrapper, ContentWrapper } from "./support.style";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { connect } from "react-redux";

const SupportSection: React.FC = (props: any) => {

  const { partners, sponsors } = props

  return (
    <SupportWrapper>

      <Text fColor="white" fSize={1.5} fWeight={700}>
        {"Proudly Supported By"}
      </Text>

      <Row>
        <ContentWrapper>
          <Text fColor="white" fSize={1.0625}>
            {"Major Sponsors"}
          </Text>
          <Row justifyContent="flex-start" alignItems="center" gap={50}>
            {sponsors && sponsors.map((item: any, index: number) => {
              const { logo, name } = item.sponsor
              return (
                <Col key={index}>
                  <Image
                    src={logo}
                    oFit="contain"
                    width={100}
                    height={80}
                    alt={name}
                  />
                </Col>
              );
            })}
          </Row>
        </ContentWrapper>
      </Row>

      <Row>
        <ContentWrapper>
          <Text fColor="white" fSize={1.0625}>
            {"Partners"}
          </Text>
          <Row justifyContent="flex-start" alignItems="center" gap={20}>
            {partners && partners.map((item: any, index: number) => {
              const { logo, name } = item.partner
              return (
                <Col key={index}>
                  <Image
                    src={logo}
                    oFit="contain"
                    width={100}
                    height={80}
                    alt={name}
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


const mapStateToProps = (state) => ({
  partners: state.club.info.club_partners,
  sponsors: state.club.info.club_sponsors
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SupportSection);
