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
import { HeaderWrapper, MenuItem, Border } from "./Header.style";
import { Text } from "components/Text";
// -------------------------------------------------------------------
import { UserProfile, useUser } from "@auth0/nextjs-auth0";
import { initializeApollo } from "api/apollo";
import { HomeQL } from "graphql/club";

import { useQuery } from "@apollo/client";

import _ from "lodash";

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

const Header = (props: any) => {
  const { club, setClubInfo, clubInfo } = props;
  const { move, path, param, asPath }: any = useRouter();
  const [flag, setFlag] = useState<string>("/");
  const { user } = useUser();

  const menu = MenuItems(param.club_slug, user);

  /** TODO: move this logic to middlewars */
  const { refetch } = useQuery(HomeQL.GET_CLUB, {
    variables: {
      club_slug: param.club_slug,
    },
    onCompleted(data) {
      data && setClubInfo(data.clubs[0]);
    },
  });

  useEffect(() => {
    setFlag(path.split("/")[3]);
  }, [path]);

  const handleMenuClick = (to: any) => {
    move(to);
  };

  return (
    <HeaderWrapper>
      <ContainerWrapper>
        <Row alignItems="center" justifyContent="space-between">
          <Col>
            <Row alignItems="center" gap={15}>
              <Col>
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
                      fSize={17}
                      hoverStyle={{ fColor: "white.200", hfWeight: "700" }}
                    >
                      {item.title}
                    </Text>
                  </MenuItem>
                );
              })}
            </Row>
          </Col>
          <Col item={9.5}>
            <Row
              gap={18}
              alignItems="center"
              flexDirection="row-reverse"
              padding="0 20px"
            >
              {user && (
                <>
                  <Col>
                    <a href="/api/auth/logout">Logout</a>
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
                  <Col>
                    <BellIcon />
                  </Col>
                  <Col>
                    <Text fColor="white" fSize={14}>
                      {user?.name}
                    </Text>
                  </Col>
                </>
              )}

              {
                !user && (
                  <>
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
                  </>
                )
                // <Col>
                //   <a href="/api/auth/login">Login</a>
                // </Col>
              }

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

const mapStateToProps = (state) => ({
  clubInfo: state.club.info,
});

const mapDispatchToProps = {
  setClubInfo: setClubInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
