import React from 'react';

import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header text-center my-3 text-primary px-5">
      <h1 className="font-weight-bold">Card Flipping Game</h1>
      <div className="d-flex justify-content-between">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
