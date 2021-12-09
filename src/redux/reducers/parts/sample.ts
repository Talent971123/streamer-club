import * as t from "redux/types";

const sample = (
  state = {
    name: "",
  },
  action: any
) => {
  switch (action.type) {
    case t.SET_SAMPLE:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return { ...state };
  }
};

export default sample;
