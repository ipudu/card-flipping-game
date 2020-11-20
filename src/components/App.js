import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/';
import Playground from './Playground';
import Leaderboard from './Leaderboard';

const App = () => {
  return (
    <div className="app container">
      <Header />

      <Switch>
        <Route exact path="/" component={Playground} />
        <Route path="/leaderboard" component={Leaderboard} />
      </Switch>
    </div>
  );
};

export default App;
