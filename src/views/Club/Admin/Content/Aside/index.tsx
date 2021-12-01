import React, { useState, useEffect } from "react";
import { Col, Row } from "components/Layout";

import { AsideWrapper, MenuItem } from "./Aside.style";
import { Text } from "components/Text";
import { commonItem } from "types/common/common";

const Aside: React.FC<{
  menudata: commonItem[];
  select: string;
  onHandleSelect: any;
}> = ({ menudata, select, onHandleSelect }) => {
  const onHandleClick = (path: string) => {
    onHandleSelect(path);
  };
  return (
    <AsideWrapper>
      <Row flexDirection="column" justifyContent="flex-start" gap={5}>
        {menudata.map((item: commonItem, index: number) => {
          return (
            <Col item={24} key={index}>
              <MenuItem onClick={() => onHandleClick(item.path)}>
                <Text
                  fColor={select !== item.path ? "gray.300" : "white"}
                  fWeight={600}
                  fSize={20}
                  padding="8px 0"
                  hoverStyle={
                    select !== item.path ? { fColor: "gray.200" } : {}
                  }
                >
                  {item.title}
                </Text>
              </MenuItem>
            </Col>
          );
        })}
      </Row>
    </AsideWrapper>
  );
};

export default Aside;
