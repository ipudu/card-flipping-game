import React from 'react';
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import RefreshIcon from '@material-ui/icons/Refresh';

const Navbar = () => {
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

      <AwesomeButton type="secondary">
        <RefreshIcon />
      </AwesomeButton>
    </nav>
  );
};

export default Navbar;
