import React, { useState } from 'react';
import { connect } from 'react-redux';

import { cardBack } from '../../utils/cardDeck';
import { clickCard, resetLastClick } from '../../actions';

const Card = ({ card, idx, match, clickCard, resetLastClick, winGame }) => {
  const [flip, setFlip] = useState(false);

  const handleClick = () => {
    setFlip((prevFlip) => !prevFlip);
    setTimeout(() => {
      setFlip((prevFlip) => !prevFlip);
      resetLastClick();
    }, 1000);
    clickCard(card, idx);
  };

  if (match) {
    return (
      <div className="flip-card match">
        <img src={card} alt="" />
      </div>
    );
  }

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${flip && 'flipped'}`}>
        <div className="flip-card-front">
          <img src={cardBack} alt="" />
        </div>
        <div className="flip-card-back">
          <img src={card} alt="" />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clickCard: (card, idx) => dispatch(clickCard(card, idx)),
  resetLastClick: () => dispatch(resetLastClick()),
});

export default connect(null, mapDispatchToProps)(Card);
