import React from "react";
import { Skeleton } from "antd";
// styled component
import { CardWrapper, CardContent } from "theme/global.state";
import { StyleContent } from "./index.style";

const MatchSkeleton: React.FC<{ mode?: string; type?: string }> = ({
  mode = "Replays",
  type = "main",
}) => {
  return (
    <CardWrapper>
      <CardContent>
        <StyleContent type={type}>
          <Skeleton.Button active block />
        </StyleContent>
      </CardContent>
    </CardWrapper>
  );
};

export default MatchSkeleton;
