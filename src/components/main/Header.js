import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  return (
    <nav>
      <div className="top">
        <div className="container">
          <div className="content">
            <ul>
              <li>
                <Link to="#">Careers</Link>
              </li>

              <li>
                <Link to="#" target="_blank">
                  Enrol Online
                </Link>
              </li>
              <li>
                <button id="search-button" title="Search">
                  <i className="iconfont icon-search"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="content">
            <div className="brand logo-c">
              <h1>
                <Link to="/">
                  <span style={{ backgroundImage: `url('/logo.svg')` }}></span>
                </Link>
              </h1>
            </div>
            <div className="nav">
              <div className="nav-c">
                <ul>
                  <li className="has-sub-second">
                    <Link to="/about-us">About us</Link>

                    <ul className="sub-menu">
                      <li>
                        <Link to="/about-us/our-mission">Our Mission</Link>
                      </li>
                      <li>
                        <Link to="/about-us/our-campus">Our Campus</Link>
                      </li>

                      <li>
                        <Link to="/about-us/management-board">
                          Management &amp; Board
                        </Link>
                      </li>

                      <li>
                        <Link to="/about-us/educational-technology">
                          Educational Technology
                        </Link>
                      </li>
                      <li>
                        <Link to="/about-us/future-developments">
                          Future Developments
                        </Link>
                      </li>
                    </ul>
                    <i className="iconfont icon-top"></i>
                  </li>

                  <li className="has-sub-second">
                    <Link to="/admissions">Admissions</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/admissions/application-process">
                          Application Process
                        </Link>
                      </li>
                    </ul>
                    <i className="iconfont icon-top"></i>
                  </li>
                  <li className="has-sub-second">
                    <Link to="/our-schools">Our schools</Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/our-schools/primary-school">
                          Primary School
                        </Link>
                      </li>
                      <li>
                        <Link to="/our-schools/secondary-school">
                          Secondary School
                        </Link>
                      </li>
                    </ul>
                    <i className="iconfont icon-top"></i>
                  </li>
                  <li>
                    <Link to="/co-curricular">Co-curricular</Link>
                  </li>
                  <li>
                    <Link to="/student-support">Student Support</Link>
                  </li>
                  <li>
                    <Link to="/news-events">News &amp; Events</Link>
                  </li>
                  <li>
                    <Link to="#">Calendar</Link>
                  </li>
                </ul>
                <div className="top">
                  <ul>
                    <li>
                      <Link to="#" target="">
                        Careers
                      </Link>
                    </li>

                    <li>
                      <Link to="#" target="_blank">
                        Enroll Online
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="burger-search">
              <button id="search-button" title="Search">
                <i className="iconfont icon-search"></i>
              </button>
              <div className="navbar-burger burger" title="menu">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
