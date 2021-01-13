import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import EnterJoin from './Pages/Register/EnterJoin/EnterJoin';
import Join from './Pages/Register/Join/Join';
import ExitJoin from './Pages/Register/ExitJoin/ExitJoin';
import './Styles/reset.scss';

class Routes extends Component {


  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/register/enter_join" component={EnterJoin} />
          <Route exact path="/register/join" component={Join} />
          <Route exact path="/register/exit_join" component={ExitJoin} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default Routes;
