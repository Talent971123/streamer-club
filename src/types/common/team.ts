import { Players } from "./player";

export interface Teams {
  id: number;
  image: string;
  name: string;
  slug: string;
  division: string;
  players: Array<Players>;
}
