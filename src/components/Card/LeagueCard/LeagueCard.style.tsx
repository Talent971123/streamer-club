import themeGet from "@styled-system/theme-get";
import styled, { css } from "styled-components";
import { defaultTheme } from "theme";

export const LeagueCardWrapper = styled.div<{ mode: string, isLeagueSelected: boolean }>`
  ${({ mode, isLeagueSelected }) => {
    if (mode === "teams" || mode === "clip")
      return `
      img {
        border-radius: 2px;
      }
    `;
    if (isLeagueSelected)
      return `
      border-radius: 10px;
      border-style: solid;
      border-width: thin;
      border-color: #616161;
      background-color: #222222;
      `;
  }};
  width: 98%;
  margin: 0 5px;
  padding: 5px 5px;
  cursor: pointer;
  contain: content;
`;

export const LeagueContent = styled.div<{ mode: string }>`
  ${({ mode }) => {
    if (mode === "photos" || mode === "videos") {
      return css`
        img {
          border-radius: 4px;
        }
      `;
    } else if (mode === "teams") {
      return css`
        height: 180px;
        position: relative;
      `;
    } else if (mode === "player") {
      return css`
        img {
          border-radius: 50%;
        }
      `;
    } else if (mode === "club") {
      return css`
        max-height: 175px;
      `;
    } else if (mode === "league") {
      return css`
        max-height: 150px;
      `;
    }
  }}
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const LeagueFooter = styled.div<{ mode: string }>`
  padding: 10px 5px;

  /* ${({ mode }) => {
    if (mode === "teams") {
      return css`
        background-color: ${themeGet("colors.primary.regular")};
        border-radius: 0 0 4px 4px;
      `;
    }
  }} */
`;

export const PlayWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LeagueCardTitle = styled.div<{ mode: string }>`
  font-weight: bold;
  @media screen and (min-width: ${defaultTheme.mediaSize.lg}px) {
    font-size: 1rem !important;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.lg}px) {
    font-size: 0.875rem !important;
  }

  @media screen and (max-width: ${defaultTheme.mediaSize.md}px) {
    font-size: 0.688rem !important;
  }
`;
