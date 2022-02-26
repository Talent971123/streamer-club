import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
// component
import { Image } from "components/Image";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { ClubContext } from "pages/club/[club_slug]";
import { FiSave, FiShare2, FiUserPlus, FiUserMinus } from "react-icons/fi";
// import styled component
import { HeadWrapper, ShareButton, HeadClubName } from "./head.style";
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
import teams from "graphql/club/teams";

const HeadView: React.FC = (props: any) => {
  const router = useRouter();
  const { team_slug } = router.query;
  const { club } = props;
  const team = _.find(club.teams, ["slug", team_slug]);
  const { user } = useUser();

  const [follow] = useMutation(mutate.USER_FOLLOW_TEAM);
  const [unfollow] = useMutation(mutate.USER_UNFOLLOW_TEAM);

  const followedTeams = team?.user_team_follows?.map(
    (c: any) => `${c.team_id}-${c.user_id}`
  );

  const handleFollow = () => {
    if (user) {
      if (followed()) {
        unfollow({
          variables: {
            where: {
              user_id: { _eq: user.id },
              team_id: { _eq: team.id },
            },
          },
        });
      } else {
        follow({
          variables: {
            team_objects: {
              user_id: user.id,
              team_id: team.id,
            },
            club_objects: {
              user_id: user.id,
              club_id: club.id,
            },
          },
        });
      }
    } else {
      router.push("/api/auth/login");
    }
  };

  /** TODO: Refactor to use agregate */
  const followed = () => followedTeams.includes(`${team.id}-${user?.id}`);

  if (_.isEmpty(club)) {
    return <></>;
  }

  return (
    <HeadWrapper>
      <Row alignItems="center">
        <Col item={18}>
          <Row alignItems="center" gap={20}>
            <Col>
              <Image src={team.image} width={89} height={90} />
            </Col>
            <Col>
              <HeadClubName>
                <Text fColor="red.100" fWeight={800} className="col-md">
                  {team.name}
                </Text>
              </HeadClubName>
            </Col>
          </Row>
        </Col>
        <Col item={6}>
          <Row
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="center"
            padding="0 20px 0 20px"
          >
            <>
              {club && (
                <Text fSize={1}>{`${
                  followedTeams?.length || "0"
                } Followers`}</Text>
              )}

              {user && (
                <Button
                  onClick={handleFollow}
                  bColor={followed() ? "gray" : "warning"}
                  margin="0px 10px"
                  icon={followed() ? <FiUserMinus /> : <FiUserPlus />}
                >
                  {followed() ? "Unfollow Team" : "Follow Team"}
                </Button>
              )}
            </>
            <RWebShare
              data={{
                text: "Share Profile",
                url: `${baseUrl + router.asPath}`,
                title: `Streamer - ${club.name}`,
              }}
            >
              <ShareButton
                margin="10px"
                bColor="primary"
                bSize="small"
                icon={<FiShare2 />}
              >
                {"Share"}
              </ShareButton>
            </RWebShare>
          </Row>
        </Col>
      </Row>
    </HeadWrapper>
  );
};

const mapStateToProps = (state) => ({
  club: state.club.info,
});

export default connect(mapStateToProps)(HeadView);
