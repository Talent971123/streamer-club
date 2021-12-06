import React, { ReactNode } from "react";

import { Row } from "components/Layout";
import { useLinkItem } from "components/hoc";
// styled
import { HeaderWrapper, MenuItemWrapper } from "./Header.style";
// icons
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
  { title: "Home", path: "/", Icon: AiOutlineHome },
  { title: "Schedule", path: "/", Icon: AiOutlineSchedule },
  { title: "Ladders", path: "/", Icon: AiOutlineProfile },
  { title: "Replays", path: "/", Icon: HiOutlineRefresh },
  { title: "Hightlights", path: "/", Icon: AiFillFire },
];

const MenuItem = useLinkItem(MenuItemWrapper);

const TeamHeader: React.FC = () => {
  return (
    <HeaderWrapper>
      <Row alignItems="center" gap={15}>
        {MenuItems.map((item: menu_type, index: any) => {
          <MenuItem icon={item.Icon} title={item.title} />;
        })}
      </Row>
    </HeaderWrapper>
  );
};

export default TeamHeader;
