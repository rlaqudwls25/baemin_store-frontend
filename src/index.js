import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./Styles/reset.scss";
import "./Styles/common.scss";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
