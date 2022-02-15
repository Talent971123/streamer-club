export const dateDisplayFormat = "DD MMMM YYYY";

export const s3Config = {
  dirName: "Club" /** Default please override */,
  bucketName: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
  region: process.env.NEXT_PUBLIC_S3_REGION,
  accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_KEY,
};

export const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;
export const baseUrl =
  typeof window !== "undefined"
    ? `${window.location.protocol}//${window.location.host}`
    : "";

export const muxVideoApiBaseUrl = process.env.NEXT_PUBLIC_MUX_VIDEO_API_BASE_URL || '';
export const muxPostAuthToken = {
  username: process.env.NEXT_PUBLIC_MUX_TOKEN_ID || '',
  password: process.env.NEXT_PUBLIC_MUX_TOKEN_SECRET || '',
};
export const muxGetAuthToken = Buffer.from(`${process.env.NEXT_PUBLIC_MUX_TOKEN_ID}:${process.env.NEXT_PUBLIC_MUX_TOKEN_SECRET}`, 'utf8').toString('base64')

export const muxAssetBaseUrl = process.env.NEXT_PUBLIC_MUX_ASSET_BASE_URL;
