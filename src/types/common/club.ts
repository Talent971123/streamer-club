import { Players } from "./player";
import { Teams } from "./team";

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
  home_display_name: string;
  home_logo: string;
  away_id: number;
  away_name: string;
  away_display_name: string;
  away_logo: string;
  start_datetime: string;
  home_players: Array<Players>;
  away_players: Array<Players>;
  video_asset_id: string;
  match_id: number;
  round_name: string;
  asset_id: number;
  setObject: any;
  newObject: any;
  away_slug: string;
  home_slug: string;
}

export interface LeagueCtx {
  id?: number;
  name?: string;
  logo?: string;
}

// export interface LeaguesCtx {
//   players: Array<LeagueCtx>;
// }
