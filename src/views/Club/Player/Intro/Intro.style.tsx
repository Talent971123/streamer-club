import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ProfileWrapper = styled.div`
  margin: 30px 0;
`;

export const ContentWrapper = styled.div`
  margin: 5px 0;
  border-radius: 8px;
  padding: 20px;
  background-color: ${themeGet("colors.gray.900")};
`;

export const ImageContent = styled.div`
  contain: content;
  width: 100%;
  height: 100%;
  img {
    border-radius: 50%;
  }
`;
