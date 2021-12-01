import React, { useState, useEffect } from "react";
// component
import { Input } from "components/Input";
//  styled component
import { InputWrapper, LinkContent, CopyWrapper } from "./LinkInput.style";
import { Col } from "components/Layout";
import { Text } from "components/Text";

//  assets

const LinkInput: React.FC<{ prefix: string; onCopyLink?: any }> = ({
  prefix = "",
  onCopyLink,
}) => {
  const [state, setState] = useState<string>("");
  const [link, setLink] = useState<string>("");
  useEffect(() => {
    setLink(prefix + "/");
  }, []);

  const onHandleCopy = () => {
    const data: string = link + state;
    onCopyLink(data);
  };
  return (
    <InputWrapper>
      <Col item={10.5}>
        <LinkContent>
          <Text fColor="black.100" fSize={16}>
            {link}
          </Text>
        </LinkContent>
      </Col>
      <Col>
        <Input
          value={state}
          onChange={(e: any) => setState(e.target.value)}
          iColor="primary"
          iSize="small"
          iFont="normal"
          iRadius="small"
          placeholder="URL... "
        />
      </Col>
      <CopyWrapper onClick={onHandleCopy}>
        <Text
          fColor="gray.300"
          fWeight={700}
          tDecorations="underline"
          hoverStyle={{ fColor: "white" }}
        >
          Copy
        </Text>
      </CopyWrapper>
    </InputWrapper>
  );
};
export default LinkInput;
