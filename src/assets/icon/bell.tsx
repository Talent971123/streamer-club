import React from "react";
// type
import { IconProps } from "types/components/Icon";

// -----------------------------------------------
const BellIcon: React.FC<IconProps> = ({
  iColor = "white",
  iSize = { x: 20, y: 20 },
}) => {
  return (
    <svg
      width={iSize.x}
      height={iSize.y}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_761_1825)">
        <path
          d="M9.99999 20.7383C11.1416 20.7383 12.08 19.8685 12.1887 18.7554H7.81128C7.92003 19.8685 8.85835 20.7383 9.99999 20.7383Z"
          fill={iColor}
        />
        <path
          d="M17.6529 14.3265C16.982 14.3265 16.4382 13.7827 16.4382 13.1118V9.09402C16.4382 6.2448 14.5872 3.82824 12.0222 2.98031C12.0293 2.91152 12.0329 2.8418 12.0329 2.77117C12.0329 1.65023 11.121 0.738281 10 0.738281C8.87911 0.738281 7.96715 1.65023 7.96715 2.77117C7.96715 2.8418 7.97082 2.91152 7.97786 2.98031C5.41289 3.82824 3.56192 6.2448 3.56192 9.09402V13.1118C3.56192 13.7827 3.01805 14.3265 2.34719 14.3265C1.44781 14.3265 0.71875 15.0556 0.71875 15.955C0.71875 16.8543 1.44785 17.5834 2.34719 17.5834H17.6529C18.5523 17.5834 19.2814 16.8543 19.2814 15.955C19.2814 15.0556 18.5523 14.3265 17.6529 14.3265ZM10 1.91016C10.4553 1.91016 10.8289 2.26531 10.8589 2.71305C10.5779 2.67559 10.2913 2.6559 10 2.6559C9.70879 2.6559 9.42219 2.67559 9.14122 2.71305C9.17122 2.26531 9.54481 1.91016 10 1.91016V1.91016Z"
          fill={iColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_761_1825">
          <rect
            width="20"
            height="20"
            fill={iColor}
            transform="translate(0 0.738281)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default BellIcon;
