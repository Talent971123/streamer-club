import { useMutation } from "@apollo/client";
import { useUser } from "@auth0/nextjs-auth0";
import d_photo from "assets/images/player/default-player-image.png";
import { Button } from "components/Button";
import { PLAYERQL, USERQL } from "graphql/club";
import { useRouter } from "next/router";
import { PlayerContext } from "pages/club/[club_slug]/player/[player_slug]";
import React, { useContext, useRef, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import {
  ClubWrapper, CustomForm, CustomInput,
  CustomSelect, CustomText, FlexWrapper
} from "./club.style";

const DeskClub: React.FC = (props: any) => {
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

  if (!player) {
    return <></>;
  }

  return (
    <ClubWrapper>

      <FlexWrapper direction="row" justify="space-evenly" >

        <FlexWrapper justify="flex-start" direction="row" className="infoWrapper">

          <CustomText strong css={{ fontSize: "1.125rem" }}>
            {"Current Club: "}
          </CustomText>
          <CustomText strong css={{ marginLeft: "24px" }}>{player.club.name}</CustomText>
        </FlexWrapper>

        <FlexWrapper justify="flex-start" direction="row" className="infoWrapper">

          <CustomText strong css={{ fontSize: "1.125rem" }}>
            {"Teams:"}
          </CustomText>
          {!flag ? (
            player.teams.map((team: { name: string }, idx: number) => (
              <Button
                key={`player-team-${idx}`}
                bColor="warning"
                disabled={isSubmit}
                style={{ marginLeft: "24px" }}
              >
                {team.name}
              </Button>
            ))
          ) : (
            <CustomForm.Item name="team_id" style={{ width: "70%" }}>
              <CustomSelect placeholder="teams" options={tlist} />
            </CustomForm.Item>
          )}

        </FlexWrapper>

        <FlexWrapper justify="flex-start" direction="row" className="infoWrapper">

          <CustomText strong css={{ fontSize: "1.125rem" }}>
            {"Player Number: "}
          </CustomText>
          {!flag ? (
            <CustomText strong css={{ marginLeft: "24px" }}>{player.positions && player.positions.join(", ")}</CustomText>
          ) : (
            <CustomForm.Item name="positions">
              <CustomInput
                placeholder="positions"
                disabled={isSubmit}
              />
            </CustomForm.Item>
          )}

        </FlexWrapper>

      </FlexWrapper>

    </ClubWrapper>
  );
};

const mapStateToProps = (state) => ({
  teams: state.teams.list,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeskClub);
