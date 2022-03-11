import React, { useContext } from "react";
import { connect } from "react-redux";

import { useRouter } from "next/router";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { RWebShare } from "react-web-share";
// icon
import { FiShare2 } from "react-icons/fi";
import { AiOutlineSave } from "react-icons/ai";
import { HandIcon } from "assets/icon";
import {
  BlackBorder,
  LiveWrapper,
  ToobarWrapper,
  TeamLogo,
  ClubNameWrapper,
  AwayClubWrapper,
  HomeClubWrapper,
  ButtonsDesktopPanelWrapper,
  DesktopButtonWrapper,
} from "./toolbar.style";
import { baseUrl, USER_ROLE } from "utils/constData";
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
          <TeamLogo src={home_logo} />
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
          <TeamLogo src={away_logo} />
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
      <ButtonsDesktopPanelWrapper>
        <RWebShare
          data={{
            text: "Share Profile",
            url: `${baseUrl + router.asPath}`,
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <DesktopButtonWrapper>
            <Button bColor="primary" bSize="small" icon={<FiShare2 />}>
              <Text
                tAlign={"center"}
                fSize={0.875}
                fWeight={400}
                wSpace="nowrap"
              >
                Share
              </Text>
            </Button>
          </DesktopButtonWrapper>
        </RWebShare>
        <DesktopButtonWrapper>
          <Button icon={<AiOutlineSave />} />
        </DesktopButtonWrapper>
      </ButtonsDesktopPanelWrapper>
    </ToobarWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  isLive: state.watch.live,
});

export default connect(mapStateToProps)(ToolBarView);
