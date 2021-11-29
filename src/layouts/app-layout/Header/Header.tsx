import React from "react";
// components
import { ContainerWrapper } from "components/Container";
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { SearchInput } from "components/Input";
import { CartState } from "components/State";
import { Hidden } from "components/Hidden";
// views
import { MenuView } from "views/Layout/Header/Menu";
// assets
import { BellIcon, DownIcon, MarkIcon } from "assets/icon";
import LogoImage from "assets/images/layout/logo.png";
import ProfileImage from "assets/images/layout/profile.png";
// HOC
import { useLinkItem } from "components/hoc";
// styled component
import {
  HeaderWrapper,
  RedMarker,
  HeaderMenuItem,
  Border,
} from "./Header.style";
import { Text } from "components/Text";
// -------------------------------------------------------------------

const MenuItem = useLinkItem(HeaderMenuItem);
const Header = () => {
  return (
    <HeaderWrapper>
      <ContainerWrapper>
        <Row alignItems="center" justifyContent="space-between">
          <Col item={12}>
            <Row alignItems="center" gap={15}>
              <Col>
                <RedMarker>
                  <MarkIcon />
                </RedMarker>
              </Col>
              <Col>
                <Image
                  src={LogoImage}
                  height={35}
                  width={120}
                  mode="intrinsic"
                />
              </Col>
              <Col>
                <Border />
              </Col>
              <Col>
                <MenuItem title="HOME" />
              </Col>
              <Col>
                <MenuItem title="ADMIN" />
              </Col>
            </Row>
          </Col>
          <Col item={12}>
            <Row
              gap={18}
              alignItems="center"
              flexDirection="row-reverse"
              padding="0 20px"
            >
              <Col>
                <DownIcon />
              </Col>
              <Col>
                <Image
                  src={ProfileImage}
                  height={35}
                  width={35}
                  mode="intrinsic"
                />
              </Col>
              <Col>
                <BellIcon />
              </Col>
              <Col>
                <Text fColor="white" fSize={14}>
                  Perth FC Admin
                </Text>
              </Col>
              <Col>
                <Border />
              </Col>
              <Col>
                <SearchInput />
              </Col>
            </Row>
          </Col>
        </Row>
      </ContainerWrapper>
    </HeaderWrapper>
  );
};
export default Header;
