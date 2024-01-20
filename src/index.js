import React, { useEffect } from "react";

import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./screens/Home";
const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>,
  rootElement
);
