import React from "react";
// styeld component
import { SignUpInner, RegisterButtonContainer } from "./SignUpSection.style";
// component
import { Row, Col } from "components/Layout";
import { Text } from "components/Text";
// hoc
import { useInputHOC } from "components/hoc";
// icon
import { SendIcon } from "assets/icon";

const Input = useInputHOC(RegisterButtonContainer);

// ---------------------------------------------------------
const SignUpSection = () => {
  return (
    <Row
      padding="109px 20px"
      justifyContent="center"
      responsive={{
        900: { padding: "109px 15px" },
        375: { padding: "32px 0px" },
      }}
    >
      <SignUpInner>
        <Row
          gap={30}
          responsive={{ 900: { flexDirection: "column", gap: 30 } }}
        >
          <Col>
            <Row flexDirection="column">
              <Text fSize={22} tTransForm="uppercase">
                Sign Up For{" "}
                <Text mode="span" fColor="primary.regular">
                  $
                  <Text
                    mode="span"
                    fColor="primary.regular"
                    tFont="changa"
                    fSize={25}
                    fWeight={700}
                  >
                    5 Off
                  </Text>
                </Text>
              </Text>
              <Text fColor="gray.100" fSize={15}>
                Your first order
              </Text>
            </Row>
          </Col>
          <Col flex="1">
            <Input
              inputIcon={<SendIcon />}
              iColor="gray"
              iSize="medium"
              iFont="medium"
              placeholder="johnsmith@hotmail.com"
            />
          </Col>
        </Row>
      </SignUpInner>
    </Row>
  );
};

export default SignUpSection;
