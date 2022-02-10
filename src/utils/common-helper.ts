import { s3Config } from "./constData";
import defaultImg from "assets/images/home/WAFL.png";
import { getDates } from "utils/helper-date";
import moment from "moment";
import imageExists from 'image-exists';
import slugify from 'slugify';

/**
 * 
 * @param src : image url ;
 * @param fallbackImg: fallback image 
 * @returns string | StaticImageData
 */
export const remoteImageSrc = (
  src: string | StaticImageData = defaultImg,
  fallbackImg: string | StaticImageData = defaultImg
): string | StaticImageData => (imageExists(src, e => e) ? src : fallbackImg)

export const thumbNailLink = (
  id: string,
  width: number = 300,
): string | StaticImageData => {
  let image_url = `https://image.mux.com/${id}/thumbnail.png?width=${width}`;
  return imageExists(image_url, e => e) ? image_url : defaultImg
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
  }
  return slugify(str, config);
}
