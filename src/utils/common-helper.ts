import { s3Config } from "./constData";
export const thumbNailLink = (id: string, width: number = 300): string => `https://image.mux.com/${id}/thumbnail.png?width=${width}`;

export const getS3Config = (dirName: string = 'Club') => ({ ...s3Config, dirName })