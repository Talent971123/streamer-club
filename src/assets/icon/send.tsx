import React from "react";
// type
import { IconProps } from "types/components/Icon";
// --------------------------------
const SendIcon: React.FC<IconProps> = () => {
  return (
    <svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_71:3443)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3477 21.0488V26.5337C10.3477 26.9169 10.5935 27.2563 10.9581 27.3767C11.0489 27.4066 11.1425 27.4207 11.2346 27.4207C11.5112 27.4207 11.7784 27.2904 11.9489 27.0588L15.1571 22.6926L10.3477 21.0488Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.0104 0.385147C27.7384 0.192397 27.3813 0.166517 27.0855 0.321147L0.476861 14.2169C0.162011 14.3814 -0.0235094 14.7172 0.00240062 15.0707C0.0296506 15.4256 0.265251 15.7284 0.599901 15.8429L7.99687 18.3713L23.7506 4.9015L11.56 19.5882L23.9576 23.8256C24.0496 23.8564 24.1468 23.873 24.2437 23.873C24.4045 23.873 24.5641 23.829 24.7046 23.7442C24.9296 23.6067 25.0822 23.3764 25.121 23.1174L28.3732 1.23903C28.4218 0.907977 28.2824 0.579057 28.0104 0.385147H28.0104Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_71:3443">
          <rect
            width="28.3828"
            height="27.1999"
            fill="white"
            transform="translate(0 0.220703)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default SendIcon;
