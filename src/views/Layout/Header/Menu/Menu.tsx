import React from "react";
// components
import { MenuContainer } from "components/Menu";
import { ContainerWrapper } from "components/Container";
// type
import { MenuItemType } from "types/components/Menu";
// styled components
import { MenuWrapper, MenuInner } from "./Menu.style";

// ------------------------------------------------

const Menu = () => {
  // menu data
  const menuData: Array<MenuItemType> = [
    { title: "PROTEINS" },
    { title: "PERFORMANCE" },
    { title: "WEIGHT MANAGEMENT" },
    { title: "VITAMINS & HEALTH" },
    { title: "STACKS" },
    { title: "SPECIALS" },
    { title: "BRANDS" },
    { title: "SHOP BY GOAL" },
  ];

  return (
    <MenuWrapper>
      <ContainerWrapper>
        <MenuInner>
          <MenuContainer data={menuData} />
        </MenuInner>
      </ContainerWrapper>
    </MenuWrapper>
  );
};
export default Menu;
