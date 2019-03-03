import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Home from 'routes/Home.jsx';

// TODO: Class
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default hot(module)(App);
