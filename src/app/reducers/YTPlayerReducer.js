import { createReducer } from "../common/util/reducerUtil";
import { ADD_PLAYER } from "../constants/YTPlayerConstants";

export const addPlayer = (state, payload) => {
  return payload;
};

export const removePlayer = (state, payload) => {
  return [...state.filter(player => player.id !== payload.id)];
};

export const buildPlayer = (state, payload) => {
  return payload.player;
};

const initialState = {};

export default createReducer(initialState, {
  [ADD_PLAYER]: addPlayer

  // [BUILD_PLAYER]: buildPlayer
});
