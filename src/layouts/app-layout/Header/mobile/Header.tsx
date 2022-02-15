import React, { useState } from "react";
import { useRouter } from "hooks";
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
} from "./Header.style";
import { Text } from "components/Text";
// -------------------------------------------------------------------
import { useUser } from "@auth0/nextjs-auth0";
import { Dropdown } from "antd";
import _ from "lodash";

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
  const dropdownItems = (
    <StyledMenu>
      <StyledItemMenu
        key="0"
        onClick={() =>
          handleMenuClick(user ? `/club/${param.club_slug}/profile` : "")
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
      <Row alignItems="center" justifyContent="space-between">
        <Col>
          <Row alignItems="center" gap={15}>
            <Col onClick={() => setShow(!show)}>
              <Col>
                <MarkIcon type="mobile" />
              </Col>
            </Col>
            <Col>
              <Image src={LogoImage} height={35} width={120} mode="intrinsic" />
            </Col>
          </Row>
        </Col>
        <Col item={12}>
          <Row
            gap={18}
            alignItems="center"
            flexDirection="row-reverse"
            padding="0 20px"
          >
            {user && (
              <>
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
                <Col className="ImageWrapper">
                  <Image
                    src={user?.picture || ProfileImage}
                    height={40}
                    width={40}
                    oFit="cover"
                    mode="intrinsic"
                  />
                </Col>
                <NameLabel>
                  <Text
                    fColor="white"
                    fSize={0.875}
                    tAlign="center"
                    padding="10px 10px"
                  >
                    {user?.name}
                  </Text>
                </NameLabel>
              </>
            )}

            {!user && (
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
            )}
          </Row>
        </Col>
      </Row>
      <MenuItemBody>
        {show &&
          menu.map((item: any, index: number) => {
            return (
              <MenuItem
                mode={asPath === item.path ? "true" : "false"}
                onClick={() => handleMenuClick(item.path)}
                key={index}
              >
                {item.title}
              </MenuItem>
            );
          })}
      </MenuItemBody>
    </HeaderWrapper>
  );
};
