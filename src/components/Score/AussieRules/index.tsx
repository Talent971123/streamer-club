import { siteSettings } from "hooks";
import { StreamPageContext } from "hooks/context/StreamPageContext";
import React, { useContext } from "react";
import { ScoreTimeWrapper, ScoreWrapper } from "./index.style";
import ScoreBoard from "./Scoreboard";
import ScoreTime from "./Scoretime";
// graphql

const AussieRules = () => {
  const { scores }: any = useContext(StreamPageContext);

  console.log(scores);

  // const score = scores[0];

  return (
    <>
      {siteSettings("game_day_page.overlay_score") && (
        <ScoreWrapper>
          <ScoreBoard
          // a_score_1={score.a_score_1} a_score_2={1}
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
