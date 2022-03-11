import { useUser } from "@auth0/nextjs-auth0";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import marker from "assets/images/home/mark.png";
import Mark from "assets/images/home/team2.png";
import { SlideArrow } from "components/Button/Button";
import { ClipCard } from "components/Card";
import ThumbCard from "components/Card/ThumbCard";
import { useLinkItem } from "components/hoc";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { siteSettings } from 'hooks';
import _ from "lodash";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { CardBody, CarouselBody } from "theme/global.state";
import { ClipProps } from "types/components/ClipCard";
import { thumbNailLink } from "utils/common-helper";
import ClubsFollowSection from "./Clubs";
import {
  DisplayWrapper,
  LinkWrapper,
  PContent,
  ProfileContent
} from "./profile-view.style";
import SavedMatchesSection from "./SavedMatches";
import TeamsFollowSection from "./Teams";

const NextArrow: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
      }}
      onClick={onClick}
    />
  );
};

const BeforeArrow: React.FC = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "50%",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <NextArrow />,
  prevArrow: <BeforeArrow />,
};

const playerSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  nextArrow: <NextArrow />,
  prevArrow: <BeforeArrow />,
};

const savedSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <BeforeArrow />,
};

const savedReelsData = [
  {
    id: 10,
    away_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/CCGS.png",
        name: "CCGS Football",
      },
    },
    video_asset_id: "4s01JfEXeEQvomhwK7hBoM02hDWuLbdkXGqusgtx02JjY8",
    home_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/drive-download-20211215T040147Z-001/perthfc-high+(1).png",
        name: "Perth Football Club",
      },
      division: "WOMAN---- Division 1",
    },
    round_name: "Round 100",
    name: "w v m",
    league: {
      logo: "https://via.placeholder.com/200x200.png/fff/023?text=WAFL",
    },
    start_datetime: "2022-01-15T18:30:00.002",
    status: "completed",
  },
  {
    id: 5,
    away_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/CCGS.png",
        name: "Hockey demo",
      },
    },
    video_asset_id: "eTexKeHt6q89D01VEJwhGPFNgh9pjRsmb9ovotAR4A0200",
    home_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/drive-download-20211215T040147Z-001/perthfc-high+(1).png",
        name: "Perth Football Club",
      },
      division: "Mens Division",
    },
    round_name: null,
    name: "Hockey demo",
    league: {
      logo: "https://via.placeholder.com/200x200.png/fff/023?text=WAFL",
    },
    start_datetime: "2021-12-01T02:00:00",
    status: "completed",
  },
  {
    id: 7,
    away_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/Clubs/West+Perth.png",
        name: "West Perth FC",
      },
    },
    video_asset_id: "e7oZpp6KN2GbvZxd6ppP4wO3kEwjhkFIZEXk2MCnn78",
    home_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/drive-download-20211215T040147Z-001/perthfc-high+(1).png",
        name: "Perth Football Club",
      },
      division: "Mens Division",
    },
    round_name: "Test Round",
    name: "Men vs Monster",
    league: {
      logo: "https://via.placeholder.com/200x200.png/fff/023?text=WAFL",
    },
    start_datetime: "2022-01-15T16:00:00.872",
    status: "completed",
  },
  {
    id: 4,
    away_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/Clubs/West+Perth.png",
        name: "West Perth FC",
      },
    },
    video_asset_id: "ehKU75rvqm02N2B00SuwQEFBEAcOphVR1Dy7Xp00A6N7ss",
    home_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/drive-download-20211215T040147Z-001/perthfc-high+(1).png",
        name: "Perth Football Club",
      },
      division: "Mens Division",
    },
    round_name: null,
    name: "test",
    league: {
      logo: "https://via.placeholder.com/200x200.png/fff/023?text=WAFL",
    },
    start_datetime: "2021-12-20T14:00:00",
    status: "completed",
  },
  {
    id: 6,
    away_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/CCGS.png",
        name: "CCGS Football",
      },
    },
    video_asset_id: "GKnajnrt01sBxDma64CvQQqG86H02eSFHxrZoBl018InDU",
    home_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/drive-download-20211215T040147Z-001/perthfc-high+(1).png",
        name: "Perth Football Club",
      },
      division: "WOMAN---- Division 1",
    },
    round_name: "Tie Breaker",
    name: "Women vs Men",
    league: {
      logo: "https://via.placeholder.com/200x200.png/fff/023?text=WAFL",
    },
    start_datetime: "2022-01-15T13:00:00.153",
    status: "completed",
  },
  {
    id: 1,
    away_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/Clubs/eastperthfc-high.png",
        name: "East Perth FC",
      },
    },
    video_asset_id: "3EFvrxYvrPuGAOz2Y9EO3S6nzv9FU02WYHQT402uJPW01s",
    home_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/drive-download-20211215T040147Z-001/perthfc-high+(1).png",
        name: "Perth Football Club",
      },
      division: "Mens Division",
    },
    round_name: null,
    name: "Test match",
    league: {
      logo: "https://via.placeholder.com/200x200.png/fff/023?text=WAFL",
    },
    start_datetime: "2021-12-21T00:15:09.926",
    status: "completed",
  },
  {
    id: 14,
    away_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/CCGS.png",
        name: "CCGS Football",
      },
    },
    video_asset_id: "hQGqIVt3j12f02TM5Fp3FHSB3sPWfx5SUpbW3odrGTIM",
    home_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/drive-download-20211215T040147Z-001/perthfc-high+(1).png",
        name: "Perth Football Club",
      },
      division: "Mens Division",
    },
    round_name: "Round Test",
    name: "Testing 102",
    league: {
      logo: "https://via.placeholder.com/200x200.png/fff/023?text=WAFL",
    },
    start_datetime: "2022-01-16T04:00:00.524",
    status: "completed",
  },
  {
    id: 13,
    away_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/CCGS.png",
        name: "CCGS Football",
      },
    },
    video_asset_id: "nyfu201XQT02jf00WGCtFBoZZXwf5dckjSBF6OmTke7gzQ",
    home_team: {
      club: {
        logo: "https://s3.us-east-2.amazonaws.com/assets.streamer.dev/drive-download-20211215T040147Z-001/perthfc-high+(1).png",
        name: "Perth Football Club",
      },
      division: "Mens Division",
    },
    round_name: "Round 12",
    name: "Lorem Ipsum",
    league: {
      logo: "https://via.placeholder.com/200x200.png/fff/023?text=WAFL",
    },
    start_datetime: "2022-01-16T02:00:00.924",
    status: "completed",
  },
];

const SeeAll = useLinkItem(LinkWrapper);

const ProfilePage: React.FC = (props: any) => {


  /** TEMP
   * const { teams, matches, players, club_slug, club } = useContext(ProfileContext);
   *  TODO: transfer to component
   */
  const players: any = []
  let club_slug: any = ''
  let club: any = {}


  const [routeData, setRouteData] = useState<any>();
  const { user } = useUser();
  const router = useRouter();
  const [logo, setLogo] = useState<any>(Mark);
  const [title, setTitle] = useState<any>("TEAM TITLE");
  useEffect(() => {
    setLogo(_.isEmpty(club) ? Mark : club.logo);
    setTitle(_.isEmpty(club) ? "TEAM TITLE" : club.name);
  });
  const onHandleSeeAll = (category: string) => {
    router.push(`/club/${club_slug}/${category}`);
  };
  const onHandleClick = (item: any) => {
    if (routeData === "replay") {
      router.push(`/club/${club_slug}/replay/${item}`);
    } else if (routeData === "team") {
      router.push(`/club/${club_slug}/team/${item}`);
    } else if (routeData === "player") {
      router.push(`/club/${club_slug}/player/${item}`);
    } else if (routeData === "club") {
      router.push(`/club/${club_slug}`);
    }
  };

  return (
    <ProfileContent>
      <PContent>

        {siteSettings('profile_page.clubs') && <ClubsFollowSection />}
        {siteSettings('profile_page.teams') && <TeamsFollowSection />}

        {siteSettings('profile_page.players') && (
          <DisplayWrapper>
            <Row alignItems="center" justifyContent="space-between">
              <Text fColor="white" fSize={1.25} fWeight={700} mode="p">
                {"Players Following"}
              </Text>
              <SeeAll
                handleClick={() => onHandleSeeAll("players")}
                title="See all"
                icon={<IoIosArrowForward />}
                iconDirection="row-reverse"
                alignVertical="center"
              />
            </Row>
            <Row
              padding="10px 0 0 0"
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
            >
              <Col item={24}>
                <ScrollingCarousel
                  leftIcon={<SlideArrow position="left" />}
                  rightIcon={<SlideArrow position="right" />}
                >
                  {players &&
                    players.map((player: any, index: number) => {
                      const item: ClipProps = {
                        id: player.id,
                        backgroundImage: player.image,
                        title: `${player?.user?.first_name ?? ""} ${player?.user?.last_name ?? ""
                          }`,
                        mode: "player",
                        content: player.team?.name,
                      };

                      return (
                        <CarouselBody key={`profile-players-card-${index}`} >
                          <ClipCard
                            {...item}
                            key={index}
                            handleClick={() => {
                              onHandleClick(player.slug), setRouteData("player");
                            }}
                          />
                        </CarouselBody>
                      );
                    })}
                </ScrollingCarousel>
              </Col>
            </Row>
          </DisplayWrapper>
        )}

        {siteSettings('profile_page.save_match') && <SavedMatchesSection />}

        {siteSettings('profile_page.reels') && (
          <DisplayWrapper>
            <Row alignItems="center" justifyContent="space-between">
              <Text fColor="white" fSize={1.25} fWeight={700} mode="p">
                {"Saved Reel"}
              </Text>
              <SeeAll
                handleClick={() => console.log("Button in progress")}
                title="See all"
                icon={<IoIosArrowForward />}
                iconDirection="row-reverse"
                alignVertical="center"
              />
            </Row>
            <Row
              padding="10px 0 0 0"
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
            >
              <Col item={24}>
                <ScrollingCarousel
                  leftIcon={<SlideArrow position="left" />}
                  rightIcon={<SlideArrow position="right" />}
                >
                  {savedReelsData.map((reel: any, index: number) => {
                    const item: any = {
                      id: reel.id,
                      backgroundImage: thumbNailLink(reel.video_asset_id, 200, reel?.thumbnail_url),
                      clubImage1: reel.home_team.club.logo,
                      clubName1: reel.home_team.club.name,
                      clubImage2: reel.away_team.club.logo,
                      clubName2: reel.away_team.club.name,
                      leagueImage: reel.league.logo ? reel.league.logo : marker,
                      leagueDivisionName: reel.home_team.division,
                      roundName: reel.round_name ? reel.round_name : "Round 1",
                      matchName: reel.name,
                      mode: "Replay",
                    };
                    return (
                      <CardBody>
                        <ThumbCard
                          {...item}
                          key={index}
                          handleClick={() => console.log(reel.video_asset_id)}
                        />
                      </CardBody>
                    );
                  })}
                </ScrollingCarousel>
              </Col>
            </Row>
          </DisplayWrapper>
        )}

      </PContent>
    </ProfileContent>
  );
};

export default ProfilePage;
