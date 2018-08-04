import {
  ADD_PLAYER,
  REMOVE_PLAYER,
  START_PLAYER,
  PAUSE_PLAYER,
  SEEK_PLAYER
} from "../constants/YTPlayerConstants";

export const addPlayer = player => ({
  type: ADD_PLAYER,
  payload: { ...player }
});

export const playerStart = () => ({
  type: START_PLAYER,
  payload: {}
});

export const removePlayer = id => ({
  type: REMOVE_PLAYER,
  payload: {
    id
  }
});

export const pauseStart = () => ({
  type: PAUSE_PLAYER,
  payload: {}
});

export const seekPlayer = () => ({
  type: SEEK_PLAYER,
  payload: {}
});
