import { Players } from "./player";
import { Teams } from "./team";

export interface ClubCtx {
  id: number;
  name: string;
  banner_image: string;
  logo: string;
  slug: string;
  teams: Array<Teams>;
  players: Array<Players>;
}

export interface StreamPageCtx {
  playback_id: string
  home_name: string,
  home_logo: string,
  away_name: string,
  away_logo: string
}