import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "hooks";
// components
import { ContainerWrapper } from "components/Container";
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import MarkIcon from "components/MarkIcon";
import { SearchInput } from "components/Input";
import { Button } from "components/Button";
// assets
import { BellIcon, DownIcon } from "assets/icon";
import LogoImage from "assets/images/layout/logo.png";
import ProfileImage from "assets/images/layout/profile.png";
// HOC
import { connect } from "react-redux";
import { setClubInfo } from "redux/actions/club";
// styled component
import { HeaderWrapper, MenuItem, Border, MenuItemBody, MenuItemBodyMobile, ProfileWrapper, StyledMenu, StyledItemMenu } from "./Header.style";
import { Text } from "components/Text";
// -------------------------------------------------------------------
import { useUser } from "@auth0/nextjs-auth0";
import { HomeQL } from "graphql/club";

import { useSubscription } from "@apollo/client";

import _ from "lodash";
import { setPlayerList } from "redux/actions/players";
import { setTeamList } from "redux/actions/teams";
import { Dropdown } from "antd";

/** Refactor later */
const MenuItems = (club_slug: string, user: any) => {
  const menus = [
    { title: "Home", path: `/club/${club_slug}`, public: true },
    { title: "Live & Upcoming", path: `/club/${club_slug}/live`, public: true },
    { title: "Replays", path: `/club/${club_slug}/replays`, public: true },
    { title: "Teams", path: `/club/${club_slug}/teams`, public: true },
    { title: "Players", path: `/club/${club_slug}/players`, public: true },
    { title: "Admin", path: `/club/${club_slug}/admin`, public: false },
  ];

  return user ? menus : _.filter(menus, ["public", true]);
};

// Yamata
const Header = (props: any) => {
  const { setTeamList, setClubInfo, setPlayerList, clubInfo } = props;
  const { move, path, param, asPath }: any = useRouter();
  const [flag, setFlag] = useState<string>("/");
  const { user } = useUser();

  const menu = MenuItems(param.club_slug, user);

  useSubscription(HomeQL.SUB_CLUB, {
    variables: {
      club_slug: param.club_slug,
    },
    onSubscriptionData({ subscriptionData: { data } }) {
      if (data) {
        setClubInfo(data.clubs[0]);
        setPlayerList(data.clubs[0].players);
        // setPlayerList(data.clubs[0].players);
        setTeamList(data.clubs[0].teams);
      }
    },
  });

  useEffect(() => {
    setFlag(path.split("/")[3]);
  }, [path]);

  const handleMenuClick = (to: any) => {
    move(to);
  };

  const bannerFlag = () => {
    props.bannerFlag()
  };

  const dropdownItems = (
    <StyledMenu>
      <StyledItemMenu key="0" onClick={() => handleMenuClick(user ? `/club/${param.club_slug}/profile` : '')}>
        <Text fColor="white" fSize={0.875} tAlign="center">
          {"My Profile"}
        </Text>
      </StyledItemMenu>
      <StyledItemMenu key="1" onClick={() => handleMenuClick("/api/auth/logout")}>
        <Text fColor="white" fSize={0.875} tAlign="center">
          {"Logout"}
        </Text>
      </StyledItemMenu>
    </StyledMenu>
  );

  return (
    <HeaderWrapper>
      <ContainerWrapper>
        <Row alignItems="center" justifyContent="space-between">
          <Col>
            <Row alignItems="center" gap={15}>
              <Col onClick={bannerFlag}>
                <MarkIcon />
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

              {menu.map((item: any, index: number) => {
                return (
                  <MenuItem
                    mode={flag === item.path.split("/")[3] ? "true" : "false"}
                    key={index}
                    onClick={() => handleMenuClick(item.path)}
                  >
                    <Text
                      fColor="white"
                      fSize={1}
                      hoverStyle={{ fColor: "white.200", hfWeight: "700" }}
                    >
                      {item.title}
                    </Text>
                  </MenuItem>
                );
              })}
            </Row>
          </Col>
          <Col item={7}>
            <Row
              gap={18}
              alignItems="center"
              flexDirection="row-reverse"
              padding="0 20px"
            >
              <MenuItemBody>
                {user && (
                  <Row alignItems="center" gap={10}>
                    <Col>
                      <Text fColor="white" fSize={0.875} tAlign="center" padding="10px 10px">
                        {user?.name}
                      </Text>
                    </Col>
                    <Col className="ImageWrapper">
                      <Image
                        src={user?.picture || ProfileImage}
                        height={40}
                        width={40}
                        oFit="cover"
                        mode="intrinsic"
                      />
                    </Col>
                    <Col className="DropdownWrapper">
                      <Dropdown overlay={dropdownItems} trigger={['hover']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                          <DownIcon />
                        </a>
                      </Dropdown>
                    </Col>
                    {/* <Col>
                      <BellIcon />
                    </Col> */}
                  </Row>
                )}

                {!user && (
                  <Row
                    gap={18}
                    alignItems="center"
                    flexDirection="row-reverse"
                    padding="0 20px"
                  >
                    <Col>
                      <Button
                        bColor="warning"
                        bSize="big"
                        css={{ width: "110px", height: "20px", fontSize: 14 }}
                        onClick={() => handleMenuClick("/api/auth/signup")}
                      >
                        {"Sign up"}
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        bColor="primary"
                        bSize="big"
                        css={{
                          width: "50px",
                          height: "20px",
                          fontSize: 14,
                          border: "none",
                        }}
                        onClick={() => handleMenuClick("/api/auth/login")}
                      >
                        {"Login"}
                      </Button>
                    </Col>
                  </Row>
                )}
              </MenuItemBody>
              <MenuItemBodyMobile>
                <Row
                  alignItems="center"
                  flexDirection="row-reverse"
                  padding="0 20px"
                >
                  {/* <Col>
                    <a href="/api/auth/logout">Logout</a>
                  </Col> */}
                  <Col className="ImageWrapper">
                    <Image
                      src={user?.picture || ProfileImage}
                      height={40}
                      width={40}
                      oFit="cover"
                      mode="intrinsic"
                    />
                  </Col>
                  {/* <Col>
                    <BellIcon />
                  </Col> */}
                  {/* <Col>
                    <Text fColor="white" fSize={0.875}>
                      {user?.name}
                    </Text>
                  </Col> */}
                </Row>
              </MenuItemBodyMobile>
            </Row>
          </Col>
        </Row>
      </ContainerWrapper>
    </HeaderWrapper>
  );
};

const mapStateToProps = (state) => ({
  clubInfo: state.club.info,
});

const mapDispatchToProps = {
  setClubInfo: setClubInfo,
  setPlayerList: setPlayerList,
  setTeamList: setTeamList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
