import React, { useContext, useState, useRef } from "react";
import { useRouter } from "next/router";

import { useMutation } from "@apollo/client";
import { PLAYERQL, USERQL } from "graphql/club";

import { Button } from "components/Button";
import { Col, Row } from "components/Layout";
import { ImageCrop_Modal } from "components/Modal";
import ButtonLoading from "components/Loading/ButtonLoading";
import {
  DeskProfileWrapper,
  ContentWrapper,
  CustomInput,
  CustomText,
  CustomForm,
  ImageContent,
  PlayerBtn,
  FlexWrapper,
} from "./Intro.style";

import moment from "moment";
import { ImCancelCircle } from "react-icons/im";
import { FiSave, FiShare2, FiUserPlus } from "react-icons/fi";

import EditIcon from "assets/icon/edit";
import { s3UploadFile } from "utils/s3-helper";
import d_photo from "assets/images/player/default-player-image.png";
import { PlayerContext } from "pages/club/[club_slug]/player/[player_slug]";
import { RWebShare } from "react-web-share";
import { baseUrl } from "utils/constData";
import { UserProfile, useUser } from "@auth0/nextjs-auth0";
import { Tooltip } from "antd";

type Props = {
  option: {
    onClickFollow(value: any): void,
    teams: any,
    show: boolean,
    onFileInputChange(e: any): void,
    onTargetClick(): void,
    flag: boolean,
    setFlag(e: boolean): void,
    isSubmit: boolean,
    imageSrc: string,
  },
}

const DeskProfile = (props: Props) => {
  const { player } = useContext<any>(PlayerContext);
  const router = useRouter();
  const {
    teams,
    onClickFollow,
    show,
    onFileInputChange,
    onTargetClick,
    flag,
    setFlag,
    isSubmit,
    imageSrc
  } = props.option;
  const { user } = useUser();
  const tlist = teams
    ? teams.map((item: any) => ({ label: item.name, value: item.id }))
    : [];
  const [meta, setMeta] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!player) {
    return <></>; //add loader or skeleton loader
  }

  return (
    <DeskProfileWrapper>

      <FlexWrapper direction="row" justify="flex-start">

        <FlexWrapper maxWidth="200px">

          <ImageContent >
            <img src={imageSrc} />
            {user && (
              <Button
                onClick={onTargetClick} /** NOTE: This is not working */
                bColor="primary"
                icon={<EditIcon />}
                disabled={isSubmit}
              />
            )}
          </ImageContent>

          <input
            onChange={onFileInputChange}
            onClick={(event: any) => {
              event.target.value = null;
            }}
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            accept="image/png, image/jpeg"
          />

        </FlexWrapper>

        <FlexWrapper direction="row" justify="flex-start">

          <div style={{ display: player.bio || flag ? "flex" : "", alignItems: "center", justifyContent: "space-between" }}>
            {!flag ? (
              <FlexWrapper direction="row" justify="flex-start">
                <CustomText strong className="playerNameWrapper">
                  {`${player?.user?.first_name ?? ""} ${player?.user?.last_name ?? ""}`}
                </CustomText>
              </FlexWrapper>

            ) : (

              <FlexWrapper direction="row">

                <FlexWrapper direction="row">
                  <CustomForm.Item
                    name="first_name"
                    rules={[
                      {
                        required: true,
                        message: "First Name is required.",
                      },
                    ]}
                  >
                    <CustomInput
                      placeholder="first name"
                      disabled={isSubmit}
                    />
                  </CustomForm.Item>
                  <CustomForm.Item
                    name="last_name"
                    rules={[
                      {
                        required: true,
                        message: "Last Name is required.",
                      },
                    ]}
                  >
                    <CustomInput
                      placeholder="last name"
                      disabled={isSubmit}
                    />
                  </CustomForm.Item>
                </FlexWrapper>

                <FlexWrapper direction="row" className="saveActionButton">
                  <Button
                    type="submit"
                    formaction="#"
                    bColor="warning"
                    icon={isSubmit ? <ButtonLoading /> : <FiSave />}
                    disabled={isSubmit}
                    className="actionBtn"
                  >
                    {"Save"}
                  </Button>
                  <Button
                    bColor="warning"
                    icon={<ImCancelCircle />}
                    onClick={() => setFlag(false)}
                    disabled={isSubmit}
                    className="actionBtn"
                  >
                    {"Cancel"}
                  </Button>
                </FlexWrapper>
              </FlexWrapper>
            )}


            <div style={{ display: "flex", alignItems: "center" }}>

              {player.bio && user && (
                <CustomText>{"121 Followers"}</CustomText>
              )}

              {!flag && <FlexWrapper direction="row" justify="flex-start" >

                {user && (
                  <CustomForm.Item>
                    <Button
                      bColor="warning"
                      icon={<EditIcon />}
                      onClick={() => setFlag(true)}
                      className="actionBtn"
                    >
                      {"Edit"}
                    </Button>
                  </CustomForm.Item>
                )}

                <PlayerBtn>
                  <Tooltip trigger={(!user && show) ? "click" : "none"} placement="bottom" title="Please log in or sign up to Follow Players" color={"#202022"}>
                    <Button
                      bColor="warning"
                      icon={<FiUserPlus />}
                      onClick={e => onClickFollow(user ? false : true)}
                      className="actionBtn"
                    >
                      {"Follow Player"}
                    </Button>
                  </Tooltip>
                </PlayerBtn>
                <RWebShare
                  data={{
                    text: "Share Profile",
                    url: `${baseUrl + router.asPath}`,
                    title: `Streamer - ${player?.user?.first_name ?? ""
                      } ${player?.user?.last_name ?? ""}`,
                  }}
                >
                  <Button
                    bColor="primary"
                    bSize="small"
                    icon={<FiShare2 />}
                    className="actionBtn"
                  >
                    {"Share"}
                  </Button>

                </RWebShare>
              </FlexWrapper>}
            </div>
            {/* /end */}
          </div>

          {user && player.bio && <ContentWrapper show={true}>
            <Row alignItems="center" justifyContent="space-between">
              <CustomText>{player.bio}</CustomText>
            </Row>
          </ContentWrapper>}

        </FlexWrapper>

      </FlexWrapper>

    </DeskProfileWrapper>
  );
};

export default DeskProfile;
