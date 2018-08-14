import { createReducer } from "../common/util/reducerUtil";
import { ADD_VIDEO_TO_STASH, UPDATE_VIDEO } from "../constants/StashConstants";

export const addVideoToStash = (state, payload) => {
  return [...state, payload];
};

export const updateVideo = (state, payload) => {
  return state.map(video => {
    if (video.videoId === payload.videoId) {
    }
  });
};

const initialState = [];

export default createReducer(initialState, {
  [ADD_VIDEO_TO_STASH]: addVideoToStash,
  [UPDATE_VIDEO]: updateVideo
});
