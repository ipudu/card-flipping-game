import * as types from '../constants';

export const startGame = () => ({
  type: types.GAME_START,
});

export const resetGame = () => ({
  type: types.GAME_RESET,
});
