import React, { useState } from "react";
import { siteSettings, useRouter } from "hooks";
// components
import { ContainerWrapper } from "components/Container";
import { Row, Col } from "components/Layout";
import { Image } from "components/Image";
import MarkIcon from "components/MarkIcon";
import { Button } from "components/Button";
// assets
import { DownIcon } from "assets/icon";
import LogoImage from "assets/images/layout/logo.png";
import ProfileImage from "assets/images/layout/profile.png";
// styled component
import {
  HeaderWrapper,
  MenuItem,
  MenuItemBody,
  NameLabel,
  StyledMenu,
  StyledItemMenu,
  StreamMobileLogoWrapper,
} from "./Header.style";
import { Text } from "components/Text";
// -------------------------------------------------------------------
import { useUser } from "@auth0/nextjs-auth0";
import { Dropdown } from "antd";
import _ from "lodash";
import { Hidden } from "components/Hidden";

// Yamata
export const MobileHeader = (props: any) => {
  const { menu } = props;
  const { move, param, asPath }: any = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const { user } = useUser();
  const handleMenuClick = (to: any) => {
    move(to);
    setShow(false);
  };

  const paramName = !_.isUndefined(user) ? `${user?.first_name} ${user?.last_name}` : '';

  const dropdownItems = (
    <StyledMenu>
      <StyledItemMenu
        key="0"
        onClick={() =>
          handleMenuClick(`/profile?n=${encodeURI(paramName)}`)
        }
      >
        <Text fColor="white" fSize={0.875} tAlign="center">
          {"My Profile"}
        </Text>
      </StyledItemMenu>
      <StyledItemMenu
        key="1"
        onClick={() => handleMenuClick("/api/auth/logout")}
      >
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
              <Col onClick={() => setShow(!show)}>
                <MarkIcon type="mobile" />
              </Col>
              <Col>
                <StreamMobileLogoWrapper onClick={() => handleMenuClick('/')}>
                  <Image
                    src={LogoImage}
                    height={35}
                    width={120}
                    mode="intrinsic"
                  />
                </StreamMobileLogoWrapper>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row
              gap={18}
              alignItems="center"
              flexDirection="row-reverse"
              padding="0 20px"
            >
              {user && (
                <Row alignItems="center" gap={10}>
                  <Col>
                    <Text
                      fColor="white"
                      fSize={0.875}
                      tAlign="center"
                      padding="10px 10px"
                    >
                      {user?.name}
                    </Text>
                  </Col>
                  <Hidden wHide={[375]}>
                    <Col className="ImageWrapper">
                      <Image
                        src={user?.picture || ProfileImage}
                        height={40}
                        width={40}
                        oFit="cover"
                        mode="intrinsic"
                      />
                    </Col>
                  </Hidden>
                  <Col className="DropdownWrapper">
                    <Dropdown overlay={dropdownItems} trigger={["hover"]}>
                      <a
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        <DownIcon />
                      </a>
                    </Dropdown>
                  </Col>
                </Row>
              )}
            </Row>
          </Col>
        </Row>
      </ContainerWrapper>
      <MenuItemBody>
        {show &&
          menu.map((item: any, index: number) => {
            return (
              <MenuItem
                mode={asPath === item.path ? "true" : "false"}
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
        {show && siteSettings('header_menu.sign_up') && (
          <MenuItem
            mode="true"
            onClick={() => handleMenuClick(user ? "/api/auth/logout" : "/api/auth/login")}
          >
            <Text
              fColor="white"
              fSize={1}
              hoverStyle={{ fColor: "white.200", hfWeight: "700" }}
            >
              {user ? "Log Out" : "Login / Sign up"}
            </Text>
          </MenuItem>
        )}
      </MenuItemBody>
    </HeaderWrapper>
  );
};
