import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const startTime = new Date().getTime();
    setInterval(
      () =>
        setTime(() => {
          const duration = new Date().getTime() - startTime;
          return duration;
        }),
      200
    );
  }, []);

  return (
    <div className="mr-3">
      <h3>{(time / 1000).toFixed(1)} sec</h3>
    </div>
  );
};

export default Timer;
