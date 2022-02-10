import * as t from "redux/types/match";

export const setMatchInfo = (match: any) => ({
  type: t.SET_MATCH_INFO,
  payload: match,
});

export const setLiveMatches = (live_list: any) => ({
  type: t.SET_LIVE_MATCHES,
  payload: live_list,
});

export const setReplayMatches = (replay_list: any) => ({
  type: t.SET_REPLAY_MATCHES,
  payload: replay_list,
});
