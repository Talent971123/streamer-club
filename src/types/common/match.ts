import { Teams } from "./team";

export interface Players {
  id: number;
  first_name: string;
  last_name: string;
  image: string;
  slug: string;
  is_professional: boolean;
  team: Teams;
}

export interface PlayerFormValues {
  image?: string | null;
  first_name: string;
  last_name: string;
  mobile: string;
  email: string;
  positions: string;
  slug?: string | null;
  club_id: number;
  team_id: number;
}
