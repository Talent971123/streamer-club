import { useMutation } from "@apollo/client";
import { themeGet } from "@styled-system/theme-get";
import { Button } from "components/Button";
import { Row } from "components/Layout";
import { admin } from "graphql/stream";
import { ScreenContext } from "hooks/context/ScreenContext";
import { StreamPageContext } from "hooks/context/StreamPageContext";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  CommentaryWrapper,
  ContentWrapper
} from "./commentary.style";

const SetThumbnailView = () => {
  const { thumbFlag, setFlagThumb } = useContext(ScreenContext);
  const { playback_id, match_id } = useContext(StreamPageContext);

  const [thumbnail, setThumbnail] = useState<string>();
  const [brokenUrl, setBrokenUrl] = useState<boolean>(false);
  // Called thumbnail Image mutation

  const [saveThumbnailImage] = useMutation(admin.UPDATE_THUMBNAIL_IMAGE_URL, {
    onCompleted() {
      toast.success("Thumbnail uploads successfully");
    },
    onError() {
      toast.error("Error happened");
    },
  });

  // Thumbnail saving handler
  const saveThumbnail = () => {
    if (brokenUrl) {
      return toast.error("Sorry! your link is broken");
    } else if (!thumbnail) {
      return toast.error("Sorry! thumbnail url is empty");
    }
    saveThumbnailImage({ variables: { thumbnail_url: thumbnail, id: match_id } });
  };
  const closeEventHandler = () => {
    setFlagThumb(false);
  }

  const setThumbImage = (time) => {
    setThumbnail(`https://image.mux.com/${playback_id}/thumbnail.jpg?time=${time}&width=300`);
  }

  useEffect(() => {


    if (typeof window !== 'undefined') {
      const video = document.getElementById("bitmovinplayer-video-player-container") as HTMLVideoElement | null;
      setThumbImage(video?.currentTime)
      video?.addEventListener("pause", () => setThumbImage(video?.currentTime))
      video?.addEventListener("seeked", () => setThumbImage(video?.currentTime))
    }

    return () => {
      /** TODO: investigate why events are not removed
        console.log('clean up')
        video?.removeEventListener("pause", () => setThumbImage(video?.currentTime))
        video?.removeEventListener("seeked", () => setThumbImage(video?.currentTime))
       */
    }

    console.log('thumb', thumbnail)
    console.log(thumbFlag)

  }, [thumbFlag])

  return (
    <CommentaryWrapper>
      <ContentWrapper>
        <Row
          flexDirection="column"
          justifyContent="center"
          gap={16}
          display="flex"
        >
          {thumbFlag && thumbnail && (
            <Row
              flexDirection="column"
              alignItems="center"
              justifyContent="space-around"
              css={`
              background-color: ${themeGet("colors.gray.900")};
              padding: 20px;
            `}
              gap={20}
            >
              <figure
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "2px solid #ccc",
                  color: "#989ea3",
                  padding: "15px",
                  backgroundColor: "#121212",
                  borderRadius: "5px",
                  maxWidth: "500px"
                }}
              >
                {thumbnail && !brokenUrl ? (
                  <img
                    onError={() => setBrokenUrl(true)}
                    src={thumbnail}
                    alt="Thumbnail"
                  />
                ) : thumbnail && brokenUrl ? (
                  <p
                    style={{
                      width: "100%",
                      height: "100%",
                      fontSize: "1.2rem",
                      fontWeight: "500",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Image Loading Error
                  </p>
                ) : (
                  <p
                    style={{
                      width: "100%",
                      height: "100%",
                      fontSize: "1.2rem",
                      fontWeight: "500",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Thumbnail Loading Issue, Try Again
                  </p>
                )}
              </figure>
              {/* <InputImage  /> */}

              {thumbnail && !brokenUrl && (
                <p className="">
                  Do you want to set this image as the thumbnail? then click
                  "Save"
                </p>
              )}
              <Row
                flexDirection="row"
                alignItems="center"
                justifyContent="space-around"
                css={`
                background-color: ${themeGet("colors.gray.900")};
                padding: 5px 0;
              `}
                gap={20}
              >
                <Button
                  fColor="gray.100"
                  css={`
                  height: 50px;
                  width: 100px;
                  background-color: #4a4949;
                  border: 0px;
                `}
                  onClick={saveThumbnail}
                >
                  {"Save"}
                </Button>
                <Button
                  bColor="primary"
                  css={`
                  height: 50px;
                  width: 100px;
                  background-color: #4a4949;
                  border: 0px;
                `}
                  onClick={closeEventHandler}
                >Cancel</Button>
              </Row>
            </Row>
          )}
        </Row>

      </ContentWrapper>
    </CommentaryWrapper>
  );
};

export default SetThumbnailView;