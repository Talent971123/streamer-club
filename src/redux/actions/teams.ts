import * as t from "redux/types/teams";

export const getTeamsInfo = (teams: any) => ({
  type: t.GET_TEAMS_INFO,
  payload: teams,
});
