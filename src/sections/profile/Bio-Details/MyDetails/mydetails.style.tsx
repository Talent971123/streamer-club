import { Input } from "antd";
import { Text } from "components/Text";
import styled from "styled-components";
import { Row } from "components/Layout";
import { Button } from "components/Button";
import themeGet from "@styled-system/theme-get";

export const DetailsWrapper = styled.div``;

export const DetailsContent = styled.div`
  height: 100%;
  width: 100%;
`;

export const DetailsDivider = styled.div`
  margin: 30px 0;
`;

export const DetailsField = styled(Input)`
  border-radius: 8px;
  height: 30px;
  color: white;
  font-size: 12px;
  background-color: ${themeGet("colors.gray.900")};
  .ant-input:hover {
    border-color: #fa3737;
    border-right-width: 1px !important;
  }
  .ant-input-focused {
    border-color: #fa3737;
    border-right-width: 1px !important;
  }
`;

export const FieldLabel = styled(Text)`
  color: gray;
  font-size: 12px;
`;

export const StyledRow = styled(Row)`
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  gap: 20px;
  @media (max-width: 834px) {
    flex-direction: column;
    gap: 0;
  }
`;
export const CancelButton = styled(Button)`
  padding: 7px 30px;
  font-size: 12px;
  border: 1px solid white;
  border-radius: 8px;
`;

export const SubmitButton = styled(Button)`
  padding: 7px 30px;
  font-size: 12px;
  border-radius: 8px;
`;
