import { s3Config } from "./constData";
import defaultImg from "assets/images/home/WAFL.png";
import { getDates } from "utils/helper-date";
import moment from "moment";
import imageExists from "image-exists";
import slugify from "slugify";

/**
 *
 * @param src : image url ;
 * @param fallbackImg: fallback image
 * @returns string | StaticImageData
 */
export const remoteImageSrc = (
  src: string | StaticImageData = defaultImg,
  fallbackImg: string | StaticImageData = defaultImg
): string | StaticImageData =>
  imageExists(src, (e: any) => e) ? src : fallbackImg;

export const thumbNailLink = (
  id: string,
  width: number = 300,
  thumbnail_url: string | null = null
): string | StaticImageData => {
  const image_url = `https://image.mux.com/${id}/thumbnail.png?width=${width}`;
  // NOTE: if this cant be fix leave image_url as return
  // return thumbnail_url && imageExists(thumbnail_url, (e: any)=> e)? thumbnail_url: imageExists(image_url, (e: any) => e) ? image_url : defaultImg;
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

export const slugifyString = (str: string): string => {
  const config = {
    lower: true,
    strict: true,
  };
  return slugify(str, config);
};

export const ConvertNumberToTime = (number: number) => {
  // const
  const MM = Math.floor(number / 60);
  const SS = number % 60;

  const Time = (MM < 10 ? "0" + MM : MM) + ":" + (SS < 10 ? "0" + SS : SS);
  return Time;
};
