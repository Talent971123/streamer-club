import React from "react";
// type
import { IconProps } from "types/components/Icon";
// --------------------------------
const UpIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width={17}
      height={10}
      viewBox="0 0 17 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.552979 8.52197L8.53098 0.541972"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M15.511 8.52197L7.53296 0.541972"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
};

const DownIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width={17}
      height={11}
      viewBox="0 0 17 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.552979 1.52197L8.53098 9.49997"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M15.511 1.52197L7.53296 9.49997"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
};
export default { up: UpIcon, down: DownIcon };
