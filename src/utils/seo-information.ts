// types
import { SeoProps } from "types/components/Seo";

// -------------------------------------------

const informations = {
  home: {
    title: "streamer home",
    description: "streamer home",
  },
  admin: {
    title: "streamer admin",
    description: "streamer admin",
  },
};

export const getInformation = (page: string): SeoProps => {
  if (informations[page]) {
    return informations[page];
  } else {
    return {
      title: "",
      description: "",
      canonical: "",
      keywords: "",
      css: "",
      js: "",
      image: "",
    };
  }
};
