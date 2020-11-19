import React, { useState } from 'react';

import { CARD_BACK } from '../utils/cardDeck';

const Card = ({ card, idx, matched }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [disableClick, setDisableClick] = useState(false);

  const handleClick = () => {
    if (!disableClick) {
      setIsFlipped((isFlipped) => !isFlipped);
      setDisableClick((disableClick) => !disableClick);
      setTimeout(() => {
        setIsFlipped((isFlipped) => !isFlipped);
        setDisableClick((disableClick) => !disableClick);
      }, 1000);
    }
  };

  if (matched[idx]) {
    return (
      <div className="flip-card">
        <img src={card} alt="" />
      </div>
    );
  }

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${isFlipped && 'flipped'}`}>
        <div className="flip-card-front">
          <img src={CARD_BACK} alt="" />
        </div>
        <div className="flip-card-back">
          <img src={card} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
