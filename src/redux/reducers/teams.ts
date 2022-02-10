import * as t from "redux/types/teams";

const teamsReducer = (
  state = {
    list: [],
  },
  action: any
) => {
  switch (action.type) {
    case t.SET_TEAMS_LIST:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return { ...state };
  }
};

export default teamsReducer;
