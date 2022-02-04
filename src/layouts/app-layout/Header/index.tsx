import React from "react";
// components
import { Hidden } from "components/Hidden";
// views
import HeaderView from "./Header";
// HOC
// styled component
import { HeaderWrapper } from "./Header.style";

// -------------------------------------------------------------------
const Header = (props) => {
  return (
    <HeaderWrapper>
      <Hidden>
        <HeaderView bannerFlag={props.bannerFlag}/>
      </Hidden>
    </HeaderWrapper>
  );
};
export default Header;
