export interface GameCardProps {
  id: number;
  backgroundImage: StaticImageData | string;
  clubImage1: StaticImageData;
  clubName1: string;
  clubImage2: StaticImageData;
  clubName2: string;
  divisionImage: StaticImageData;
  divisionName: string;
  progress?: string;
  users?: number;
  mode?: "Day" | "Replay";
  handleClick?: any;
}
