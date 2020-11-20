import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import RefreshIcon from '@material-ui/icons/Refresh';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <AwesomeButton type="primary">
          <SportsEsportsIcon />
        </AwesomeButton>
        <AwesomeButton type="primary" className="mx-2">
          Leaderboard
        </AwesomeButton>
      </div>

      <AwesomeButton type="secondary">
        <RefreshIcon />
      </AwesomeButton>
    </nav>
  );
};

export default Navbar;
