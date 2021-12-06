export interface ClipProps {
  id: number;
  mode?: "clip" | "teams" | "player" | "photos" | "videos";
  backgroundImage: StaticImageData;
  title?: string;
  content?: string;
  handleClick?: any;
}
