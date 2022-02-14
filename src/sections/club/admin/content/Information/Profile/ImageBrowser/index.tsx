import React, { useState, useRef, useContext, useEffect } from "react";

import { UploadIcon } from "assets/icon";

import { Text } from "components/Text";
import { Row } from "components/Layout";

// define the styled component
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { ProfileImageContext } from "..";
import { ClubDetailsContext } from "pages/club/[club_slug]/admin";

const ContentWrapper = styled.div`
  border: 1px solid ${themeGet("colors.gray.300")};
  border-radius: 4px;
  cursor: pointer;
`;

export const ImageBroswer: React.FC = () => {
  const {clubDetails, setClubDetails} = useContext(ClubDetailsContext);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState([]);
  
  const onFileInputChange = (event: any) => {
    const newFiles = event.target.files;
    setClubDetails({...clubDetails, banner: newFiles[0]});
    
    setFiles(files.concat(newFiles));
    // do something with your files...
  };
  const onTargetClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef?.current.click();
    }
  };

  return (
    <ContentWrapper>
      <div onClick={onTargetClick}>
        <Row
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={7}
          padding="10px"
        >
          <input
            onChange={onFileInputChange}
            onClick={(event: any) => {
              event.target.value = null;
            }}
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            accept="image/png, image/jpeg"
          />
          <UploadIcon />
          <Text fColor="gray.300">Upload a file</Text>
          <Text fColor="gray.300" fWeight={700}>
            PNG, JPG up to 10MB
          </Text>
        </Row>
      </div>
    </ContentWrapper>
  );
};
