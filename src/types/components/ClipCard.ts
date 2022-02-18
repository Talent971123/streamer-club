export interface ClipProps {
  id: number;
  mode?: "clip" | "teams" | "player" | "photos" | "videos" | "club";
  backgroundImage: StaticImageData;
  title?: string;
  content?: string;
  handleClick?: any;
}
