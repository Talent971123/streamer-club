import React from "react";
// components
import { Hidden } from "components/Hidden";
// views
import HeaderView from "./Header";
import MobileHeaderView from "./Header.mobile";
import { Row } from "components/Layout";
// HOC
import { useLinkItem } from "components/hoc";
// assets
import { ClockIcon } from "assets/icon";
// styled component
import { HeaderWrapper, DispatchItem } from "./Header.style";

// -------------------------------------------------------------------
const ActionItem = useLinkItem(DispatchItem);

const Header = () => {
  return (
    <HeaderWrapper>
      <Hidden wHide={[768]}>
        <HeaderView />
      </Hidden>
      <Hidden wShow={[768]}>
        <MobileHeaderView />
      </Hidden>
      <Hidden wShow={[1050]}>
        <Row
          justifyContent="center"
          padding="12px 10px"
          className="dispatch_container"
        >
          <ActionItem
            title="SAMEDAY DISPATCH"
            icon={<ClockIcon />}
            iconGaping={11}
          />
        </Row>
      </Hidden>
    </HeaderWrapper>
  );
};
export default Header;
