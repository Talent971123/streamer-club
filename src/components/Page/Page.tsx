import React from "react";
import Head from "next/head";
// types
import { PageProps } from "types/components/Page";

// --------------------------------------------------

const Page: React.FC<PageProps> = ({
  title,
  description,
  canonical,
  image,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width,maximum-scale=5,initial-scale=1"
        />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={title} />
        <meta
          name="og:description"
          property="og:description"
          content={description}
        />
        <meta property="og:site_name" content="streamer" />
        <meta property="og:url" content={`${canonical || "streamer"}`} />
        {image ? <meta property="og:image" content={`${image}`} /> : ""}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content={`${canonical || "streamer"}`} />
        {image && <meta name="twitter:image" content={`${image}`} />}
      </Head>
      {children}
    </>
  );
};
export default Page;
