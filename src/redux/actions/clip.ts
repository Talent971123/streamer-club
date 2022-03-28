import * as t from "redux/types/clip";

export const setClipList = (clip_list: any) => ({
  type: t.SET_CLIP_LIST,
  payload: clip_list,
});
