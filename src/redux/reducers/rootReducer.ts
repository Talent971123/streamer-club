import { combineReducers } from "redux";
import * as R from "./index";

const rootReducer = combineReducers({
  league: R.League,
  club: R.Club,
  players: R.Players,
  teams: R.Teams,
  match: R.Match,
  watch: R.Watch,
  site: R.Site,
  clip: R.Clip,
});

export default rootReducer;
