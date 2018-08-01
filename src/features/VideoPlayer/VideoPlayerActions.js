import { SET_CURRENT_VIDEO } from "./VideoPlayerConstants";

export const setCurrentVideo = video => ({
  type: SET_CURRENT_VIDEO,
  payload: { video }
});
