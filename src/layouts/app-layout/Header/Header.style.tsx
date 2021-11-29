// styled component
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

// -------------------------------------------------

export const HeaderWrapper = styled.div`
  .dispatch_container {
    border-top: 1px solid ${themeGet("colors.gray.600")};
    border-bottom: 1px solid ${themeGet("colors.gray.600")};
  }
`;

export const HeaderMenuItem = styled.div`
  cursor: pointer;
  @media screen and (max-width: 1050px) {
    .link_title {
      display: none;
    }
  }
`;
export const MobileMenuItem = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #efefef;
  border-bottom: 1px solid #efefef;
  cursor: pointer;
`;
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 0.5px solid #efefef;
  border-bottom: 1px solid #efefef;
  cursor: pointer;
`;
export const DispatchItem = styled.div`
  cursor: pointer;
`;
