import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Grade from './Grade';

const App = () => (
  <Router>
    <Switch>
    <Route path="/:instrument/:grade">
      <Grade />
    </Route>
    </Switch>
  </Router>
);

export default App;