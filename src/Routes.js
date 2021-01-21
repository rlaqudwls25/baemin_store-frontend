import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Login/Login";
import Category from "./Pages/Category/Category";
import EnterJoin from "./Pages/Register/EnterJoin/EnterJoin";
import Join from "./Pages/Register/Join/Join";
import ExitJoin from "./Pages/Register/ExitJoin/ExitJoin";
import Detail from "./Pages/Detail/Detail"
import "./Styles/reset.scss";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register/join" component={Join}/>
          <Route exact path="/register/enter_join" component={EnterJoin}/>
          <Route exact path="/register/exit_join" component={ExitJoin}/>
          <Route exact path="/category/detail" component={Detail}/>
          <Route exact path="/category" component={Category}/>
          <Route exact path="/category/detail/:id" component={Detail}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
