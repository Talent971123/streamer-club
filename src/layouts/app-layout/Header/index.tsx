import React from "react";
// components
import { Hidden } from "components/Hidden";
// views
import HeaderView from "./Header";
// HOC
// styled component
import { HeaderWrapper } from "./Header.style";

// -------------------------------------------------------------------
const Header = () => {
  return (
    <HeaderWrapper>
      <Hidden>
        <HeaderView />
      </Hidden>
    </HeaderWrapper>
  );
};
export default Header;
