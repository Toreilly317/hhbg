import { ADD_VIDEO_TO_STASH } from "./constants";

export const addVideoToStash = video => ({
  type: ADD_VIDEO_TO_STASH,
  payload: {
    video
  }
});
