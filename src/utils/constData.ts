export const footerLinkData = {
  site: [
    { title: "Gift Cards", url: "#" },
    { title: "Best Sellers", url: "#" },
    { title: "Best Price Guarantee", url: "#" },
    { title: "Current Specials", url: "#" },
    { title: "Supplement Awards 2021", url: "#" },
    { title: "Max's & Maxine's Challenge", url: "#" },
    { title: "Become a NW Ambassador", url: "#" },
    { title: "Personal Trainer", url: "#" },
    { title: "Wholesale Enquires", url: "#" },
    { title: "Defence Force V.I.P", url: "#" },
    { title: "Click & Collect", url: "#" },
    { title: "Careers", url: "#" },
  ],
  brand: [
    { title: "Lose Weight", url: "#" },
    { title: "Gain Muscle", url: "#" },
    { title: "Increase Energy", url: "#" },
    { title: "Build Endurance", url: "#" },
    { title: "Womens Health", url: "#" },
    { title: "Health & Wellbeing", url: "#" },
  ],
  shop: [
    { title: "Lose Weight", url: "#" },
    { title: "Gain Muscle", url: "#" },
    { title: "Increase Energy", url: "#" },
    { title: "Build Endurance", url: "#" },
    { title: "Womens Health", url: "#" },
    { title: "Health & Wellbeing", url: "#" },
  ],
  category: {
    first: [
      { title: "Amino Acids", url: "#" },
      { title: "Carbohydrates", url: "#" },
      { title: "Creatine", url: "#" },
      { title: "Endurance", url: "#" },
      { title: "General Health", url: "#" },
      { title: "Hormonal Support", url: "#" },
      { title: "Healthy Snacks & Foods", url: "#" },
      { title: "Nox Boosters", url: "#" },
      { title: "Pre-Workout", url: "#" },
    ],
    second: [
      { title: "Protein Powder", url: "#" },
      { title: "Protein Bars & Cookies", url: "#" },
      { title: "Test Boosters", url: "#" },
      { title: "Vitamins & Minerals", url: "#" },
      { title: "Weight Loss", url: "#" },
      { title: "Accessories", url: "#" },
      { title: "Apparel", url: "#" },
      { title: "Specialty Packs", url: "#" },
    ],
  },
  shopgoal: [
    { title: "Optimum Nutrition", url: "#" },
    { title: "EHP Labs", url: "#" },
    { title: "BSN Supplements", url: "#" },
    { title: "ATP Science", url: "#" },
    { title: "Max’s", url: "#" },
    { title: "Cellular", url: "#" },
    { title: "b Raw", url: "#" },
    { title: "Anabolix", url: "#" },
    { title: "Genetix", url: "#" },
    { title: "Body Science", url: "#" },
  ],
  stack: [
    { title: "Optimum Nutrition", url: "#" },
    { title: "EHP Labs", url: "#" },
    { title: "BSN Supplements", url: "#" },
    { title: "ATP Science", url: "#" },
    { title: "Max’s", url: "#" },
    { title: "Cellular", url: "#" },
    { title: "b Raw", url: "#" },
    { title: "Anabolix", url: "#" },
    { title: "Genetix", url: "#" },
    { title: "Body Science", url: "#" },
  ],
};

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
