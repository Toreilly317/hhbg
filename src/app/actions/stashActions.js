import {
  ADD_VIDEO_TO_STASH,
  REMOVE_VIDEO_FROM_STASH
} from "../constants/StashConstants";

export const addVideoToStash = video => ({
  type: ADD_VIDEO_TO_STASH,
  payload: video
});

export const removeVideoFromStash = videoId => ({
  type: REMOVE_VIDEO_FROM_STASH,
  payload: {
    videoId
  }
});
