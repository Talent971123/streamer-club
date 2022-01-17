import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ToobarWrapper = styled.div`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${themeGet("colors.gray.900")};
`;

export const ImageContent = styled.div`
  contain: content;
  img {
    border-radius: 50%;
  }
`;

export const BlackBorder = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${themeGet("colors.gray.300")};
`;

export const LiveWrapper = styled.div`
  background-color: ${themeGet("colors.red.100")};
  width: 50px;
  height: 28px;
  text-align: center;
  border-radius: 4px;
`;
