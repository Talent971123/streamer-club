import React, { useContext, useState, useRef } from "react";
import { useRouter } from "next/router";

import { useMutation } from "@apollo/client";
import { PLAYERQL, USERQL } from "graphql/club";

import { Button } from "components/Button";
import { Col, Row } from "components/Layout";
import { ImageCrop_Modal } from "components/Modal";
import ButtonLoading from "components/Loading/ButtonLoading";
import DeskClub from "./club/desktop";
import MobileClub from "./club/mobile";
import TabletClub from "./club/tablet";

import {
  ProfileWrapper,
  ContentWrapper,
  ClubWrapper,
  BottomBorder,
  CustomTextArea,
  CustomInput,
  CustomSelect,
  CustomDatePicker,
  CustomText,
  CustomForm,
  ImageContent,
  PlayerDetailShow,
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
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { UserProfile, useUser } from "@auth0/nextjs-auth0";
import DeskProfile from "./profile/desk";
import MobileProfile from "./profile/mobile";
import TabletProfile from "./profile/tablet";


const IntroSection: React.FC = (props: any) => {
  const { player } = useContext<any>(PlayerContext);
  const router = useRouter();
  const { teams } = props;
  const { user } = useUser();
  const tlist = teams
    ? teams.map((item: any) => ({ label: item.name, value: item.id }))
    : [];
  const [meta, setMeta] = useState<any>(null);
  const [flag, setFlag] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmit, setisSubmit] = useState<boolean>(false);
  const [imageSrc, setiimageSrc] = useState<any>(
    player?.user?.photo ? player?.user?.photo : d_photo
  );
  const [store, setStore] = useState<any>(null);

  const [userUpdate] = useMutation(USERQL.UPDATE_USERS, {
    onCompleted() {
      setiimageSrc(store);
      setShow(false);
      toast.success("Success.");
    },
    onError(e) {
      toast.error("Error Happened.");
    },
  });

  const [update] = useMutation(PLAYERQL.UPDATE_USER_PLAYERS, {
    onCompleted() {
      setisSubmit(false);
      setFlag(false);
      toast.success("Success.");
    },
    onError(e) {
      toast.error("Error Happened.");
      setisSubmit(false);
    },
  });

  const onFinish = async (values: any) => {
    const { first_name, last_name, ...rest } = values;

    // setisSubmit(true);
    console.log("test", rest) ;
    return

    await update({
      variables: {
        pid: player.id,
        uid: player.user.id,
        po_object: {
          ...rest,
          positions: rest && rest.positions ? rest.positions.split(",") : "",
        },
        user_object: {
          first_name,
          last_name,
        },
      },
    });

    setFlag(false);
  };

  const saveImage = async (file: File, imageSrc: any) => {
    setStore(imageSrc);
    let photo: string | null = null;
    const s3res: any = await s3UploadFile("Players", player.slug, file);
    photo = s3res.location;
    setiimageSrc(`${s3res.location}?${Math.random()}`);
    await userUpdate({ variables: { uid: player.user.id, object: { photo } } });
  };

  const onTargetClick = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef?.current.click();
    }
  };

  const onFileInputChange = (e: any) => {
    setMeta(e);
    setShow(true);
  };

  const onClickFollow = (e: any) => {
    setShow(user ? false : true);
  }

  if (!player) {
    return <></>;
  }

  const option = { 
    onClickFollow,
    teams,
    show,
    onFileInputChange,
    onTargetClick,
    flag, 
    setFlag,
    isSubmit
  };

  return (
    <>
      <CustomForm
        name="basic"
        onFinish={onFinish}
        initialValues={{
          first_name: player?.user?.first_name ?? "",
          last_name: player?.user?.last_name ?? "",
          bio: player.bio,
          team_id: player.teams[0].id,
          debut_date: player.debut_date ? moment(player.debut_date) : moment(),
          positions: "",
          prev_club: player.prev_club,
        }}
      >
        <ProfileWrapper>
          <DeskProfile option={option}/>
          <TabletProfile option={option}/>
          <MobileProfile option={option}/>
        </ProfileWrapper>
        
        <DeskClub />
        <TabletClub />
        <MobileClub />

      </CustomForm>
      <ImageCrop_Modal
        show={show}
        meta={meta}
        saveImage={saveImage}
        handleClose={() => setShow(false)}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  teams: state.teams.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IntroSection);
