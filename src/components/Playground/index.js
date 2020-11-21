import React from 'react';
import { connect } from 'react-redux';

import Deck from './Deck';
import Win from './Win';
import Card from './Card';

const Playground = ({ cardState, gameState, winGame }) => {
  const { cards, match } = cardState;
  const { start } = gameState;

  if (match.every((current) => current === true)) {
    return <Win />;
  }

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
