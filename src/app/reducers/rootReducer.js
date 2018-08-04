import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import stashReducer from "./stashReducer";
import modalReducer from "./modalReducer";
import currentVideoReducer from "./VideoPlayerReducer";
import YTPlayerReducer from "./YTPlayerReducer";

const rootReducer = combineReducers({
  events: eventReducer,
  stash: stashReducer,
  modals: modalReducer,
  currentVideo: currentVideoReducer,
  player: YTPlayerReducer
});

export default rootReducer;
