import * as types from '../constants';

export const startGame = () => ({
  type: types.GAME_START,
});

export const resetGame = () => ({
  type: types.GAME_RESET,
});

export const winGame = () => ({
  type: types.GAME_WIN,
});

export const timeGame = (time) => ({
  type: types.GAME_TIME,
  payload: time,
});
