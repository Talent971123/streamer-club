import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { connect } from "react-redux";
// import react
import { WithContainer } from "components/Container";
import { Page } from "components/Page";
// import views
import {
  BannerView,
  ClipView,
  GameDayView,
  NewsView,
  PlayerView,
  SupportView,
  TeamsView,
  ReplyView,
} from "sections/club/home";

import { siteSettings } from "hooks";
import _ from "lodash";
import { ClubHeadView } from "sections/club/home/Head";

const HomePage: NextPage = (props: any) => {
  const { club } = props;
  const fallback = `https://via.placeholder.com/900x600.png/000/fff?text=${encodeURI(
    club?.name || ""
  )}`;
  const [banner, setBanner] = useState<string>(fallback);

  useEffect(() => {
    if (!_.isUndefined(club?.banner_image)) {
      setBanner(club?.banner_image);
    }
  }, [club?.banner_image]);

  return (
    <Page description={club.name} image={banner}>
      {siteSettings("club_page.banner") && (
        <WithContainer
          mode="wrapper"
          SectionView={BannerView}
          sectionProps={{ banner }}
        />
      )}
      <WithContainer mode="wrapper" SectionView={ClubHeadView} />
      {siteSettings("club_page.gameday") && (
        <WithContainer mode="container" SectionView={GameDayView} />
      )}
      {siteSettings("club_page.replays") && (
        <WithContainer mode="container" SectionView={ReplyView} />
      )}
      {siteSettings("club_page.clips") && (
        <WithContainer
          mode="container"
          SectionView={ClipView}
          sectionProps={{ clubId: club.id }}
        />
      )}
      {siteSettings("club_page.teams") && (
        <WithContainer mode="container" SectionView={TeamsView} />
      )}
      {siteSettings("club_page.players") && (
        <WithContainer mode="container" SectionView={PlayerView} />
      )}
      {siteSettings("club_page.news") && (
        <WithContainer mode="container" SectionView={NewsView} />
      )}
      {siteSettings("club_page.sponsors") && (
        <WithContainer mode="container" SectionView={SupportView} />
      )}
    </Page>
  );
};

const mapStateToProps = (state: any) => ({
  club: state.club.info,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
