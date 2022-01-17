import React from "react";
import { Col, Row } from "components/Layout";
import { TabWrapper, MenuItem } from "./tab.style";
import { Text } from "components/Text";
import { commonItem } from "types/common/common";

const TabsView: React.FC<{
  menudata: commonItem[];
  select: string;
  onHandleSelect: any;
}> = ({ menudata, select, onHandleSelect }) => {
  const onHandleClick = (path: string) => {
    onHandleSelect(path);
  };
  return (
    <TabWrapper>
      <Row flexDirection="row" justifyContent="flex-start">
        {menudata.map((item: commonItem, index: number) => {
          return (
            <Col item={32} key={index}>
              <MenuItem onClick={() => onHandleClick(item.path)} mode={select === item.path ? "true" : "false"}>
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
    </TabWrapper>
  );
};

export default TabsView;
