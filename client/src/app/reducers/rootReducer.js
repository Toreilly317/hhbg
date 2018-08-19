import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import stashReducer from "./stashReducer";
import modalReducer from "./modalReducer";
import currentVideoReducer from "./currentVideoReducer";

const rootReducer = combineReducers({
  events: eventReducer,
  stash: stashReducer,
  modals: modalReducer,
  currentVideo: currentVideoReducer
});

export default rootReducer;
