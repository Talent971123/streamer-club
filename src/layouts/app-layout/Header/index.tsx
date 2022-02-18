import React from "react";
import { useRouter } from "hooks";
// components
import { Hidden } from "components/Hidden";
// views
import { DeskHeader } from "./DeskTop/Header";
import { MobileHeader } from "./Mobile/Header";
// HOC
// redux
import { connect } from "react-redux";
// -------------------------------------------------------------------
const Header = (props) => {
  const { param }: any = useRouter();


  return (
    <>
      <Hidden wHide={[768]}>
        <DeskHeader menu={props.menu} />
      </Hidden>
      <Hidden wShow={[768]}>
        <MobileHeader menu={props.menu} />
      </Hidden>
    </>
  );
};
const mapStateToProps = (state) => ({
  clubInfo: state.club.info,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
