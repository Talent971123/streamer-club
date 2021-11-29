import { ComponentType } from "react";
import { BadgeContainerProps } from "./Badge";
// ---------------------------------------------------

export interface BlogCardProps {
  title: string;
  category: string;
  headerImage: StaticImageData | string;
  blogDate: string;
  description?: string;
  badgeColor?: string;
}

export interface ProductCardProps extends BadgeContainerProps {
  productImage?: StaticImageData | string;
  title?: string;
  desc?: string;
  price?: string;
  rate?: number;
  prePrice?: string;
  mode?: "product" | "viewAll";
  productWidth?: number;
  productHeight?: number;
}

export interface BannerStyledCardProps {
  bannerSrc?: StaticImageData | string;
}
export interface BannerCardProps extends BannerStyledCardProps {
  title: string;
  title2?: string;
  actionTitle: string;
  handleAction?: () => any;
  iconGroup?: Array<ComponentType>;
}
