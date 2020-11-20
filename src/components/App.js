import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/';
import Playground from './Playground';
import Leaderboard from './Leaderboard';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app container">
      <Header />

      <Switch>
        <Route exact path="/" component={Playground} />
        <Route path="/leaderboard" component={Leaderboard} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
