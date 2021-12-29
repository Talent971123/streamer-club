import dynamic from "next/dynamic";

export const HeadView = dynamic(() => import("./Head"));
export const GameDayView = dynamic(() => import("./GameDay"));
export const ReplyView = dynamic(() => import("./Reply"));
export const ClipView = dynamic(() => import("./Clip"));
export const TeamsView = dynamic(() => import("./Teams"));
export const PlayerView = dynamic(() => import("./Player"));
export const BannerView = dynamic(() => import("./Banner"));
export const NewsView = dynamic(() => import("./News"));
export const SupportView = dynamic(() => import("./Support"));
