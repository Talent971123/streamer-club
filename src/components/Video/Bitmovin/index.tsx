import React, { useEffect, useRef } from "react";
import { Player } from "bitmovin-player";
import { UIFactory } from "bitmovin-player-ui";
interface videoProps {
  playback_id?: string;
  isLive?: any;
}

const VideoPlayer: React.FC<videoProps> = ({ playback_id }) => {
  const videoRef = useRef<any>(null);

  const playerConfig = {
    key: process.env.NEXT_PUBLIC_BITMOVIN_ENV || "",
    playback: {
      autoplay: true,
    },
    events: {
      error: function (errObj: any) {
        switch (errObj.code) {
          case 1208:
          case 1209:
          case 1210:
          case 1400:
          case 1401:
            errorHandler();
            break;
          default:
            console.error("error", errObj);
            break;
        }
      },
    },
  };

  const playerSource = {
    hls: `https://stream.mux.com/${playback_id}.m3u8`,
    poster: `https://image.mux.com/${playback_id}/thumbnail.png`,
    thumbnailTrack: {
      url: `https://image.mux.com/${playback_id}/storyboard.vtt`,
    },
  };

  const errorHandler = () => {
    if (playerSource.poster) {
      const img = document.createElement("div");
      img.className = "poster";
      // img.src = "../../../assets/images/home/default-bg.png";
      videoRef.current.appendChild(img);
    }
  };

  useEffect(() => {
    setupPlayer();
  }, []);

  const setupPlayer = () => {
    const player = new Player(videoRef.current, playerConfig);

    UIFactory.buildDefaultUI(player);
    player.load(playerSource).then(
      () => {
        console.log("Successfully loaded source");
      },
      () => {
        console.log("Error while loading source");
      }
    );
  };

  return (
    <>
      <div id="player">
        <div id="player-container" ref={videoRef} />
      </div>
    </>
  );
};

export default VideoPlayer;
