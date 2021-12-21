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

}