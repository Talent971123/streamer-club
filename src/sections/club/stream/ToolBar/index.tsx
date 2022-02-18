import React, { useContext } from "react";
import { connect } from "react-redux";

import { useRouter } from "next/router";
import { Text } from "components/Text";
// icon
import { HandIcon } from "assets/icon";
import {
  BlackBorder,
  LiveWrapper,
  ToobarWrapper,
  TeamLogo,
  TeamLogoWrapper,
  ClubNameWrapper,
  AwayClubWrapper,
  HomeClubWrapper,
} from "./toolbar.style";
// context
import { StreamPageContext } from "hooks/context/StreamPageContext";
// utils
import _ from "lodash";

import { siteSettings } from "hooks";

const ToolBarView: React.FC = (props: any) => {
  const { isLive } = props;

  console.log(props);

  const { home_name, away_name, home_logo, away_logo } =
    useContext(StreamPageContext);
  const router = useRouter();

  return (
    <ToobarWrapper>
      <HomeClubWrapper>
        {siteSettings("game_day_page.cheer") && <HandIcon />}
        <ClubNameWrapper>
          <Text
            tAlign={"center"}
            fSize={1}
            fWeight={600}
            responsive={{
              480: { fSize: 0.7 },
              834: { fSize: 0.875 },
            }}
          >
            {home_name}
          </Text>
          <TeamLogoWrapper>
            <TeamLogo src={home_logo} />
          </TeamLogoWrapper>
        </ClubNameWrapper>
      </HomeClubWrapper>

      {router.pathname.split("/")[3] !== "replay" && isLive ? (
        <>
          <BlackBorder />
          <LiveWrapper>
            <Text fColor="white" fWeight={700} fSize={0.75}>
              {"Live"}
            </Text>
          </LiveWrapper>
          <BlackBorder />
        </>
      ) : null}

      <AwayClubWrapper>
        <ClubNameWrapper>
          <TeamLogoWrapper>
            <TeamLogo src={away_logo} />
          </TeamLogoWrapper>
          <Text
            tAlign={"center"}
            fSize={1}
            fWeight={600}
            responsive={{
              480: { fSize: 0.7 },
              834: { fSize: 0.875 },
            }}
          >
            {away_name}
          </Text>
        </ClubNameWrapper>
        {siteSettings("game_day_page.cheer") && <HandIcon />}
      </AwayClubWrapper>
    </ToobarWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  isLive: state.watch.live,
});

export default connect(mapStateToProps)(ToolBarView);
