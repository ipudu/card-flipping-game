import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const API = 'https://card-api-39svs5zcv2e3.runkit.sh';

    Axios.get(API).then((res) => {
      const sortedData = res.data.sort((a, b) => a.time - b.time);
      setData(sortedData.slice(0, 10));
    });
  }, []);

  return (
    <div className="leaderboard">
      {data.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center pt-5">
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-between font-weight-bold px-2 mb-2">
            <h4>Gamer</h4>
            <h4>Time used</h4>
          </div>
          <ul className="list-group" style={{ fontSize: '1.5rem' }}>
            {data.map((d, idx) => (
              <li className="list-group-item" key={idx}>
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <span>
                      {idx === 0
                        ? `🥇 `
                        : idx === 1
                        ? `🥈 `
                        : idx === 2
                        ? `🥉 `
                        : `🏅 `}
                    </span>
                    {d.gamer}
                  </span>
                  <span>{(d.time / 1000).toFixed(2)} sec</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
