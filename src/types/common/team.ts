import { Players } from "./player";

export interface Teams {
  id: number;
  image: string;
  name: string;
  slug: string;
  division: string;
  players: Array<Players>;
}

export interface TeamFormValues {
  name: string,
  club_id?: number | null
  slug?: string | null
  division?: string | null
  league_id?: number | null,
  image?: string | null
}