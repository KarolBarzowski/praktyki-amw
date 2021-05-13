import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import "./Root.css";
import App from "./App";

function Root() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/fruits">Fruits</NavLink>
          </li>
          <li>
            <NavLink to="/animals">Animals</NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/:apiId" component={App} />
      </Switch>
    </BrowserRouter>
  );
}

export default Root;
