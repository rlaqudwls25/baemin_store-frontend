import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Category from "./Pages/Category/Category";
import Item from "./Components/Item/Item";
import EnterJoin from "./Pages/Register/EnterJoin/EnterJoin";
import Join from "./Pages/Register/Join/Join";
import ExitJoin from "./Pages/Register/ExitJoin/ExitJoin";
<<<<<<< HEAD
import Detail from "./Pages/Detail/Detail"
=======
>>>>>>> main
import "./Styles/reset.scss";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/" component={Main} />
<<<<<<< HEAD
=======
          
  
>>>>>>> main
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
