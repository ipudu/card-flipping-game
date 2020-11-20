import React from 'react';
import { connect } from 'react-redux';

import Card from './Card';

const Playground = ({ state }) => {
  const { cards, match } = state;

  return (
    <div className="playground">
      {cards.map((card, idx) => (
        <Card card={card} key={idx} idx={idx} match={match[idx]} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state.card,
});

export default connect(mapStateToProps)(Playground);
