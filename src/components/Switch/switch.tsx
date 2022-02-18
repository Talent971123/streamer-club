import React from "react";
import { Radio } from "antd";
import styled from "styled-components";
import { Text } from "components/Text";

interface switchProps {
  data: any;
  onChange?: any;
  defaultValue?: any;
}

const radioStyle = (index: any) => {
  return {
    borderRadius: "12px",
    width: 150,
    outline: "none",
    fontSize: 12,
    textAlign: "center" as const,
    marginRight: index === 0 ? "-5px" : "0px",
    marginLeft: index !== 0 ? "-5px" : "0px",
  };
};

const SwitchSelector = styled(Radio.Group)`
  background-color: white;
  border-radius: 12px;
  .ant-radio-button-wrapper:not(:first-child)::before {
    position: absolute;
    top: -1px;
    left: -1px;
    display: block;
    box-sizing: content-box;
    width: 0px;
    height: 100%;
    padding: 1px 0;
    background-color: #d9d9d9;
    transition: background-color 0.3s;
    content: "";
  }
`;

const Switch: React.FC<switchProps> = ({ data, onChange, defaultValue }) => {
  const onHandleChange = (e: any) => {
    onChange && onChange(e);
  };
  return (
    <SwitchSelector
      onChange={onHandleChange}
      defaultValue={defaultValue}
      buttonStyle="solid"
    >
      {data.map((item: any, index: number) => (
        <Radio.Button value={item.value} key={index} style={radioStyle(index)}>
          <Text>{item.title}</Text>
        </Radio.Button>
      ))}
    </SwitchSelector>
  );
};

export default Switch;
