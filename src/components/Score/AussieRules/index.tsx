import { siteSettings } from "hooks";
import { StreamPageContext } from "hooks/context/StreamPageContext";
import React, { useContext, useEffect, useState } from "react";
import { initializeApollo } from "api/apollo";
import { query } from "graphql/stream";
import { ScoreTimeWrapper, ScoreWrapper } from "./index.style";
import ScoreBoard from "./Scoreboard";
import ScoreTime from "./Scoretime";
// graphql
let scores = [{
  video_time: 0,
  a_score_1: 0,
  a_score_2: 0,
  a_score_final: 0,
  h_score_1: 0,
  h_score_2: 0,
  h_score_final: 0,
}];

const AussieRules = () => {
  const { newObject, asset_id }: any = useContext(StreamPageContext);
  const apolloClient = initializeApollo();

  const [showScoreObj, setShowScores] = useState({
    a_score_1: 0,
    a_score_2: 0,
    a_score_final: 0,
    h_score_1: 0,
    h_score_2: 0,
    h_score_final: 0,
  });

  const getCurrentTime = (): number => {
    const video = document.getElementById("bitmovinplayer-video-player-container") as HTMLVideoElement | null;
    return video?.currentTime ?? 0
  }

  const updateScore = (data:any = null) => {
    const currentTime = getCurrentTime();
    if (data) {
      scores = [...scores, data]
    }
    const score = scores.filter((data) => data.video_time < currentTime);
    const buffer = {
      a_score_1: 0,
      a_score_2: 0,
      a_score_final: 0,
      h_score_1: 0,
      h_score_2: 0,
      h_score_final: 0,
    };
    if (score) {
      score.map((data) => {
        buffer.a_score_1 += data.a_score_1;
        buffer.a_score_2 += data.a_score_2;
        buffer.a_score_final += data.a_score_final;
        buffer.h_score_1 += data.h_score_1;
        buffer.h_score_2 += data.h_score_2;
        buffer.h_score_final += data.h_score_final;
      })
      setShowScores(buffer);
    }
  }

  const getFirst = async () => {
    const {data: {score}} = await apolloClient.query({
      query: query.GET_SCORE,
      variables: {
        where: {
          match_id: { _eq: asset_id }
        }
      }
    });
    scores = [...score]
    updateScore();
  }

  useEffect(() => {
    updateScore(newObject);
  }, [newObject])

  useEffect(() => {
    getFirst();
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateScore();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {siteSettings("game_day_page.overlay_score") && (
        <ScoreWrapper>
          <ScoreBoard
            a_score_1={showScoreObj.a_score_1} 
            a_score_2={showScoreObj.a_score_2}
            a_score_final={showScoreObj.a_score_final}
            h_score_1={showScoreObj.h_score_1} 
            h_score_2={showScoreObj.h_score_2}
            h_score_final={showScoreObj.h_score_final}
          />
        </ScoreWrapper>
      )}{" "}
      {siteSettings("game_day_page.overlay_score_time") && (
        <ScoreTimeWrapper>
          <ScoreTime
          // event={score?.game_time_q_prefix + score?.game_time_q_number}
          // time={ConvertNumberToTime(score?.game_time_value)}
          />
        </ScoreTimeWrapper>
      )}
    </>
  );
};

export default AussieRules;
