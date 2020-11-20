import React from 'react';
import { connect } from 'react-redux';

import Deck from './Deck';
import Card from './Card';

const Playground = ({ cardState, gameState }) => {
  const { cards, match } = cardState;
  const { start } = gameState;

  if (!start) {
    return <Deck />;
  }

  return (
    <div className="playground">
      {cards.map((card, idx) => (
        <Card card={card} key={idx} idx={idx} match={match[idx]} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cardState: state.card,
  gameState: state.game,
});

export default connect(mapStateToProps)(Playground);
