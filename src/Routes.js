import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from './Pages/Category/Category';
import Main from './Pages/Main/Main'
import Item from './Components/Item/Item'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/item" component={Item} />
          
        </Switch>
      </Router>
    )
  }
}

export default Routes;
