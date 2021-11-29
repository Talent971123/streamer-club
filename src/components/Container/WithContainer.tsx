import React from "react";
// component
import {
  Container,
  ColorContainer,
  ContainerWrapper,
} from "components/Container";

// types
import { WithContainerProps } from "types/components/Container";

// -------------------------------------------------------------
const WithContainer = ({
  cColor,
  SectionView,
  mWidth,
  mode = "colorContainer",
  ...props
}: WithContainerProps) => {
  if (mode === "colorContainer") {
    return (
      <ColorContainer cColor={cColor} {...props}>
        <Container>
          <SectionView />
        </Container>
      </ColorContainer>
    );
  }
  if (mode === "container") {
    return (
      <Container>
        <SectionView />
      </Container>
    );
  }
  if (mode === "wrapper") {
    return (
      <ContainerWrapper mWidth={mWidth}>
        <SectionView />
      </ContainerWrapper>
    );
  }
  if (mode === "none") {
    return <SectionView />;
  }
  return <></>;
};

export default WithContainer;
