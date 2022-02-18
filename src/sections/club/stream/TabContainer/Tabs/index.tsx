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
    <TabWrapper
      css={`
        @media only screen and (max-width: 480px) {
          white-space: nowrap;
          overflow-x: scroll;
        }
      `}
    >
      <Row
        flexDirection="row"
        justifyContent="flex-start"
        gap={40}
      >
        {menudata.map((item: commonItem, index: number) => {
          return (
            <Col key={index}>
              <MenuItem
                onClick={() => onHandleClick(item.path)}
                mode={select === item.path ? "true" : "false"}
              >
                <Text
                  fColor={select !== item.path ? "gray.300" : "white"}
                  fWeight={select !== item.path ? 100 : 800}
                  fSize={0.906}
                  padding="5px 0px"
                  wSpace="nowrap"
                  hoverStyle={
                    select !== item.path ? { fColor: "gray.200" } : {}
                  }
                  responsive={{
                    480: {
                      fSize: 0.656,
                    },
                    834: {
                      fSize: 0.844,
                    },
                  }}
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
