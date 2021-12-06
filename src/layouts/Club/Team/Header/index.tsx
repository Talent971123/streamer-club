import React, { ReactNode } from "react";

import { Row, Col } from "components/Layout";
import { useLinkItem } from "components/hoc";
import { Text } from "components/Text";
// styled
import {
  HeaderWrapper,
  MenuItemWrapper,
  HeaderContent,
  BlackBorder,
} from "./Header.style";

// icons
import { MarkIcon } from "assets/icon";
import {
  AiOutlineHome,
  AiOutlineSchedule,
  AiOutlineProfile,
  AiFillFire,
} from "react-icons/ai";
import { HiOutlineRefresh } from "react-icons/hi";

//  type
interface menu_type {
  title: string;
  path: string;
  Icon: ReactNode;
}

// define the data
const MenuItems: menu_type[] = [
  { title: "Home", path: "/", Icon: <AiOutlineHome /> },
  { title: "Schedule", path: "/", Icon: <AiOutlineSchedule /> },
  { title: "Ladders", path: "/", Icon: <AiOutlineProfile /> },
  { title: "Replays", path: "/", Icon: <HiOutlineRefresh /> },
  { title: "Hightlights", path: "/", Icon: <AiFillFire /> },
];

const MenuItem = useLinkItem(MenuItemWrapper);

const TeamHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Row alignItems="center" gap={15}>
          <Col>
            <Row gap={20} alignItems="center">
              <Col>
                <MarkIcon />
              </Col>
              <Col>
                <Text>FootBall</Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <BlackBorder />
          </Col>
          {MenuItems.map((item: menu_type, index: any) => {
            return (
              <MenuItem
                icon={item.Icon}
                title={item.title}
                key={index}
                alignVertical="center"
              />
            );
          })}
        </Row>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default TeamHeader;
