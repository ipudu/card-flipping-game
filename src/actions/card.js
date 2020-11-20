import * as types from '../constants';

export const clickCard = (card, idx) => {
  return (dispatch, getState) => {
    const [lastCard, lastIdx] = getState().card.lastClick;

    if (lastCard === card && lastIdx !== idx) {
      dispatch({ type: types.CARD_MATCH, payload: [lastIdx, idx] });
    }

    dispatch({ type: types.CARD_CLICK, payload: [card, idx] });
  };
};

export const resetLastClick = () => ({
  type: types.CARD_CLICK,
  payload: ['', -1],
});
