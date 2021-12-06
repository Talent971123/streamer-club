import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const GalleryWrapper = styled.div`
  margin: 30px 0;
`;

export const GalleryContent = styled.div`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${themeGet("colors.gray.900")};
`;
