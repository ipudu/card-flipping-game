import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import RefreshIcon from '@material-ui/icons/Refresh';

import Timer from './Timer';
import { startGame, resetGame } from '../../actions';

const Navbar = ({ gameState, startGame, resetGame }) => {
  const { start } = gameState;

  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <AwesomeButton type="primary">
            <SportsEsportsIcon />
          </AwesomeButton>
        </Link>
        <Link to="/leaderboard">
          <AwesomeButton type="primary" className="mx-2">
            Leaderboard
          </AwesomeButton>
        </Link>
      </div>

      <div className="d-flex align-items-center">
        {start ? (
          <>
            <Timer />
            <div onClick={resetGame}>
              <AwesomeButton type="link">
                <RefreshIcon />
              </AwesomeButton>
            </div>
          </>
        ) : (
          <div onClick={startGame}>
            <AwesomeButton type="secondary">
              <PlayArrowIcon />
            </AwesomeButton>
          </div>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  gameState: state.game,
});

const mapDispatchToProps = (dispatch) => ({
  startGame: () => dispatch(startGame()),
  resetGame: () => dispatch(resetGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
