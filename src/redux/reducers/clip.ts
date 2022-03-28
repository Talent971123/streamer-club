import * as t from "redux/types/clip";

const clipReducer = (
  state = {
    clip_list: [] as any,
  },
  action: any
) => {
  switch (action.type) {
    case t.SET_CLIP_LIST:
      return {
        ...state,
        clip_list: action.payload,
      };
    default:
      return { ...state };
  }
};

export default clipReducer;
