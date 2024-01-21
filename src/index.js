import React, { useEffect } from "react";

import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./screens/Home";
import About from "./screens/about";
import EduTech from "./screens/about/EduTech";
import FutureDev from "./screens/about/FutureDev";
import MandBoard from "./screens/about/MandBoard";
import OurCampus from "./screens/about/OurCampus";
import OurMission from "./screens/about/OurMission";
const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about-us">
        <About />
      </Route>
      <Route exact path="/about-us/education-technology">
        <EduTech />
      </Route>
      <Route exact path="/about-us/future-developments">
        <FutureDev />
      </Route>
      <Route exact path="/about-us/management-and-board">
        <MandBoard />
      </Route>
      <Route exact path="/about-us/our-campus">
        <OurCampus />
      </Route>
      <Route exact path="/about-us/our-mission">
        <OurMission />
      </Route>
    </Switch>
  </BrowserRouter>,
  rootElement
);
