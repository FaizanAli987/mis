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
import Admission from "./screens/admissions";
import AppProcess from './screens/admissions/AppProcess';
import News from "./screens/newsEvents"

// import Faqs from "./screens/admissions/Faqs";
import StudentSupport from "./screens/studentsupport";

import Cocurricular from "./screens/cocurricular";
import OurSchool from './screens/ourschools';
import PrimarySchool from './screens/ourschools/Primaryschool';
import SecondarySchool from './screens/ourschools/Secondaryschool';


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
      <Route exact path="/admissions">
        <Admission />
      </Route>
      <Route exact path="/admissions/application-process">
        <AppProcess />
      </Route>

      <Route exact path="/studentsupport">
        <StudentSupport />
      </Route>
    
      <Route exact path="/co-curricular">
        <Cocurricular />
      </Route>
  
      <Route exact path ="/our-schools">
        <OurSchool />
      </Route>
      <Route exact path ="/our-schools/primary-school">
        <PrimarySchool />
      </Route>
   
    
      <Route exact path ="/our-schools/secondary-school">
        <SecondarySchool />
      </Route>
    
      <Route exact path ="/news-events">
        <News />
      </Route>
    
    </Switch>
  </BrowserRouter>,
  rootElement
);
