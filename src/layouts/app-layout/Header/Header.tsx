import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "hooks";
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
  { title: "Home", path: "/" },
  { title: "Matches", path: "/club/match" },
  { title: "Teams", path: "/club/team/all" },
  { title: "Players", path: "/club/player/all" },
  { title: "Community", path: "/club/community" },
  { title: "Admin", path: "/club/admin" },
];

const Header = () => {
  const { move, path } = useRouter();
  const [flag, setFlag] = useState<string>("/");

  useEffect(() => {
    setFlag(path);
  }, [path]);

  const handleMenuClick = (to: any) => {
    move(to);
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
                    mode={flag === item.path ? "true" : "false"}
                    key={index}
                    onClick={() => handleMenuClick(item.path)}
                  >
                    <Text
                      fColor="white"
                      fSize={17}
                      hoverStyle={{ fColor: "red.200" }}
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
              <Col className="ImageWrapper">
                <Image
                  src={ProfileImage}
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
