export interface ClipProps {
  mode?: "clip" | "teams" | "player" | "photos" | "videos";
  backgroundImage: StaticImageData;
  title?: string;
  content?: string;
}
