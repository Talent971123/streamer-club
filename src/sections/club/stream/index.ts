import dynamic from "next/dynamic";
export const DisplayView = dynamic(() => import("./Display"));
export const ToolbarView = dynamic(() => import("./ToolBar"));
