import React from "react";
// components
import { Hidden } from "components/Hidden";
// views
import { DeskHeader } from "./desktop/Header";
import { MobileHeader } from "./mobile/Header";
// styled component
import { HeaderWrapper } from "./desktop/Header.style";

// -------------------------------------------------------------------
const Header = (props: any) => {
  return (
    <HeaderWrapper>
      <Hidden wHide={[768]}>
        <DeskHeader menu={props.menu} />
      </Hidden>
      <Hidden wShow={[768]}>
        <MobileHeader menu={props.menu} />
      </Hidden>
    </HeaderWrapper>
  );
};
export default Header;
