import React from "react";
// components
import { ColorContainer } from "components/Container";
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { SearchInput } from "components/Input";
// HOC
import { useLinkItem } from "components/hoc";
// assets
import { MenuIcon, SearchIcon, CartIcon } from "assets/icon";
import LogoImage from "assets/images/layout/logo_mobile.png";
// styled component
import { MobileMenuItem, LogoWrapper } from "./Header.style";

// -------------------------------------------------------------------
const MenuItem = useLinkItem(MobileMenuItem, "icon");

const MobileHeader = () => {
  return (
    <>
      <Row justifyContent="space-between">
        <Col>
          <MenuItem icon={<MenuIcon />}></MenuItem>
        </Col>
        <Col item={24}>
          <LogoWrapper>
            <Image src={LogoImage} height={32} width={133} />
          </LogoWrapper>
        </Col>
        <Col>
          <Row>
            <MenuItem
              icon={<SearchIcon iColor="#1A1818" iSize={{ x: 22, y: 22 }} />}
            ></MenuItem>
            <MenuItem icon={<CartIcon iSize={{ x: 28, y: 25 }} />}></MenuItem>
          </Row>
        </Col>
      </Row>
      <ColorContainer cColor="whites.100">
        <Row alignItems="center" justifyContent="center" padding="14px 25px">
          <SearchInput />
        </Row>
      </ColorContainer>
    </>
  );
};
export default MobileHeader;
