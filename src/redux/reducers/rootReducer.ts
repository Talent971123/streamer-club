import { combineReducers } from "redux";
import * as R from "./index";

const rootReducer = combineReducers({
  club: R.Club,
  teams: R.Teams,
  match: R.Match,
  watch: R.Watch,
  site: R.Site,
});

export default rootReducer;
