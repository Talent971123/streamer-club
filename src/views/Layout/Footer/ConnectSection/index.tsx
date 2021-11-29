import React from "react";
// component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Hidden } from "components/Hidden";
// HOC
import { useLinkItem } from "components/hoc";
//assets
import {
  PhoneIcon,
  LocationIcon,
  CheckoutIcon,
  AccountIcon,
  RewardsIcon,
  SocialIcon,
} from "assets/icon";
import LogoImage from "assets/images/layout/logo.png";

// styled component
import {
  ConnectionSectionWrapper,
  ServiceItem,
  IconItem,
  ServiceInfoText,
} from "./ConnectSection.style";

// Genereted Component  by HOC
const LinkItem = useLinkItem(ServiceItem);
const IconLinkItem = useLinkItem(IconItem, "icon");
// --------------------------------------------------

const ConnectSection = () => {
  return (
    <Hidden wHide={[768]}>
      <ConnectionSectionWrapper>
        <Row>
          <Col item={4} responsive={{ 1024: { item: 6 } }}>
            <Image src={LogoImage} height={72} width={143} />
          </Col>
          <Col item={5} responsive={{ 1024: { item: 6 } }}>
            <Row
              flexDirection="column"
              justifyContent="space-between"
              padding="0 0 10px 0"
            >
              <Text
                fSize={25}
                fWeight={700}
                fColor="white"
                tFont="changa"
                lHeight={25}
              >
                Customer <br />
                Service
              </Text>
              <ServiceInfoText>
                <Text fSize={22}>1300 837 785</Text>
                <Text fSize={12}>Open 7 Days 8:00am -5:00pm</Text>
              </ServiceInfoText>
            </Row>
          </Col>
          <Col item={4} responsive={{ 1024: { item: 6 } }}>
            <Row flexDirection="column">
              <LinkItem
                iconWidth={13}
                iconSlot="start"
                title="Contact Us"
                icon={<PhoneIcon />}
                iconGaping={18}
              />
              <LinkItem
                iconWidth={13}
                iconSlot="start"
                title="Find a Store"
                icon={<LocationIcon iColor="#fff" iSize={{ x: 11, y: 16 }} />}
                iconGaping={18}
              />
              <LinkItem
                iconWidth={13}
                iconSlot="start"
                title="Checkout"
                icon={<CheckoutIcon />}
                iconGaping={18}
              />
              <LinkItem
                iconWidth={13}
                iconSlot="start"
                title="My Account"
                icon={<AccountIcon.SoAccount />}
                iconGaping={18}
              />
              <LinkItem
                iconWidth={13}
                iconSlot="start"
                title="My Active Rewards"
                icon={<RewardsIcon />}
                iconGaping={18}
              />
            </Row>
          </Col>
          <Col item={4} responsive={{ 1024: { item: 6 } }}>
            <Row flexDirection="column">
              <LinkItem title="FAQ’S" />
              <LinkItem title="Ordering" />
              <LinkItem title="Shipping" />
              <LinkItem title="Returns" />
              <LinkItem title="Track Your Order" />
            </Row>
          </Col>
          <Col item={4} responsive={{ 1024: { item: -2 } }}>
            <Hidden wHide={[1024]}>
              <Row
                gap={30}
                flexDirection="column"
                justifyContent="space-between"
                padding="0 0 10px 0"
              >
                <Col>
                  <Text
                    fSize={25}
                    fWeight={700}
                    fColor="white"
                    tFont="changa"
                    lHeight={25}
                  >
                    Connect <br />
                    WITH US
                  </Text>
                </Col>
                <Row gap={15}>
                  <IconLinkItem icon={<SocialIcon.Facebook />} />
                  <IconLinkItem icon={<SocialIcon.Instagram />} />
                  <IconLinkItem icon={<SocialIcon.Youtobe />} />
                  <IconLinkItem icon={<SocialIcon.Twitter />} />
                </Row>
              </Row>
            </Hidden>
          </Col>
        </Row>
      </ConnectionSectionWrapper>
    </Hidden>
  );
};

export default ConnectSection;
