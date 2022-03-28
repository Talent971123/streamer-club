import { useMutation } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0";
import d_photo from "assets/images/player/default-player-image.png";
import { ImageCrop_Modal } from "components/Modal";
import { PLAYERQL, USERQL } from "graphql/club";
import moment from "moment";
import { useRouter } from "next/router";
import { PlayerContext } from "pages/club/[club_slug]/player/[player_slug]";
import React, { useContext, useRef, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { s3UploadFile } from "utils/s3-helper";
import DeskClub from "./club/desktop";
import {
  CustomForm, ProfileWrapper
} from "./Intro.style";
import DeskProfile from "./profile/desk";







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
    console.log("test", rest);
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
    isSubmit,
    imageSrc
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

          {/* Note: Yamata
            please use only one component for responsive  
            this is bad implementation.
            to many files maintain 
            Please refactor
            */}

          <DeskProfile option={option} />
          {/* <TabletProfile option={option} /> <-- we dont need this */}
          {/* <MobileProfile option={option} /> <-- we dont need this */}

        </ProfileWrapper>

        <DeskClub />
        {/* <TabletClub /> <-- we dont need this  */}
        {/* <MobileClub />  <-- we dont need this  */}

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
