import * as t from "redux/types";

export const getSample = (name: string) => (dispatch) => {
  dispatch({
    type: t.SET_SAMPLE,
    payload: name,
  });
};
