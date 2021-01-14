import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import Category from "./Pages/Category/Category";
import Item from "./Components/Item/Item";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/item" component={Item} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
