import React from "react";
// type
import { IconProps } from "types/components/Icon";

// --------------------------------
const SearchIcon: React.FC<IconProps> = ({
  iColor = "white",
  iSize = { x: 18, y: 19 },
}) => {
  return (
    <svg
      width={iSize.x}
      height={iSize.y}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.99 16.6221L22.458 23.0911"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.744 19.211C14.6234 19.211 18.579 15.2555 18.579 10.376C18.579 5.49658 14.6234 1.54102 9.744 1.54102C4.86456 1.54102 0.908997 5.49658 0.908997 10.376C0.908997 15.2555 4.86456 19.211 9.744 19.211Z"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SearchIcon;
