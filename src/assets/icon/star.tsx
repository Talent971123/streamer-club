import React from "react";
// type
import { IconProps } from "types/components/Icon";
// --------------------------------
const StarIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9.51855L9.71 12.3359L8.29 7.78637L12 5.03159H7.45L6 0.335938L4.55 5.03159H0L3.71 7.78637L2.29 12.3359L6 9.51855Z"
        stroke="#F8AE06"
      />
    </svg>
  );
};
const FullStarIcon: React.FC<IconProps> = ({ ...props }) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.66035 10.8861L12.034 14.2075L10.36 8.84407L14.7337 5.59647H9.36975L7.66035 0.060791L5.95094 5.59647H0.586975L4.96068 8.84407L3.28665 14.2075L7.66035 10.8861Z"
      fill="#F8AE06"
    />
  </svg>
);
export default { StarIcon, FullStarIcon };
