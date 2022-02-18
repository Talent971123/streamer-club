import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
// component
import { Image } from "components/Image";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { ClubContext } from "pages/club/[club_slug]";
import { FiShare2 } from "react-icons/fi";
// import styled component
import { HeadWrapper, ShareButton, HeadClubName } from "./head.style";
// import assets
import Mark from "assets/images/home/team2.png";
import { RWebShare } from "react-web-share";
import { baseUrl } from "utils/constData";
// import { toast } from "react-toastify";
import _ from "lodash";

const HeadView: React.FC = () => {
  const club = useContext(ClubContext);
  const router = useRouter();
  const [logo, setLogo] = useState<any>(Mark);
  const [title, setTitle] = useState<any>("TEAM TITLE");
  useEffect(() => {
    setLogo(_.isEmpty(club) ? Mark : club.logo);
    setTitle(_.isEmpty(club) ? "TEAM TITLE" : club.name);
  });

  return (
    <HeadWrapper>
      <Row alignItems="center">
        <Col item={18}>
          <Row alignItems="center" gap={20}>
            <Col>
              <Image src={logo} width={89} height={90} />
            </Col>
            <Col>
              <HeadClubName>
                <Text fColor="red.100" fWeight={800} className="col-md">
                  {title}
                </Text>
              </HeadClubName>
            </Col>
          </Row>
        </Col>
        <Col item={6}>
          <Row flexDirection="row-reverse" padding="0 20px 0 20px">
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
          </Row>
        </Col>
      </Row>
    </HeadWrapper>
  );
};

export default HeadView;
