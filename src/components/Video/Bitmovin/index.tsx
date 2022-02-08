import React, { useEffect, useRef } from "react";
import { Player } from "bitmovin-player";
import { UIFactory } from "bitmovin-player-ui";

interface videoProps {
  playback_id?: string;
}

const VideoPlayer: React.FC<videoProps> = ({ playback_id }) => {
  const videoRef = useRef<any>(null);

  const playerConfig = {
    key: process.env.NEXT_PUBLIC_BITMOVIN_ENV || "",
    playback: {
      autoplay: true,
    },
  };

  const playerSource = {
    hls: `https://stream.mux.com/${playback_id}.m3u8`,
    poster: `https://image.mux.com/${playback_id}/thumbnail.png`,
    thumbnailTrack: {
      url: `https://image.mux.com/${playback_id}/storyboard.vtt`,
    },
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
        videoRef.current = null;
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
