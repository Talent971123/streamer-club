import { combineReducers } from "redux";
import * as R from "./parts";

const rootReducer = combineReducers({
  sample: R.Sample,
});

export default rootReducer;
