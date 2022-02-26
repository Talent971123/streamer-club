import styled, {css} from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Button } from "components/Button";

export const EditButton = styled(Button)`
  margin: 0 0 0 30px;
  font-size: 11px;
  padding: 5px 22px;
`

export const DetailsWrapper = styled.div`
`;

export const DetailsContent = styled.div`
  height: 100%;
  width: 100%;
`;

export const DetailsDivider = styled.div`
  margin: 30px 0;
`;

export const TabWrapper = styled.div`
  padding: 4px 0 0 8px;
  height: 100%;
  width: 100%;
`;

export const Scrollbar = styled.div``;

export const MenuItem = styled.div<{mode?:String}>`
display: inline-block;
position: relative;
cursor: pointer;
margin: 0 10px;
transition: all 0.2s ease-in-out;
::after {
  transition: all 0.2s ease-in-out;
  position: absolute;
  content: "";
  height: 2px;
  background-color: ${themeGet("colors.red.100")};
  width: 100%;
  left: 0;
  bottom: 0;
  transform: scaleX(0);
}
:hover {
  ::after {
    transform: scaleX(1);
  }
}
${({ mode }) => {
  if (mode === "true") {
    return css`
      p {
        color: ${themeGet("colors.white.100")};
      }
      ::after {
        transform: scaleX(1);
      }
    `;
  }
}}
`;
