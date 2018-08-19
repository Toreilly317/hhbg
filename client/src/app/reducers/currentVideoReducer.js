import { createReducer } from "../common/util/reducerUtil";
import { SET_CURRENT_VIDEO } from "../constants/VideoPlayerConstants";

const initialState = {};

export const setCurrentVideo = (state, payload) => {
  return payload.video;
};

export default createReducer(initialState, {
  [SET_CURRENT_VIDEO]: setCurrentVideo
});
