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
import { LocationIcon, AccountIcon, RefreshIcon } from "assets/icon";
import LogoImage from "assets/images/layout/logo.png";
// HOC
import { useLinkItem } from "components/hoc";
// styled component
import { HeaderMenuItem } from "./Header.style";

// -------------------------------------------------------------------
const MenuItem = useLinkItem(HeaderMenuItem);

const Header = () => {
  return (
    <>
      <ContainerWrapper>
        <Row
          alignItems="center"
          justifyContent="space-between"
          padding="14px 82px"
          gap={10}
          responsive={{ 900: { padding: "14px 52px" } }}
        >
          <Col item={3} responsive={{ 1050: { item: 5 } }}>
            <Image src={LogoImage} height={72} width={143} />
          </Col>
          <Col item={9} responsive={{ 1050: { item: 12 } }}>
            <SearchInput />
          </Col>
          <Col item={9} responsive={{ 1050: { item: 6 } }}>
            <Row alignItems="center" gap={30} justifyContent="flex-end">
              <MenuItem
                title="FIND A STORE"
                icon={<LocationIcon />}
                iconGaping={11}
              />
              <MenuItem
                title="MY ACCOUNT"
                icon={<AccountIcon.Account />}
                iconGaping={11}
              />
              <MenuItem
                title="Re-order"
                icon={<RefreshIcon />}
                iconGaping={1}
                iconDirection="column"
              />
            </Row>
          </Col>
          <Col>
            <CartState />
          </Col>
        </Row>
      </ContainerWrapper>
      <ContainerWrapper mWidth={1440}>
        <Hidden wHide={[1050]}>
          <Row>
            <MenuView />
          </Row>
        </Hidden>
      </ContainerWrapper>
    </>
  );
};
export default Header;
