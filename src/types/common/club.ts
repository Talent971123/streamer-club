import { Players } from "./player";
import { Teams } from "./team";
import { Score } from "./score";

export interface ClubCtx {
  id: number;
  name: string;
  banner_image: string;
  logo: string;
  slug: string;
  address_1: string;
  address_2: string;
  city: string;
  postcode: number;
  state: string;
  teams: Array<Teams>;
  players: Array<Players>;
}

export interface StreamPageCtx {
  playback_id: string;
  home_id: number;
  home_name: string;
  home_logo: string;
  away_id: number;
  away_name: string;
  away_logo: string;
  start_datetime: string;
  home_players: Array<Players>;
  away_players: Array<Players>;
  video_asset_id: string;
  match_id: number;
  scores: Array<Score>;
}

export interface LeagueCtx {
  id?: number;
  name?: string;
  logo?: string;
}

// export interface LeaguesCtx {
//   players: Array<LeagueCtx>;
// }
