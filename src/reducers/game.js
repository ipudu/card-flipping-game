import * as types from '../constants';

const initalState = {
  start: false,
  win: false,
  time: 0,
};

const gameReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.GAME_START:
      return {
        ...state,
        start: true,
      };
    case types.GAME_RESET:
      return initalState;
    case types.GAME_WIN:
      return {
        ...state,
        win: true,
      };
    case types.GAME_TIME:
      return {
        ...state,
        time: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
