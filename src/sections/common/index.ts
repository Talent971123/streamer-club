import dynamic from "next/dynamic";

export const HeadView = dynamic(() => import("./Head"));
export const PlayerView = dynamic(() => import("./Player"));
export const BannerView = dynamic(() => import("./Banner"));
export const ReplayView = dynamic(() => import("./Replay"));