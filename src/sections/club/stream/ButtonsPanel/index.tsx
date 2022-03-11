import React, { useState } from "react";
import { useRouter } from "next/router";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { RWebShare } from "react-web-share";
// icon
import { BiShare, BiStar, BiCut, BiImage } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineSave } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import ScoreBoardIcon from "assets/icon/scoreboard";
import { MdScore } from "react-icons/md";
import { useUser } from "@auth0/nextjs-auth0";
import { baseUrl, USER_ROLE } from "utils/constData";
import {
  PanelButton,
  ButtonsMobilePanelWrapper,
  ButtonsDesktopPanelWrapper,
  DesktopButtonWrapper,
} from "./buttonsPanel.style";
import { query, mutate } from "graphql/match";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "@apollo/client";
import _ from "lodash";
interface IButtonsPanelProps {
  toggleEvent: (s: "scoring" | "keyMoments") => void;
  createClip: () => void;
  setThumbnailFlag: () => void;
}

const ButtonsPanel: React.FC<IButtonsPanelProps> = ({
  toggleEvent,
  createClip,
  setThumbnailFlag,
}) => {
  const router = useRouter();
  const { user } = useUser();
  const [Insert] = useMutation(mutate.INSERT_SAVED_MATCHES_ONE, {
    onCompleted() {
      toast.warn("Saved!");
    },
    onError(e) {
      toast.error("Error Happened.");
    },
  });

  const { data } = useQuery(query.GET_SAVED_MATCHES, {
    variables: {
      id: user?.id,
    },
  });

  const _handleSave = async () => {
    if (_.isUndefined(user?.id)) {
      return toast.warn("please sign in.");
    }

    await Insert({
      variables: {
        object: {
          user_id: user?.id,
          match_id: router.query.asset_id,
        },
      },
    });
  };

  const adminOnly: boolean =
    USER_ROLE.ADMIN === user?.user_role_id ||
    USER_ROLE.CLUB_ADMIN === user?.user_role_id ||
    USER_ROLE.TEAM_ADMIN === user?.user_role_id;

  return (
    <>
      <ButtonsMobilePanelWrapper>
        <RWebShare
          data={{
            text: "Share Profile",
            url: `${baseUrl + router.asPath}`,
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <PanelButton>
            <BiShare size={20} style={{ marginBottom: 5 }} />
            <Text fSize={0.45} fWeight={700}>
              share
            </Text>
          </PanelButton>
        </RWebShare>
        <PanelButton onClick={_handleSave}>
          <BsBookmark size={20} style={{ marginBottom: 5 }} />
          <Text fSize={0.45} fWeight={700}>
            Save
          </Text>
        </PanelButton>

        {adminOnly && (
          <PanelButton onClick={() => toggleEvent("scoring")}>
            <ScoreBoardIcon />
            <Text fSize={0.45} fWeight={700} css={{ marginTop: 5 }}>
              Scoring
            </Text>
          </PanelButton>
        )}

        {adminOnly && (
          <PanelButton onClick={() => toggleEvent("keyMoments")}>
            <BiStar size={20} style={{ marginBottom: 5 }} />
            <Text fSize={0.45} fWeight={700}>
              Key Moments
            </Text>
          </PanelButton>
        )}

        {adminOnly && (
          <PanelButton onClick={createClip}>
            <BiCut size={20} style={{ marginBottom: 5 }} />
            <Text fSize={0.45} fWeight={700}>
              Create Clips
            </Text>
          </PanelButton>
        )}

        {adminOnly && (
          <PanelButton onClick={setThumbnailFlag}>
            <BiImage size={20} style={{ marginBottom: 5 }} />
            <Text fSize={0.45} fWeight={700} wSpace="nowrap">
              Set Thumbnail
            </Text>
          </PanelButton>
        )}
      </ButtonsMobilePanelWrapper>

      <ButtonsDesktopPanelWrapper>
        {adminOnly && (
          <DesktopButtonWrapper>
            <Button
              onClick={setThumbnailFlag}
              bColor="primary"
              bSize="small"
              icon={<BiImage />}
            >
              <Text
                tAlign={"center"}
                fSize={0.875}
                fWeight={400}
                wSpace="nowrap"
              >
                Set Thumbnail
              </Text>
            </Button>
          </DesktopButtonWrapper>
        )}

        {adminOnly && (
          <DesktopButtonWrapper>
            <Button
              onClick={createClip}
              bColor="primary"
              bSize="small"
              icon={<BiCut />}
            >
              <Text
                tAlign={"center"}
                fSize={0.875}
                fWeight={400}
                wSpace="nowrap"
              >
                Create Clip
              </Text>
            </Button>
          </DesktopButtonWrapper>
        )}

        {adminOnly && (
          <DesktopButtonWrapper>
            <Button
              bColor="primary"
              bSize="small"
              onClick={() => toggleEvent("scoring")}
            >
              <Text
                tAlign={"center"}
                fSize={0.875}
                fWeight={400}
                wSpace="nowrap"
              >
                Add Event
              </Text>
            </Button>
          </DesktopButtonWrapper>
        )}
      </ButtonsDesktopPanelWrapper>
    </>
  );
};

export default ButtonsPanel;
