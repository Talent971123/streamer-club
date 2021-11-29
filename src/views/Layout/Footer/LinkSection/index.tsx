import React from "react";
// component
import { Row, Col } from "components/Layout";
import { Hidden } from "components/Hidden";
import { AccordionHeader } from "components/Collapse";
// styled-component
import {
  LinkSectionWrapper,
  CategoryItemHeader,
  CategoryItem,
} from "./LinkSection.style";
// HOC
import { useLinkItem } from "components/hoc";
import { useCollapse } from "components/hoc";

// static data
import { footerLinkData } from "utils/constData";

// Genereted Component  by HOC
const LinkItem = useLinkItem(CategoryItem);
const AccordionItem = useCollapse(AccordionHeader);

// ------------------------------------------------------------------

const LinkSection = () => {
  const getLinkItems = (items) => (
    <Row flexDirection="column" padding="10px 0">
      {items.map((item, index) => (
        <LinkItem title={item.title} key={`items_${index}`} />
      ))}
    </Row>
  );

  return (
    <LinkSectionWrapper>
      <Hidden wHide={[1024]}>
        <Row responsive={{ 1024: { flexDirection: "column" } }}>
          <Col item={4}>
            <Row flexDirection="column">
              <Col>
                <CategoryItemHeader>SITE</CategoryItemHeader>
              </Col>
              <Col>
                {footerLinkData.site.map((item, index) => (
                  <LinkItem title={item.title} key={`footersite_${index}`} />
                ))}
              </Col>
            </Row>
          </Col>
          <Col item={4}>
            <Row flexDirection="column">
              <Col>
                <CategoryItemHeader>Shop by Result</CategoryItemHeader>
              </Col>
              <Col>
                {footerLinkData.shop.map((item, index) => (
                  <LinkItem title={item.title} key={`footershop_${index}`} />
                ))}
              </Col>
            </Row>
          </Col>
          <Col item={8}>
            <Row flexDirection="column">
              <Col>
                <CategoryItemHeader>Categories</CategoryItemHeader>
              </Col>
              <Col>
                <Row>
                  <Col item={12}>
                    {footerLinkData.category.first.map((item, index) => (
                      <LinkItem
                        title={item.title}
                        key={`footercategoryfirst_${index}`}
                      />
                    ))}
                  </Col>
                  <Col item={12}>
                    {footerLinkData.category.second.map((item, index) => (
                      <LinkItem
                        title={item.title}
                        key={`footercategorysecond_${index}`}
                      />
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col item={4}>
            <Row flexDirection="column">
              <Col>
                <CategoryItemHeader>Shop by Goal</CategoryItemHeader>
              </Col>
              <Col>
                {footerLinkData.shopgoal.map((item, index) => (
                  <LinkItem title={item.title} key={`footergoal_${index}`} />
                ))}
              </Col>
            </Row>
          </Col>
          <Col item={4}>
            <Row flexDirection="column">
              <Col>
                <CategoryItemHeader>Stack</CategoryItemHeader>
              </Col>
              <Col>
                {footerLinkData.stack.map((item, index) => (
                  <LinkItem title={item.title} key={`footerstack_${index}`} />
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Hidden>
      <Hidden wShow={[1024]}>
        <AccordionItem title="Site">
          {getLinkItems(footerLinkData.site)}
        </AccordionItem>
        <AccordionItem title="Shop by result">
          {getLinkItems(footerLinkData.shop)}
        </AccordionItem>
        <AccordionItem title="Categories">
          {getLinkItems(
            footerLinkData.category.first.concat(footerLinkData.category.second)
          )}
        </AccordionItem>
        <AccordionItem title="Shop by goal">
          {getLinkItems(footerLinkData.shopgoal)}
        </AccordionItem>
        <AccordionItem title="Stack">
          {getLinkItems(footerLinkData.stack)}
        </AccordionItem>
      </Hidden>
    </LinkSectionWrapper>
  );
};
export default LinkSection;
