import shuffle from 'lodash/shuffle';

import { cardDeck } from '../utils';
import * as types from '../constants';

const NUMBER_OF_PAIRS = 9;

const shuffledCardDeck = shuffle(cardDeck);
const oneSetOfCards = shuffledCardDeck.slice(0, NUMBER_OF_PAIRS);

const initalState = {
  cards: shuffle([...oneSetOfCards, ...oneSetOfCards]),
  match: [...Array(NUMBER_OF_PAIRS * 2).fill(false)],
  isFlipping: [...Array(NUMBER_OF_PAIRS * 2).fill(false)],
  lastClick: ['', -1],
};

const cardReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.CARD_CLICK:
      return {
        ...state,
        lastClick: action.payload,
      };
    case types.CARD_MATCH:
      const newMatch = state.match;
      newMatch[action.payload[0]] = true;
      newMatch[action.payload[1]] = true;

      return {
        ...state,
        match: newMatch,
      };
    default:
      return state;
  }
};

export default cardReducer;
