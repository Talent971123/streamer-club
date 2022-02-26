import * as t from "redux/types/club";

export const setClubInfo = (club: any) => ({
  type: t.SET_CLUB_INFO,
  payload: club,
});
