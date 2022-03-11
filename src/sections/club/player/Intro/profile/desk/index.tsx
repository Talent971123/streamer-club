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

type Props = {
  option: {
    onClickFollow(value: any):void,
    teams: any,
    show: boolean,
    onFileInputChange(e: any): void,
    onTargetClick():void,
    flag: boolean, 
    setFlag(e: boolean): void,
    isSubmit: boolean,
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
    isSubmit
  } = props.option;
  const { user } = useUser();
  const tlist = teams
    ? teams.map((item: any) => ({ label: item.name, value: item.id }))
    : [];
  const [meta, setMeta] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageSrc, setiimageSrc] = useState<any>(
    player?.user?.photo ? player?.user?.photo : d_photo
  );

  if (!player) {
    return <></>;
  }

  return (
      <DeskProfileWrapper>
        <Row gap={20} justifyContent="space-between">
          <Col>
            <Row alignItems="flex-start">
              <ImageContent >
                <img src={imageSrc.src}/>
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

              {user && (
                <Button
                  onClick={onTargetClick}
                  bColor="primary"
                  icon={<EditIcon />}
                  disabled={isSubmit}
                  css={{ border: "none" }}
                />
              )}
            </Row>
          </Col>
          <Col item={20} style={{display: "flex" , alignItems: 'center'}}>
            <div style={{width: "100%"}}>
              {/* first */}
              <div style={{display: player.bio || flag ? "flex" : "", alignItems: "center", justifyContent: "space-between"}}>
                {!flag ? (
                  <CustomText strong>
                    {`${player?.user?.first_name ?? ""} ${
                      player?.user?.last_name ?? ""
                    }`}
                  </CustomText>
                ) : (
                  <>
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
                  </>
                )}
                <div style={{display: "flex", alignItems: "center"}}>
                  {player.bio && user && (
                    <CustomText>{"121 Followers"}</CustomText>
                  )}
                  {!flag ? (
                    <>
                      {user && (
                        <CustomForm.Item>
                          <Button
                            bColor="warning"
                            icon={<EditIcon />}
                            onClick={() => setFlag(true)}
                          >
                            {"Edit"}
                          </Button>
                        </CustomForm.Item>
                      )}
                      <PlayerBtn>
                        <Button 
                          bColor="warning"
                          icon={<FiUserPlus />}
                          onClick={e => onClickFollow( user ? false : true )}
                        >
                          {"Follow Player"}
                        </Button>
                      </PlayerBtn>
                      <RWebShare
                        data={{
                          text: "Share Profile",
                          url: `${baseUrl + router.asPath}`,
                          title: `Streamer - ${
                            player?.user?.first_name ?? ""
                          } ${player?.user?.last_name ?? ""}`,
                        }}
                      >
                        <Button
                          bColor="primary"
                          bSize="small"
                          icon={<FiShare2 />}
                        >
                          {"Share"}
                        </Button>
                      </RWebShare>
                    </>
                  ) : (
                    <PlayerBtn style={{display: "flex"}}>
                      <Button
                        type="submit"
                        formaction="#"
                        bColor="warning"
                        icon={isSubmit ? <ButtonLoading /> : <FiSave />}
                        disabled={isSubmit}
                      >
                        {"Save"}
                      </Button>
                      <Button
                        bColor="warning"
                        icon={<ImCancelCircle />}
                        onClick={() => setFlag(false)}
                        disabled={isSubmit}
                      >
                        {"Cancel"}
                      </Button>
                    </PlayerBtn>
                  )}
                </div>
                {/* /end */}
              </div>
              {user ? (player.bio ? (
                (
                  <ContentWrapper show={true}>
                    <Row alignItems="center" justifyContent="space-between">
                      <CustomText>{player.bio}</CustomText>
                    </Row>
                  </ContentWrapper>)
              ) : null) : (
                <> 
                {show? (
                  <ContentWrapper show={false}>
                    <Row alignItems="center" justifyContent="space-between">
                      <CustomText>Please log in or sign up to Follow Players</CustomText>
                    </Row>
                  </ContentWrapper>
                ): null}
                </>
              )                
              }
            </div>
          </Col>
        </Row>
      </DeskProfileWrapper>
  );
};

export default DeskProfile;
