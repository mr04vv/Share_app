import { combineReducers } from "redux";

import * as users from "./users"

export default combineReducers({
  ...users
});
