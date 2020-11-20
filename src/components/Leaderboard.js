import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const API = 'https://card-api-39svs5zcv2e3.runkit.sh';

    Axios.get(API).then((res) => {
      setData(res.data.slice(0, 10));
    });
  }, []);

  return (
    <div className="leaderboard">
      {data.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center mt-5">
          <CircularProgress />
        </div>
      ) : (
        <div>
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
      )}
    </div>
  );
};

export default Leaderboard;
