import { createReducer } from "../../app/common/util/reducerUtil";
import { SET_CURRENT_VIDEO } from "../constants/VideoPlayerConstants";

const initialState = {};

export const setCurrentVideo = (state, payload) => {
  localStorage.removeItem("currentVideo");
  localStorage.setItem("currentVideo", JSON.stringify(payload.video));
  return {
    ...payload.video
  };
};

export default createReducer(initialState, {
  [SET_CURRENT_VIDEO]: setCurrentVideo
});
