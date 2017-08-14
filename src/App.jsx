import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "Styles/app.css";

import Landing from "Components/Landing";

const Routers = () => (
  <Router>
    <Route path="/" component={Landing} />
  </Router>
);

ReactDOM.render(
  <Routers />,
  document.getElementById("app"));

