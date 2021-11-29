import React from "react";
// type
import { IconProps } from "types/components/Icon";
// --------------------------------
const MenuItem: React.FC<IconProps> = () => {
  return (
    <svg
      width={28}
      height={11}
      viewBox="0 0 28 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1.5H28" stroke="#1A1818" strokeWidth="1.5" />
      <path d="M0 9.5H28" stroke="#1A1818" strokeWidth="1.5" />
    </svg>
  );
};
export default MenuItem;
