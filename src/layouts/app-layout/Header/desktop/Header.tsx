import React from "react";
import { useRouter } from "hooks";
// components
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
  Border,
  MenuItemBody,
  StyledMenu,
  StyledItemMenu,
  StreamLogoWrapper,
} from "./Header.style";
import { Text } from "components/Text";
// --------------------------------------- ----------------------------
import { useUser } from "@auth0/nextjs-auth0";
import { Dropdown } from "antd";
import _ from "lodash";
import { siteSettings } from 'hooks'

// Yamata
export const DeskHeader = (props: any) => {
  const { menu } = props;
  const { move, param, asPath }: any = useRouter();
  const { user } = useUser();
  const handleMenuClick = (to: any) => {
    move(to);
  };

  const paramName = !_.isUndefined(user) ? `${user?.first_name ?? ''} ${user?.last_name ?? user?.email}` : '';

  const dropdownItems = (
    <StyledMenu>

      {siteSettings('header_menu.profile') && <StyledItemMenu
        key="0"
        onClick={() =>
          handleMenuClick(`/profile?n=${encodeURI(paramName)}`)
        }
      >
        <Text fColor="white" fSize={0.875} tAlign="center">
          {"My Profile"}
        </Text>
      </StyledItemMenu>}



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
      <Row alignItems="center" justifyContent="space-between">
        <Col>
          <Row alignItems="center" gap={15}>
            {asPath === "/" || asPath.split("/")[1] === "main" ? (
              <div className="fitbox" />
            ) : (
              <Col>
                <MarkIcon />
              </Col>
            )}
            <Col>
              <StreamLogoWrapper onClick={() => handleMenuClick('/')}>
                <Image src={LogoImage} height={35} width={120} mode="intrinsic" />
              </StreamLogoWrapper>
            </Col>
            <Col>
              <Border />
            </Col>

            {menu.map((item: any, index: number) => {
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
                    <Text
                      fColor="white"
                      fSize={0.875}
                      tAlign="center"
                      padding="10px 10px"
                    >
                      {`${user?.first_name ?? ''} ${user?.last_name ?? user?.email}`}
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

              {!user && (
                <Row
                  gap={18}
                  alignItems="center"
                  flexDirection="row-reverse"
                  padding="0 20px"
                >
                  {siteSettings('header_menu.sign_up') && (
                    <Col>
                      <Button
                        bColor="warning"
                        bSize="big"
                        css={{ width: "140px", height: "20px", fontSize: 14 }}
                        onClick={() => handleMenuClick("/api/auth/login")}
                      >
                        {"Login / Sign up"}
                      </Button>
                    </Col>
                  )}

                  {siteSettings('header_menu.login') && (
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
                  )}
                </Row>
              )}
            </MenuItemBody>
          </Row>
        </Col>
      </Row>
    </HeaderWrapper>
  );
};
