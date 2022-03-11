import { Row } from "components/Layout";
import { ScreenContext } from "hooks/context/ScreenContext";
import React, { useContext } from "react";
import {
  CommentaryWrapper,
  ContentWrapper
} from "./commentary.style";
import { Comments, EventAction } from './components';

const CommentaryView: React.FC = () => {
  const { show, setEventShow } = useContext(ScreenContext);

  return (
    <CommentaryWrapper>
      <ContentWrapper>
        <Row
          flexDirection="column"
          justifyContent="center"
          gap={16}
          display="flex"
        >
          {show && <EventAction onClose={() => setEventShow("")} />}
          {!show && <Comments />}
        </Row>
      </ContentWrapper>
    </CommentaryWrapper>
  );
};

export default CommentaryView;
