import * as t from "redux/types/league";

export const setLeagueInfo = (leagueInfo: any) => ({
    type: t.SET_LEAGUE_INFO,
    payload: leagueInfo,
});