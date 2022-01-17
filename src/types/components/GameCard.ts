export interface GameCardProps {
  id: number;
  backgroundImage: StaticImageData | string;
  clubImage1: StaticImageData;
  clubName1: string;
  clubImage2: StaticImageData;
  clubName2: string;
  leagueImage: StaticImageData; /** TODO: replace division to league */
  leagueDivisionName: string;
  leagueName?: string;
  match_round?: number;
  date?: string;
  progress?: string;
  users?: number; /** remove */
  mode?: "Day" | "Replay" | "Live";
  roundName?: string
  matchName?: string
  handleClick?: any;
  isLive?: boolean
}
