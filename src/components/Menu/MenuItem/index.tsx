import React from "react";
// styled components
import { MenuItemWrapper } from "./MenuItem.style";
// type
import { MenuItemProps } from "types/components/Menu";

// --------------------------------------------------------------

const MenuItem: React.FC<MenuItemProps> = ({
  title = "",
  fDirection = "none",
}) => {
  return <MenuItemWrapper fDirection={fDirection}>{title}</MenuItemWrapper>;
};
export default MenuItem;
