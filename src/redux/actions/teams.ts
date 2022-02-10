import * as t from "redux/types/teams";

export const setTeamList = (teams: any) => ({
  type: t.SET_TEAMS_LIST,
  payload: teams,
});
