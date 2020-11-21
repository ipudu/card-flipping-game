import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { timeGame } from '../../actions';

const Timer = ({ timeGame }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let t = 0;
    const startTime = new Date().getTime();
    const interval = setInterval(
      () =>
        setTime(() => {
          const duration = new Date().getTime() - startTime;
          t = duration;
          return duration;
        }),
      100
    );
    return () => {
      clearInterval(interval);
      timeGame(t);
    };
  }, [timeGame]);

  return (
    <div className="mr-3">
      <h3>{(time / 1000).toFixed(1)} sec</h3>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  timeGame: (time) => dispatch(timeGame(time)),
});

export default connect(null, mapDispatchToProps)(Timer);
