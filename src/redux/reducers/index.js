import { combineReducers } from "redux";
import MeetingReducer from "./MeetingReducer";

export const rootReducer = combineReducers({
  meeting: MeetingReducer
});
