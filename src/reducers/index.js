import { combineReducers } from 'redux';

import cardReducer from './card';
import gameReducer from './game';

const rootReducer = combineReducers({
  card: cardReducer,
  game: gameReducer,
});

export default rootReducer;
