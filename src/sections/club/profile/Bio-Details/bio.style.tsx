import themeGet from "@styled-system/theme-get";
import { Button } from "components/Button";
import styled, {css} from "styled-components";

export const ContentWrapper = styled.div`
  margin: 30px 0;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  
`;

export const EditButton = styled(Button)`
  margin: 0 0 0 30px;
  font-size: 12px;
  padding: 5px 24px;
  border: 1px solid white;
`
export const DetailsContent = styled.div`
  background-color: ${themeGet("colors.gray.900")};
  border-radius: 8px;
  margin: 30px 0;
`;
