import React from 'react';

const data = [
  {
    gamer: 'Flip King',
    time: '2 min 20 sec',
  },
];

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <div className="d-flex justify-content-between font-weight-bold px-2 mb-2">
        <h4>Gamer</h4>
        <h4>Time used</h4>
      </div>
      <ul className="list-group">
        {data.map((d, idx) => (
          <li className="list-group-item" key={idx}>
            <div className="d-flex justify-content-between align-items-center">
              <span>{d.gamer}</span>
              <span>{d.time}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
