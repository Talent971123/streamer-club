import React from "react";

import { Col, Row } from "components/Layout";
import { NewsCard } from "components/Card";
import { Text } from "components/Text";
import { useLinkItem } from "components/hoc";
import { IoArrowRedoOutline } from "react-icons/io5";
//  import styled
import { NewsWrapper, LinkWrapper } from "./news.style";
//  import types
import { NewsProps } from "types/components/NewsProps";
//  define the example data
import news1 from "assets/images/home/news1.png";
import news2 from "assets/images/home/news2.png";
import news3 from "assets/images/home/news3.png";
import news4 from "assets/images/home/news4.png";
import { useRouter } from "hooks";
import { SeeAllWrapper } from "../GameDay/gameday.style";
import { IoIosArrowForward } from "react-icons/io";

const data: NewsProps[] = [
  {
    backgroundImage: news1,
    title: "Colts Finals Week 1",
    content:
      "The Perth FC Colts have put themselves into the 2021 Oputs WAFL Semi Final with a four point win over Peel FC.",
    timeline: "2m ago",
  },
  {
    backgroundImage: news2,
    title: "Colts Finals Week 1",
    content:
      "The Perth FC Colts have put themselves into the 2021 Oputs WAFL Semi Final with a four point win over Peel FC.",
    timeline: "2m ago",
  },
  {
    backgroundImage: news3,
    title: "Colts Finals Week 1",
    content:
      "The Perth FC Colts have put themselves into the 2021 Oputs WAFL Semi Final with a four point win over Peel FC.",
    timeline: "2m ago",
  },
  {
    backgroundImage: news4,
    title: "Colts Finals Week 1",
    content:
      "The Perth FC Colts have put themselves into the 2021 Oputs WAFL Semi Final with a four point win over Peel FC.",
    timeline: "2m ago",
  },
];

const SeeAll = useLinkItem(LinkWrapper);

const NewsSection: React.FC = () => {
  const { move } = useRouter();
  const onHandleSeeAll = () => {
    move("/club/News");
  };
  return (
    <NewsWrapper>
      <Row alignItems="center">
        <Col item={24}>
          <Row>
            <Text fColor="white" fSize={1.5} fWeight={700} mode="p">
              {"Club News"}
            </Text>
          </Row>
        </Col>
        <Col item={24}>
          <SeeAllWrapper flexDirection="row-reverse">
            <SeeAll
              handleClick={onHandleSeeAll}
              title="See all"
              icon={<IoIosArrowForward />}
              iconDirection="row-reverse"
              alignVertical="center"
            />
          </SeeAllWrapper>
        </Col>
      </Row>
      <Row
        display="grid"
        gap={"15px 40px"}
        templateCol="1fr 1fr"
        padding="10px 0 0 0"
      >
        {data.map((item: NewsProps, index: number) => {
          return <NewsCard {...item} key={index} />;
        })}
      </Row>
    </NewsWrapper>
  );
};

export default NewsSection;
