import { s3Config } from "./constData";
import videoBg from "assets/images/home/default-bg.png";
import { getDates } from "utils/helper-date";
import moment from "moment";

export const thumbNailLink = (
  id: string,
  width: number = 300
): string | StaticImageData => {
  const image_url = `https://image.mux.com/${id}/thumbnail.png?width=${width}`;

  // try {
  //     const http = new XMLHttpRequest();
  //     http.open('HEAD', image_url, false);
  //     http.send();
  // } catch (error) {
  //     return videoBg
  // }

  return image_url;
};

export const getS3Config = (dirName: string = "Club") => ({
  ...s3Config,
  dirName,
});

export const progressText = (date: string, status: string) => {
  if (
    moment().isBefore(moment(date)) &&
    ["created", "ready"].includes(status)
  ) {
    return getDates(date).datefull;
  }

  if (moment().isAfter(moment(date)) && ["active"].includes(status)) {
    return "In Progress";
  }

  if (moment(date).isAfter(moment()) && ["completed"].includes(status)) {
    return `(${getDates(date).datefull})`;
  }

  return "";
};
