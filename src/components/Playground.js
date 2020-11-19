import React, { useState } from 'react';

import Card from './Card';

import cardDeck from '../utils/cardDeck';
import shuffle from '../utils/shuffle';

const NUMBER_OF_CARDS = 6;

const getRandomPairsOfCards = () => {
  let cards = Object.keys(cardDeck);
  cards = shuffle(cards).slice(0, NUMBER_OF_CARDS / 2);
  cards = shuffle([...cards, ...cards]);
  return cards;
};

const cards = getRandomPairsOfCards();

const Playground = () => {
  const [lastClick, setLastClick] = useState([]);
  const [matched, setMatched] = useState(Array(NUMBER_OF_CARDS).fill(false));

  const handleClick = (card, idx) => {
    if (lastClick[0] === card && lastClick[1] !== idx) {
      const newMatched = matched;
      newMatched[lastClick[1]] = true;
      newMatched[idx] = true;
      setTimeout(() => setMatched(newMatched), 1500);
    }
    setLastClick([card, idx]);
  };

  return (
    <div className="playground">
      {cards.map((card, idx) => (
        <div onClick={() => handleClick(card, idx)} key={idx}>
          <Card card={cardDeck[card]} idx={idx} matched={matched} />
        </div>
      ))}
    </div>
  );
};

export default Playground;
