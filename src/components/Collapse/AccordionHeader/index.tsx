import React from "react";
// component
import { Text } from "components/Text";
import { Row, Col } from "components/Layout";
// types
import { HeaderWrapperProps } from "types/components/CollapseBox";
//assets
import { ArrowsIcon } from "assets/icon";
// styled component
import { AccordionHeaderWrapper } from "./AccordionHeader.style";

// -----------------------------------------------------------

const Accordion: React.FC<HeaderWrapperProps> = ({
  handleOpen,
  hide,
  title,
}) => {
  return (
    <AccordionHeaderWrapper
      onClick={() => handleOpen()}
      className="accordionHeader"
    >
      <Row justifyContent="space-between" alignItems="center">
        <Col>
          <Text
            fSize={1}
            fWeight={900}
            fColor="whites.100"
            tTransForm="uppercase"
          >
            {title}
          </Text>
        </Col>
        <Col>{hide ? <ArrowsIcon.up /> : <ArrowsIcon.down />}</Col>
      </Row>
    </AccordionHeaderWrapper>
  );
};
export default Accordion;
