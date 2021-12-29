import dynamic from "next/dynamic";
export const BannerSection = dynamic(() => import("./Banner"));
export const TrendSection = dynamic(() => import("./Trend"));
export const FollowSection = dynamic(() => import("./Follow"));
export const JuniorSection = dynamic(() => import("./Juniors"));
export const AllSection = dynamic(() => import("./All"));
