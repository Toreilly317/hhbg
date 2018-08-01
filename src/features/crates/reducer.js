import { createReducer } from "../../app/common/util/reducerUtil";
import { ADD_VIDEO_TO_STASH } from "./constants";

const initialState = [];

export const addVideoToStash = (state, payload) => {
  return [...state, payload];
};

export default createReducer(initialState, {
  [ADD_VIDEO_TO_STASH]: addVideoToStash
});
