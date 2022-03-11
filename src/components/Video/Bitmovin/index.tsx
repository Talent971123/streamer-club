import React, { useEffect, useRef, useState } from "react";
// import { Player } from "bitmovin-player";
import { UIFactory } from "bitmovin-player-ui";

import { connect } from "react-redux";
import { setLiveShow } from "redux/actions/watch";

import { DisplayWrpper, DisplayContainer } from "./bitmovin.styles";
import CustomeLoading from "components/Loading/CustomLoading";

import Script from "next/script";

declare global {
  interface Window {
    bitmovin: any;
    initBitmovinMux: any;
  }
}

const VideoPlayer = (props: any) => {
  const { playback_id, setLiveShow, children } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const videoRef = useRef<any>(null);
  // const timelabel = useRef<any>(null);

  const playerConfig = {
    key: process.env.NEXT_PUBLIC_BITMOVIN_ENV || "",
    playback: {
      autoplay: true,
    },
    cast: {
      enable: true,
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
    setLiveShow(false);
    if (playerSource.poster) {
      const img = document.createElement("div");
      img.className = "poster";
      videoRef.current.appendChild(img);
    }
  };

  useEffect(() => {
    const checkBitmovinExist = () => {
      if (!window.bitmovin) {
        return setTimeout(() => {
          checkBitmovinExist();
        }, 500);
      }
      setupPlayer();
    };
    checkBitmovinExist();

  }, [loading]);

  const setupPlayer = () => {
    // Record the player init time
    const playerInitTime = Date.now();

    const player = new window.bitmovin.player.Player(
      videoRef.current,
      playerConfig
    );

    if (!loading) {

      UIFactory.buildDefaultUI(player);
      player.load(playerSource).then(
        () => {
          setLiveShow(true);
          setLoading(true);
        },
        () => {
          setLiveShow(false);
          setLoading(true);
        }
      );

      // console.log('bitmovinMux',bitmovinMux)
      window.initBitmovinMux(player, {
        debug: false,
        data: {
          env_key: playerConfig.key, // required
          // Metadata
          player_name: "My Main Player", // ex: 'My Main Player'
          player_init_time: playerInitTime, // ex: 1451606400000
          // ... and other metadata
        },
      });
    }
  };

  return (
    <DisplayContainer>
      <div id="player">
        <Script
          src="https://bitmovin-a.akamaihd.net/bitmovin-player/stable/8/bitmovinplayer.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://src.litix.io/bitmovin/5/bitmovin-mux.js"
          strategy="afterInteractive"
        />

        <DisplayWrpper id="player-container" ref={videoRef} loading={!loading}>
          {children}
        </DisplayWrpper>
        <DisplayWrpper loading={loading}>
          <CustomeLoading />
        </DisplayWrpper>
      </div>
    </DisplayContainer>
  );
};

const mapStateToProps = (state: any) => ({
  isLive: state.watch.live,
});

const mapDispatchToProps = {
  setLiveShow: setLiveShow,
};
export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
