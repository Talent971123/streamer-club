import dynamic from "next/dynamic";

export const HeadView = dynamic(() => import("./head"));
export const ContentView = dynamic(() => import("./content"));
