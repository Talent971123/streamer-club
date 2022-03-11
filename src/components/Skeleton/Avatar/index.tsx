import React from "react";
import { Skeleton } from "antd";
// styled component
import { CardWrapper, CardContent } from "theme/global.state";
import { StyleContent } from "./index.style";

const MatchSkeleton: React.FC<{ mode?: string }> = ({ mode = "Replays" }) => {
  return (
    <CardWrapper>
      <CardContent>
        <StyleContent>
          <Skeleton.Button active block />
        </StyleContent>
      </CardContent>
    </CardWrapper>
  );
};

export default MatchSkeleton;
