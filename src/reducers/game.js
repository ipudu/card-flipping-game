import * as types from '../constants';

const initalState = {
  start: false,
};

const gameReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GAME_START:
      return {
        ...state,
        start: true,
      };
    case types.GAME_RESET:
      return {
        ...state,
        start: false,
      };
    default:
      return state;
  }
};

export default gameReducer;
