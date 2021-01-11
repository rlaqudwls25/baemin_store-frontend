import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends Component() {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;
