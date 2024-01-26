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
import AppProcess from "./screens/admissions/AppProcess";
import News from "./screens/newsEvents";
import Faq from "./screens/admissions/Faq";
// import Faqs from "./screens/admissions/Faqs";
import StudentSupport from "./screens/studentsupport";

import Cocurricular from "./screens/cocurricular";
import Sports from "./screens/cocurricular/Sports";
import OurSchool from "./screens/ourschools";
import PrimarySchool from "./screens/ourschools/Primaryschool";
import SecondarySchool from "./screens/ourschools/Secondaryschool";
import BusService from "./screens/admissions/BusService";
import SchoolFees from "./screens/admissions/SchoolFees";
import StudentLeadership from "./screens/cocurricular/StudentLeadership";
import ArtsDesign from "./screens/cocurricular/ArtsDesign";
import Extra from "./screens/cocurricular/Extra";
import Calender from "./screens/Calender";
import LearningSupport from "./screens/studentsupport/LearningSupport";
import SchoolCounseling from "./screens/studentsupport/SchoolCounseling";
import HealthServices from "./screens/studentsupport/HealthServices";
import Libraries from "./screens/studentsupport/Libraries";
import CareerCounsling from "./screens/studentsupport/CareerCounsling";
import EarlyEducation from "./screens/ourschools/Primaryschool/EarlyEducation";
import MiddleYears from "./screens/ourschools/Secondaryschool/MiddleYears";
import MisLogin from "./screens/Auth/MisLogin"
import InnovBase from "./screens/Auth/InnoveBase"
import Contact from "./screens/Contact";
const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/mis-login">
        < MisLogin/>
      </Route>
      <Route exact path="/innovebase-login">
        <InnovBase />
      </Route>
  
      <Route exact path="/contact-us">
        <Contact />
      </Route>
  
      <Route exact path="/about-us">
        <About />
      </Route>
      <Route exact path="/about-us/educational-technology">
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
      <Route exact path="/admissions/bus-service">
        <BusService />
      </Route>
      <Route exact path="/admissions/school-fees">
        <SchoolFees />
      </Route>
      <Route exact path="/admissions/application-process">
        <AppProcess />
      </Route>
      <Route exact path="/admissions/faq">
        <Faq />
      </Route>

      <Route exact path="/student-support">
        <StudentSupport />
      </Route>
      <Route exact path="/student-support/learning-support">
        <LearningSupport />
      </Route>
      <Route exact path="/student-support/school-counseling">
        <SchoolCounseling />
      </Route>

      <Route exact path="/student-support/health-services">
        <HealthServices />
      </Route>
      <Route exact path="/student-support/libraries">
        <Libraries />
      </Route>

      <Route exact path="/student-support/career-college-counselling">
        <CareerCounsling />
      </Route>

      <Route exact path="/co-curricular">
        <Cocurricular />
      </Route>
      <Route exact path="/co-curricular/student-leadership">
        <StudentLeadership />
      </Route>
      <Route exact path="/co-curricular/arts-design">
        <ArtsDesign />
      </Route>
      <Route exact path="/co-curricular/sports-athletics">
        <Sports />
      </Route>
      <Route exact path="/co-curricular/extra-curricular-activities">
        <Extra />
      </Route>
      <Route exact path="/our-schools">
        <OurSchool />
      </Route>
      <Route exact path="/our-schools/primary-school">
        <PrimarySchool />
      </Route>
      <Route exact path="/our-schools/primary-school/early-education">
        <EarlyEducation />
      </Route>

      <Route exact path="/our-schools/secondary-school">
        <SecondarySchool />
      </Route>
      <Route exact path="/our-schools/secondary-school/middle-years">
        <MiddleYears />
      </Route>

      <Route exact path="/calender">
        <Calender />
      </Route>
      <Route exact path="/news-events">
        <News />
      </Route>
    </Switch>
  </BrowserRouter>,
  rootElement
);
