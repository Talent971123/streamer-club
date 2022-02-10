import * as t from "redux/types/watch";

const matchReducer = (
  state = {
    live: false,
  },
  action: any
) => {
  switch (action.type) {
    case t.SET_LIVE_WATCH:
      return { ...state, live: action.payload };
    default:
      return { ...state };
  }
};

export default matchReducer;
