import React, { ReactNode } from "react";

// HOC
import { useLinkItem } from "components/hoc";
// styled commponent
import { PartnerItem, BrandItemWrapper } from "./BrandItem.style";

export interface BrandProps {
  icon: ReactNode;
}

// ----------------------------------------------------
const LinkItem = useLinkItem(PartnerItem, "icon");

const BrandItem = ({ icon }) => {
  return (
    <BrandItemWrapper>
      <LinkItem icon={icon}></LinkItem>
    </BrandItemWrapper>
  );
};

export default BrandItem;
