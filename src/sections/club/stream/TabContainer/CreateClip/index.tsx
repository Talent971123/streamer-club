import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "components/Layout";
import { themeGet } from "@styled-system/theme-get";
import { Border, CommentaryWrapper, ContentWrapper } from "./commentary.style";
import { Button } from "components/Button";
import { ScreenContext } from "hooks/context/ScreenContext";
import CloseIcon from "assets/icon/close";
import TimeRangeSlider from 'react-time-range-slider';
import 'react-time-range-slider/dist/styles.css';
import axios from "axios";
import { muxVideoAssetUrl, muxAssetBaseUrl, muxAuthToken } from "utils/constData";
import { useRouter } from "next/router";

const defaultTime = {
  start: "00:00",
  end: "23:59"
};
const defaultBoundaryTime = {
  min: "00:00",
  max: "23:59"
};

const CreateClipView: React.FC = () => {
  const router = useRouter();
  const { createClip, setCreateClipShow } = useContext(ScreenContext);
 
  const closeEventButton = () => {
    setCreateClipShow(false);
  };

  const getTotalSeconds = (time: string) => {
    var actualTime = time.split(':');
    
    var totalSeconds = 0;
    if(actualTime.length == 3){
      totalSeconds = (+actualTime[0]) * 60 * 60 + (+actualTime[1]) * 60 + (+actualTime[2]);
    } else if(actualTime.length == 2){
      totalSeconds = (+actualTime[0]) * 60 + (+actualTime[1]);
    } else if(actualTime.length == 1){
      totalSeconds = (+actualTime[0]);
    }
    return totalSeconds;
  }

  const saveClip = () => {
    const { asset_id } = router.query;
    /** request mux data */
    axios
    .post(muxVideoAssetUrl, {
      playback_policy: "public",
      input: [
        {
          "url": muxAssetBaseUrl + '/' + asset_id,
          "start_time": getTotalSeconds(timeValue.start),
          "end_time": getTotalSeconds(timeValue.end)
        }
      ],
    }, {auth: muxAuthToken})
    .then((res) => {
      // save clip
      console.log('successfully created clip',res)
      // add logic here to save the clip to user's profile -> clip table
    }).catch((err) => {
      console.error("MUX request error:", err);
    });
  }
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      var video = document.getElementById("bitmovinplayer-video-player-container") as HTMLVideoElement | null;
      
      var onDurationChange = function(){
          if(video?.readyState){
            //to your thing
            if (video.duration > 0) {
              var minutes = Math.trunc(video.duration / 60);
              var seconds = Math.trunc(video.duration % 60);  
              
              setTimeValue({
                start: "00:00",
                end: minutes+':'+seconds
              })
              setBoundaryTime({
                min: "00:00",
                max: minutes+':'+seconds
              })
            }
          }
        };
        video?.addEventListener('durationchange', onDurationChange);
      	onDurationChange();
     }
  },[createClip])

  const [timeValue, setTimeValue] = useState<any>(defaultTime);
  const [boundaryTime, setBoundaryTime] = useState<any>(defaultBoundaryTime);

  const changeStartHandler = (time) => {
      console.log("Start Handler Called", time);
  }

  const timeChangeHandler = (time) => {
      setTimeValue(time);
  }

  const changeCompleteHandler = (time) => {
      console.log("Complete Handler Called", time);
  }


  return (
    <CommentaryWrapper>
      <ContentWrapper>
        <Row
          flexDirection="column"
          justifyContent="center"
          gap={16}
          display="flex"
        >
          {createClip && (
            <Row
              flexDirection="column"
              alignItems="center"
              justifyContent="space-around"
              css={`
                background-color: ${themeGet("colors.gray.900")};
                padding-right: 10px;
              `}
              gap={20}
            >
                 <div style={{ width: "300px", margin: "20px" }}>
                  <div className="time-range">
                    <b>Start Time:</b> {timeValue.start} <b>End Time:</b>{" "}
                    {timeValue.end}
                  </div>
                  <div className="time-range-slider">
                    <TimeRangeSlider
                      disabled={false}
                      format={24}
                      maxValue={boundaryTime.max}
                      minValue={boundaryTime.min}
                      name={"time_range"}
                      onChangeStart={changeStartHandler}
                      onChangeComplete={changeCompleteHandler}
                      onChange={timeChangeHandler}
                      step={1}
                      value={timeValue}/>
                    </div>
                 </div>
              <Button
                fColor="gray.100"
                css={`
                  height: 50px;
                  width: 100px;
                  background-color: #4a4949;
                  border: 0px;
                `}
                onClick={saveClip}
              >Save Clip</Button>
              <Button
                bColor="primary"
                css={{ border: "none" }}
                icon={<CloseIcon />}
                onClick={closeEventButton}
              />
            </Row>
          )}
        </Row>
      </ContentWrapper>
    </CommentaryWrapper>
  );
};

export default CreateClipView;
