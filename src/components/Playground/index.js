import React from 'react';
import { connect } from 'react-redux';

import Deck from './Deck';
import Win from './Win';
import Card from './Card';

const Playground = ({ cardState, gameState }) => {
  const { cards, match } = cardState;
  const { start, win } = gameState;

  if (win) {
    return <Win />;
  }

  if (!start) {
    return <Deck />;
  }

  return (
    <div className="cardpool">
      {cards.map((card, idx) => (
        <Card card={card} key={idx} idx={idx} match={match} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardState: state.card,
  gameState: state.game,
});

export default connect(mapStateToProps)(Playground);
