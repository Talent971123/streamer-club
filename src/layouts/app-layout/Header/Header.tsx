import React from "react";
import router from "next/router";
// components
import { ContainerWrapper } from "components/Container";
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import { SearchInput } from "components/Input";
// assets
import { BellIcon, DownIcon, MarkIcon } from "assets/icon";
import LogoImage from "assets/images/layout/logo.png";
import ProfileImage from "assets/images/layout/profile.png";
// HOC
// styled component
import { HeaderWrapper, RedMarker, MenuItem, Border } from "./Header.style";
import { Text } from "components/Text";
// -------------------------------------------------------------------

const MenuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Matches",
    path: "/club/match",
  },
  {
    title: "Team",
    path: "/club/team",
  },
  {
    title: "Player",
    path: "/club/player",
  },
  {
    title: "Community",
    path: "/club/community",
  },
  {
    title: "Admin",
    path: "/club/admin",
  },
];

const Header = () => {
  const handleMenuClick = (to: any) => {
    router.push(to);
  };

  return (
    <HeaderWrapper>
      <ContainerWrapper>
        <Row alignItems="center" justifyContent="space-between">
          <Col item={13}>
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
                <Border />
              </Col>
              {MenuItems.map((item: any, index: number) => {
                return (
                  <MenuItem
                    key={index}
                    onClick={() => handleMenuClick(item.path)}
                  >
                    <Text
                      fColor="white"
                      fSize={17}
                      hoverStyle={{ fColor: "red.100" }}
                    >
                      {item.title}
                    </Text>
                  </MenuItem>
                );
              })}
            </Row>
          </Col>
          <Col item={11}>
            <Row
              gap={18}
              alignItems="center"
              flexDirection="row-reverse"
              padding="0 20px"
            >
              <Col>
                <DownIcon />
              </Col>
              <Col>
                <Image
                  src={ProfileImage}
                  height={35}
                  width={35}
                  mode="intrinsic"
                />
              </Col>
              <Col>
                <BellIcon />
              </Col>
              <Col>
                <Text fColor="white" fSize={14}>
                  Perth FC Admin
                </Text>
              </Col>
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
export default Header;
