import React from "react";
// type
import { IconProps } from "types/components/Icon";

// -----------------------------------------------
const ScoreBoard: React.FC<IconProps> = ({
  iColor = "white",
  iSize = { x: 32, y: 21 },
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iSize.x}
      height={iSize.y}
      viewBox="0 0 512 512"
    >
      <g>
        <g xmlns="http://www.w3.org/2000/svg" id="Scoreboard">
          <g>
            <circle
              cx="256"
              cy="140"
              r="20"
              fill={iColor}
              data-original="#000000"
            />
          </g>
          <g>
            <circle
              cx="256"
              cy="220"
              r="20"
              fill={iColor}
              data-original="#000000"
            />
          </g>
          <g>
            <path
              d="m412 360h-312c-55.14 0-100-44.86-100-100v-160c0-55.14 44.86-100 100-100h312c55.14 0 100 44.86 100 100v160c0 55.14-44.86 100-100 100zm-312-320c-33.084 0-60 26.916-60 60v160c0 33.084 26.916 60 60 60h312c33.084 0 60-26.916 60-60v-160c0-33.084-26.916-60-60-60z"
              fill={iColor}
              data-original="#000000"
            />
          </g>
          <g>
            <path
              d="m140 472h-20v-52c0-11.046-8.954-20-20-20s-20 8.954-20 20v52h-20c-11.046 0-20 8.954-20 20s8.954 20 20 20h80c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
              fill={iColor}
              data-original="#000000"
            />
            <path
              d="m452 472h-20v-52c0-11.046-8.954-20-20-20s-20 8.954-20 20v52h-20c-11.046 0-20 8.954-20 20s8.954 20 20 20h80c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
              fill={iColor}
              data-original="#000000"
            />
          </g>
          <g>
            <path
              d="m140 280c-33.084 0-60-26.916-60-60v-80c0-33.084 26.916-60 60-60s60 26.916 60 60v80c0 33.084-26.916 60-60 60zm0-160c-11.028 0-20 8.972-20 20v80c0 11.028 8.972 20 20 20s20-8.972 20-20v-80c0-11.028-8.972-20-20-20z"
              fill={iColor}
              data-original="#000000"
            />
          </g>
          <g>
            <path
              d="m372 280c-33.084 0-60-26.916-60-60v-80c0-33.084 26.916-60 60-60s60 26.916 60 60v80c0 33.084-26.916 60-60 60zm0-160c-11.028 0-20 8.972-20 20v80c0 11.028 8.972 20 20 20s20-8.972 20-20v-80c0-11.028-8.972-20-20-20z"
              fill={iColor}
              data-original="#000000"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
export default ScoreBoard;
