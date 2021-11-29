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
import { MarkIcon } from "assets/icon";
import LogoImage from "assets/images/layout/logo.png";
// HOC
import { useLinkItem } from "components/hoc";
// styled component
import { HeaderWrapper, RedMarker, HeaderMenuItem } from "./Header.style";
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
                <MenuItem title="HOME" />
              </Col>
              <Col>
                <MenuItem title="ADMIN" />
              </Col>
            </Row>
          </Col>
          <Col item={12}></Col>
        </Row>
      </ContainerWrapper>
    </HeaderWrapper>
  );
};
export default Header;
