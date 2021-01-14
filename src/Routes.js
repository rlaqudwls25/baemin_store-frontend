import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer'
import Detail from './Pages/Detail/Detail';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/detail" component={Detail} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default Routes;
