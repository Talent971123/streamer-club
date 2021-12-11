import React, { useState, useRef } from "react";
import { FileDrop } from "react-file-drop";

import { UploadIcon } from "assets/icon";

import { Text } from "components/Text";
import { Row } from "components/Layout";

// define the styled component
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const ContentWrapper = styled.div`
  border: 1px solid ${themeGet("colors.gray.300")};
  border-radius: 7px;
  cursor: pointer;
`;

export const ImageBroswer: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState([]);
  const onFileInputChange = (event: any) => {
    const newFiles = event.target.files;

    setFiles(files.concat(newFiles));
    console.log(files);
    // do something with your files...
  };
  const onTargetClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef?.current.click();
    }
  };

  return (
    <ContentWrapper>
      <FileDrop onTargetClick={onTargetClick}>
        <Row
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={7}
          padding="10px"
        >
          <input
            onChange={onFileInputChange}
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            accept="image/png, image/jpeg"
          />
          <UploadIcon />
          <Text fColor="gray.300">Upload a file or drag and drop</Text>
          <Text fColor="gray.300" fWeight={700}>
            PNG, JPG up to 10MB
          </Text>
        </Row>
      </FileDrop>
    </ContentWrapper>
  );
};
