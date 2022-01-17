import React, { useState, useRef } from "react";

import { Button } from "components/Button";
import { Row } from "components/Layout";

export const CommonBrowser: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState([]);
  const onFileInputChange = (event: any) => {
    const newFiles = event.target.files;

    setFiles(files.concat(newFiles));
    // do something with your files...
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
