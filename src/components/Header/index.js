import React from 'react';

import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header text-center text-primary">
      <h1 className="font-weight-bold pt-2">Card Flipping Game</h1>
      <div className="d-flex justify-content-between">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
