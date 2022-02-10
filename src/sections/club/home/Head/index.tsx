import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
// component
import { Button } from "components/Button";
import { Image } from "components/Image";
import { Col, Row } from "components/Layout";
import { Text } from "components/Text";
import { ClubContext } from "pages/club/[club_slug]";
import { FiShare2 } from "react-icons/fi";
// import styled component
import { HeadWrapper } from "./head.style";
// import assets
import Mark from "assets/images/home/team2.png";
import { RWebShare } from "react-web-share";
import { baseUrl } from "utils/constData";
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
        <Col item={12}>
          <Row alignItems="center" gap={20}>
            <Col>
              <Image src={logo} width={89} height={90} />
            </Col>
            <Col>
              <Text fColor="red.100" fSize={3} fWeight={800}>
                {title}
              </Text>
            </Col>
          </Row>
        </Col>
        <Col item={12} >
          <Row flexDirection="row-reverse" padding="0 20px 0 0">
            <RWebShare
              data={{
                text: "Share Profile",
                url: `${baseUrl + router.asPath}`,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Button bColor="primary" bSize="small" icon={<FiShare2 />}>
                {"Share"}
              </Button>
            </RWebShare>
          </Row>
        </Col>
      </Row>
    </HeadWrapper>
  );
};

export default HeadView;
