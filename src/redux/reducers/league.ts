import * as t from "redux/types/league";

export interface LeagueStateTypes {
  info: {} | null,
}

const leagueReducer = (
  state: LeagueStateTypes = {
    info: null,
  },
  action: any
) => {
  switch (action.type) {
    case t.SET_LEAGUE_INFO:
      return {
        ...state,
        info: action.payload,
      }
    default:
      return { ...state };
  }
};

export default leagueReducer;
