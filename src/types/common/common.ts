import { ReactNode } from "react";

export interface commonItem {
  title: string;
  path: string;
  component?: ReactNode;
}

export interface ParamTypes {
  club_slug?: string;
  team_slug?: string;
  id?: string | number;
}
