import { createReducer } from "../common/util/reducerUtil";
import { ADD_VIDEO_TO_STASH, UPDATE_VIDEO } from "../constants/StashConstants";

export const addVideoToStash = (state, payload) => {
  return [...state, payload];
};
export const saveOrUpdateVideo = (state, payload) => {
  return state
    .filter(video => video.videoId !== payload.videoId)
    .concat(payload);
};

const initialState = [];

export default createReducer(initialState, {
  [ADD_VIDEO_TO_STASH]: addVideoToStash,
  [UPDATE_VIDEO]: saveOrUpdateVideo
});
