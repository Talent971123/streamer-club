import dynamic from "next/dynamic";
export const GallerySection = dynamic(() => import("./Gallery"));
export const GamesSection = dynamic(() => import("./Games"));
export const ClipSection = dynamic(() => import("./Clip"));
export const ClubSection = dynamic(() => import("./Club"));
export const IntroSection = dynamic(() => import("./Intro"));
export const AllSection = dynamic(() => import("./All"));
