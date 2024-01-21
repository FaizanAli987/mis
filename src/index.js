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
import SchoolFees from "./screens/admissions/SchoolFees";
import BusService from "./screens/admissions/BusService";
// import Faqs from "./screens/admissions/Faqs";
import StudentSupport from "./screens/studentsupport";
import SchoolCounselling from "./screens/studentsupport/SchoolCounselling";
import HealthService from "./screens/studentsupport/HealthService";
import LearningSupport from "./screens/studentsupport/LearningSupport";
import Cocurricular from "./screens/cocurricular";
import SportsAtheletics from './screens/cocurricular/SportsAtheletics';
import StudentLeadership from './screens/cocurricular/StudentLeadership';
import OurSchool from './screens/ourschools';
import PrimarySchool from './screens/ourschools/Primaryschool';
import EarlyEducation from './screens/ourschools/Primaryschool/EarlyEducation';
import LowerGrades from './screens/ourschools/Primaryschool/LowerGrades';
import SecondarySchool from './screens/ourschools/Secondaryschool';
import HigherGrades from './screens/ourschools/Secondaryschool/HigherGrades';
import MiddleYear from './screens/ourschools/Secondaryschool/MiddleYear';





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
      <Route exact path="/admission">
        <Admission />
      </Route>
      <Route exact path="/admission/application-process">
        <AppProcess />
      </Route>
      <Route exact path="/admission/school-fees">
        <SchoolFees />
      </Route>
      <Route exact path="/admission/bus-service">
        <BusService />
      </Route>
      {/* <Route exact path="/admission/faqs">
        <Faqs />
      </Route> */}
      <Route exact path="/studentsupport">
        <StudentSupport />
      </Route>
      <Route exact path="/studentsupport/SchoolCounselling">
        <SchoolCounselling />
      </Route>
      <Route exact path="/studentsupport/LearningSupport">
        <LearningSupport />
      </Route>
      <Route exact path="/studentsupport/HealthService">
        <HealthService />
      </Route>
      <Route exact path="/cocurricular">
        <Cocurricular />
      </Route>
      <Route exact path="/cocurricular/SportsAtheletics">
        <SportsAtheletics />
      </Route>
      <Route exact path ="/cocurricular/StudentLeadership">
        <StudentLeadership />
      </Route>
      <Route exact path ="/ourschools">
        <OurSchool />
      </Route>
      <Route exact path ="/ourschools/Primaryschool">
        <PrimarySchool />
      </Route>
      <Route exact path ="/ourschools/Primaryschool/EarlyEducation">
        <EarlyEducation />
      </Route>
      <Route exact path ="/ourschools/Primaryschool/LowerGrades">
        <LowerGrades />
      </Route>
      <Route exact path ="/ourschools/Secondaryschool">
        <SecondarySchool />
      </Route>
      <Route exact path ="/ourschools/Secondaryschool/HigherGrades">
        <HigherGrades />
      </Route>
      <Route exact path ="/ourschools/Secondaryschool/MiddleYear">
        <MiddleYear />
      </Route>
    </Switch>
  </BrowserRouter>,
  rootElement
);
