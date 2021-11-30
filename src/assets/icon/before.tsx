import React from "react";
// type
import { IconProps } from "types/components/Icon";

// -----------------------------------------------
const BeforeIcon: React.FC<IconProps> = ({
  iColor = "white",
  iSize = { x: 25, y: 18 },
}) => {
  return (
    <svg
      width={iSize.x}
      height={iSize.y}
      viewBox="0 0 13 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.785889 11.6582L12.0359 0.832886L12.0359 22.4835L0.785889 11.6582Z"
        fill={iColor}
      />
    </svg>
  );
};
export default BeforeIcon;
