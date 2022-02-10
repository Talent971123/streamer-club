import * as t from "redux/types/watch";

export const setLiveShow = (flag: boolean) => ({
  type: t.SET_LIVE_WATCH,
  payload: flag,
});
