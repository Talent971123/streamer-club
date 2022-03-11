import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
// component
import { Image } from "components/Image";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { ClubContext } from "pages/club/[club_slug]";
import { FiSave, FiShare2, FiUserPlus, FiUserMinus } from "react-icons/fi";
// import styled component
import { HeadWrapper, ShareButton, HeadClubName, FollowButton, FollowerText } from "./head.style";
// import assets
import Mark from "assets/images/home/team2.png";
import { RWebShare } from "react-web-share";
import { baseUrl } from "utils/constData";
// import { toast } from "react-toastify";
import _ from "lodash";
import { Button } from "components/Button";
import { connect } from "react-redux";
import { useUser } from "@auth0/nextjs-auth0";
import { useMutation } from "@apollo/client";
import { mutate } from "graphql/user";
import { siteSettings } from "hooks";

const HeadView: React.FC = (props: any) => {
  const { club } = props
  const router = useRouter();
  const { user } = useUser()

  const [follow] = useMutation(mutate.USER_FOLLOW_CLUB);
  const [unfollow] = useMutation(mutate.USER_UNFOLLOW_CLUB);

  const followedClubs = club?.user_club_follows?.map((c: any) => `${c.club_id}-${c.user_id}`)

  const handleFollow = () => {
    if (user) {

      if (followed()) {
        unfollow({
          variables: {
            where: {
              user_id: { _eq: user.id },
              club_id: { _eq: club.id }
            }
          }
        })
      } else {
        follow({
          variables: {
            objects: {
              user_id: user.id,
              club_id: club.id
            }
          }
        })
      }

    } else {
      router.push('/api/auth/login')
    }
  }

  /** TODO: Refactor to use agregate */
  const followed = () => followedClubs.includes(`${club.id}-${user?.id}`)

  if (_.isEmpty(club)) {
    return <></>
  }


  return (
    <HeadWrapper>

      <div className="name-wrapper">
        <Image src={club.logo} width={89} height={90} />
        <HeadClubName>
          <Text fColor="red.100" fWeight={800} className="col-md">
            {club.name}
          </Text>
        </HeadClubName>
      </div>

      <div className="button-wrapper">
        {siteSettings("components.follow_club_count") && <>{club && <FollowerText><Text fSize={1}>{`${club.user_club_follows?.length || "0"} Followers`}</Text></FollowerText>}</>}
        <FollowButton onClick={handleFollow} bColor={followed() ? "gray" : "warning"} icon={followed() ? <FiUserMinus /> : <FiUserPlus />}>
          {followed() ? "Unfollow" : "Follow Club"}
        </FollowButton>
        <RWebShare
          data={{
            text: "Share Profile",
            url: `${baseUrl + router.asPath}`,
            title: `Streamer - ${club.name}`,
          }}
        >
          <ShareButton bColor="primary" bSize="small" icon={<FiShare2 />}>
            {"Share"}
          </ShareButton>

        </RWebShare>
      </div>

    </HeadWrapper>
  )

};

const mapStateToProps = (state) => ({
  club: state.club.info
});

export default connect(mapStateToProps)(HeadView);
