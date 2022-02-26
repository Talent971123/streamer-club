import themeGet from "@styled-system/theme-get";
import styled from "styled-components";

export const LinkWrapper = styled.div`
  cursor: pointer;
  color: ${themeGet("colors.gray.200")};
  :hover {
    text-decoration: underline;
    color: ${themeGet("colors.white")};
  }
`;

export const DisplayWrapper = styled.div`
  margin: 30px 0;
`;

export const ClubSlider = styled.div`
  margin: 0 5px;
  cursor: pointer;
  .playerWrapper {
    border-radius: 50%;
  }
  .teamsWrapper {
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div``;

export const PContent = styled.div`
  height: 100%;
  width: 100%;
`;
