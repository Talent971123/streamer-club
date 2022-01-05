import { combineReducers } from "redux";
import * as R from "./index";

const rootReducer = combineReducers({
  club: R.Club,
  players: R.Players,
  teams: R.Teams
});

export default rootReducer;
