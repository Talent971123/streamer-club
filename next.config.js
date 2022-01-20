/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  images: {
    domains: [
      'via.placeholder.com',
      's3.us-east-2.amazonaws.com',
      'streamer-image-assets.s3.us-east-2.amazonaws.com',
      'streamer-image-assets.s3-us-east-2.amazonaws.com',
      'image.mux.com',
      'lh3.googleusercontent.com'
    ],
  },
};
