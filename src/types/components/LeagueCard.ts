export interface LeaguesProps {
  id: number;
  backgroundImage: StaticImageData;
  mode?: "clip" | "teams" | "player" | "photos" | "videos" | "club" | "league";
  title?: string;
  content?: string;
  handleClick?: any;
  isLeagueSelected?: boolean;
  slug: string;
}
