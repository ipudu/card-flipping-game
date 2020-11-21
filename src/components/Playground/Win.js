import React, { useState } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import celebration from '../../assets/svgs/celebration.svg';

const Win = ({ gameState }) => {
  const { time } = gameState;
  const [name, setName] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const API = 'https://card-api-39svs5zcv2e3.runkit.sh';
    Axios.post(API, { name, time }).then(() => setIsSubmit(true));
  };

  return (
    <div className="deck">
      {isSubmit ? (
        <div className="d-flex justify-content-center">
          <h2> Thank you for playing!</h2>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <h2>
            Nice! You beat the game in
            <span className="text-danger"> {(time / 1000).toFixed(2)} </span>
            sec 🎉
          </h2>
          <img
            src={celebration}
            alt=""
            style={{ width: '450px', height: 'auto' }}
          />
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="form-group">
              <h2>Wanna submit your score?</h2>
              <input
                type="text"
                className="form-control"
                placeholder="What is your name?"
                style={{ height: '50px' }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-lg btn-block"
              disabled={!name}
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  gameState: state.game,
});

export default connect(mapStateToProps)(Win);
