import React, { useState, useRef, useContext, useEffect } from "react";

import { Button } from "components/Button";
import { Row } from "components/Layout";
import { ProfileImageContext } from "..";

export const CommonBrowser: React.FC = () => {
  const {image, setImage, fileInputRef, files, setFiles, flag, setFlag} = useContext(ProfileImageContext);
  const onFileInputChange = (event: any) => {
    setImage(event);
    const newFiles = event.target.files;

    setFiles(files.concat(newFiles));
    setFlag(true);
  };

  const onTargetClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef?.current.click();
    }
  };

  return (
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
        <Button>Upload</Button>
      </Row>
    </div>
  );
};
