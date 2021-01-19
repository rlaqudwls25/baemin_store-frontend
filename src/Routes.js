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
import Cart from './Pages/Cart/Cart/Cart';
import CartOrder from './Pages/Cart/CartOrder/CartOrder';
import CartExit from './Pages/Cart/CartExit/CartExit';
import "./Styles/reset.scss";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/1" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register/enter_join" component={EnterJoin} />
          <Route exact path="/register/join" component={Join} />
          <Route exact path="/register/exit_join" component={ExitJoin} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/item" component={Item} />
          <Route exact path="/" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
