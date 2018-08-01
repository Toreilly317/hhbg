import { combineReducers } from "redux";
import eventReducer from "../../features/event/eventReducer";
import stashReducer from "../../features/crates/reducer";
import modalReducer from "../../features/modals/modalReducer";
import currentVideoReducer from "../../features/VideoPlayer/VideoPlayerReducer";

const rootReducer = combineReducers({
  events: eventReducer,
  stash: stashReducer,
  modals: modalReducer,
  currentVideo: currentVideoReducer
});

export default rootReducer;
