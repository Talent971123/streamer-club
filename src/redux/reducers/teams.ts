import * as t from "redux/types/teams";

const teamsReducer = (
  state = {
    list: {},
  },
  action: any
) => {
  switch (action.type) {
    case t.GET_TEAMS_INFO:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return { ...state };
  }
};

export default teamsReducer;
