import React from "react";
import logo from "../logo.svg";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";

function Home() {
  return (
    <>
    <Header/>
    
      <section className="global-banners home-banners">
        <div className="container is-fluid">
          <div className="banners video-carousel">
            <div className="banner">
              <div className="image-box">
                <div className="image">
                  <span
                    className="zoomOut"
                    style={{
                      backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1DYW1wdXMtYWVyaWFsLXZpZXcuSlBHIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwicG9zaXRpb24iOiJjZW50ZXIiLCJ3aWR0aCI6MjQwMCwiaGVpZ2h0IjpudWxsfSwicXVhbGl0eSI6ODJ9fQ==')`,
                      backgroundPosition: "50% 50%",
                    }}
                  ></span>
                </div>
              </div>
              <div className="floating-controls">
                <i className="control-pause fa fa-pause"></i>
                <i className="control-vol fa fa-volume-off"></i>
              </div>
              <div className="video-holder">
                <div className="video-sizer"></div>
                <div
                  className="video-player container-size"
                  data-index="1"
                  data-settings='{"poster":"https:\/\/images-eu.digistormhosting.com.au\/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1DYW1wdXMtYWVyaWFsLXZpZXcuSlBHIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwicG9zaXRpb24iOiJjZW50ZXIiLCJ3aWR0aCI6MjQwMCwiaGVpZ2h0IjpudWxsfSwicXVhbGl0eSI6ODJ9fQ==","controls":[],"autoplay":false,"muted":true,"volume":0,"clickToPlay":true,"fullscreen":{"enabled":false},"loop":{"active":true}}'
                >
                  <video
                    poster="https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1DYW1wdXMtYWVyaWFsLXZpZXcuSlBHIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwicG9zaXRpb24iOiJjZW50ZXIiLCJ3aWR0aCI6MjQwMCwiaGVpZ2h0IjpudWxsfSwicXVhbGl0eSI6ODJ9fQ=="
                    className="player"
                    playsinline=""
                    muted=""
                  >
                    <source
                      src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/videos/BBIS.mp4?v=1647502149"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-guide">
        <div className="content fadeInUp">
          <div className="text-box darkbg">
            <h1>MIS IS A LEADING INTERNATIONAL DAY SCHOOL</h1>
            <p>
              Offering different programmes, we inspire a lifelong love of
              learning and actively develop global citizenship in a welcoming,
              supportive environment.
            </p>
            <div className="word-button-block">
              <div className="button-block">
                <p>
                  <a href="about-us.html" target="" className="readmore">
                    FIND OUT MORE
                  </a>
                </p>
              </div>
              <div className="word-block word-block-allWords"></div>
            </div>
          </div>
          <div className="right-box">
            <div className="item-c">
              <a href="our-schools.html" target="">
                {" "}
                <div className="inner">
                  <div className="img">
                    <img
                      src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/images/student-teacher.svg?v=1614122601"
                      alt="Teacher : student"
                    />
                  </div>
                  <p className="num">1:7</p>
                  <p>Teacher : student</p>
                </div>
              </a>{" "}
            </div>
            <div className="item-c">
              <a
                href="our-schools/secondary-school/ib-diploma-programme.html"
                target=""
              >
                {" "}
                <div className="inner">
                  <div className="img">
                    <img
                      src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/images/Overview.svg?v=1614122450"
                      alt="IB Diploma Score"
                    />
                  </div>
                  <p className="num">34</p>
                  <p>IB Diploma Score</p>
                </div>
              </a>{" "}
            </div>
            <div className="item-c">
              <a href="about-us.html" target="">
                {" "}
                <div className="inner">
                  <div className="img">
                    <img
                      src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/images/Nationality.svg?v=1614122612"
                      alt="Nationalities"
                    />
                  </div>
                  <p className="num">70+</p>
                  <p>Nationalities</p>
                </div>
              </a>{" "}
            </div>
            <div className="item-c">
              <a href="about-us/our-campus.html" target="">
                {" "}
                <div className="inner">
                  <div className="img">
                    <img
                      src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/images/learning-bbis_2021-02-23-232433.svg?v=1614122673"
                      alt="Learning space"
                    />
                  </div>
                  <p className="num">7,668m²</p>
                  <p>Learning space</p>
                </div>
              </a>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="intro-wrap">
        <div className="container">
          <div className="content">
            <div className="title-box has-text-centered fadeInUp">
              <h1>Our Schools</h1>
              <p>
                From the earliest years of education right through to from
                secondary school, MIS students are given every opportunity to
                thrive.
              </p>
            </div>
            <div className="group group-slick">
              <div className="item-c slider-wrapper ">
                <a href="our-schools/primary-school.html" target="">
                  <div className="img-c">
                    <div
                      className="zoomOut"
                      style={{
                        backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1XZWJQXC9QcmltYXJ5LVNjaG9vbC53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwicG9zaXRpb24iOiJjZW50ZXIiLCJ3aWR0aCI6ODAwLCJoZWlnaHQiOm51bGx9LCJxdWFsaXR5Ijo4Mn19')`,
                        backgroundPosition: "50% 50%",
                      }}
                    ></div>
                  </div>
                  <div className="text-c">
                    <h3>Primary</h3>
                  </div>
                </a>
              </div>
              <div className="item-c slider-wrapper ">
                <a href="our-schools/secondary-school.html" target="">
                  <div className="img-c">
                    <div
                      className="zoomOut"
                      style={{
                        backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1XZWJQXC9CQklTLVNlY29uZGFyeS1TY2hvb2wud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoiY2VudGVyIiwid2lkdGgiOjgwMCwiaGVpZ2h0IjpudWxsfSwicXVhbGl0eSI6ODJ9fQ==')`,
                        backgroundPosition: "50% 50%",
                      }}
                    ></div>
                  </div>
                  <div className="text-c">
                    <h3>SECONDARY</h3>
                  </div>
                </a>
              </div>
              <div className="slider-progress">
                <div className="progress"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="background-text-wrap">
        <div className="content">
          <div className="img-c">
            <div
              className="zoomOut"
              style={{
                backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1TZWNvbmRhcnktU2Nob29sXC9CQklTX1NlY29uZGFyeV9TY2hvb2xfMzk0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoidG9wIiwid2lkdGgiOjI0MDAsImhlaWdodCI6bnVsbH0sInF1YWxpdHkiOjgyfX0=')`,
                backgroundPosition: "45.3% 15.96%",
              }}
            ></div>
          </div>
          <div className="text-c fadeInUp darkbg">
            <h2>Academic Excellence</h2>
            <p>
              Small class sizes, an engaging curriculum, an extensive
              extra-curricular programme and incredible teachers combine to help
              our students realise their full potential. The results speak for
              themselves.
            </p>
            <p>
              <a href="our-schools.html" target="" className="readmore">
                FIND OUT MORE
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="news-events-wrap">
        <div className="container fadeInUp">
          <div className="content">
            <div className="title-box has-text-centered">
              <p className="heading-tag">NEWS &amp; EVENTS</p>
              <h2>Latest at BBIS</h2>
            </div>
            <div className="columns is-variable is-2">
              <div className="column is-6-desktop is-6-tablet is-12-mobile">
                <div className="group news-wrapper">
                  <div className="item-c item1">
                    <div className="img-c">
                      <a href="news/bimp-2024.html">
                        <div
                          className="zoomOut"
                          style={{
                            backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9OZXdzLWltYWdlc1wvQklNUC0yMDIzLTE0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoiY2VudGVyIiwid2lkdGgiOjYwMCwiaGVpZ2h0IjpudWxsfSwicXVhbGl0eSI6ODJ9fQ==')`,
                            backgroundPosition: "50% 50%",
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className="text-c">
                      <a href="news/bimp-2024.html">
                        <div className="outer">
                          <div className="tag">News</div>
                          <h3>BIMP 2024</h3>
                          <p className="date">15 Dec 2023</p>
                        </div>
                      </a>
                      <p>
                        <a href="news/bimp-2024.html" className="readmore">
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="item-c item2">
                    <div className="img-c">
                      <a href="news/model-united-nations-at-bbis.html">
                        <div
                          className="zoomOut"
                          style={{
                            backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9OZXdzLWltYWdlc1wvTVVOLWF0LUJCSVMtMy5KUEciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo2MDAsImhlaWdodCI6bnVsbH0sInF1YWxpdHkiOjgyfX0=')`,
                            backgroundPosition: "50.17% 11.83%",
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className="text-c">
                      <a href="news/model-united-nations-at-bbis.html">
                        <div className="outer">
                          <div className="tag">News</div>
                          <h3>Model United Nations at BBIS</h3>
                          <p className="date">29 Nov 2023</p>
                        </div>
                      </a>
                      <p>
                        <a
                          href="news/model-united-nations-at-bbis.html"
                          className="readmore"
                        >
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="show-all-link">
                <a href="#" className="button">
                  Show More
                </a>
              </div>
              <div className="column is-6-desktop is-6-tablet is-12-mobile">
                <div className="group events-wrapper">
                  <div className="item-c item1">
                    <div className="img-c">
                      <a href="events/online-live-q-a-chat-early-education.html">
                        <div
                          className="zoomOut"
                          style={{
                            backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1FYXJseS1FZHVjYXRpb25cL0JCSVMtRWFybHktRWR1Y2F0aW9uMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImNlbnRlciIsIndpZHRoIjo2MDAsImhlaWdodCI6bnVsbH0sInF1YWxpdHkiOjgyfX0=')`,
                            backgroundPosition: "50% 50%",
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className="text-c">
                      <a href="events/online-live-q-a-chat-early-education.html">
                        <div className="outer">
                          <div className="tag">Event</div>
                          <h3>
                            Online live Q&amp;A chat: Early Education and
                            Admissions
                          </h3>
                          <p className="date">23 Jan 2024</p>
                        </div>
                      </a>
                      <p>
                        <a
                          href="events/online-live-q-a-chat-early-education.html"
                          className="readmore"
                        >
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="item-c item2">
                    <div className="img-c">
                      <a href="events/online-live-q-a-chat-primary-school.html">
                        <div
                          className="zoomOut"
                          style={{
                            backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1QcmltYXJ5LVNjaG9vbFwvQkJJU19QcmltYXJ5X1NjaG9vbF8yOTguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwicG9zaXRpb24iOiJjZW50ZXIiLCJ3aWR0aCI6NjAwLCJoZWlnaHQiOm51bGx9LCJxdWFsaXR5Ijo4Mn19')`,
                            backgroundPosition: "50% 50%",
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className="text-c">
                      <a href="events/online-live-q-a-chat-primary-school.html">
                        <div className="outer">
                          <div className="tag">Event</div>
                          <h3>
                            Online live Q&amp;A chat: Primary School and
                            Admissions
                          </h3>
                          <p className="date">23 Jan 2024</p>
                        </div>
                      </a>
                      <p>
                        <a
                          href="events/online-live-q-a-chat-primary-school.html"
                          className="readmore"
                        >
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="has-text-centered">
              <a href="news-events.html" className="readmore">
                View All
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="social-wrap" data-social="">
        <div className="container fadeInUp">
          <div className="content">
            <div className="left">
              <div className="text-c">
                <h2>Connect With Us</h2>
                <p>
                  Join our learning journey by finding BBIS on your favourite
                  social platforms.
                </p>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/BBISofficial"
                      target="_blank"
                      className="icon-facebook"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/bbis_official/"
                      target="_blank"
                      className="icon-instagram"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/BBISofficial"
                      target="_blank"
                      className="icon-twitter"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/bbis-berlin-brandenburg-international-school"
                      target="_blank"
                      className="icon-linkedin"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCJQxGRWSuVtLbK6cU_LAs4Q"
                      target="_blank"
                      className="icon-youtube"
                    ></a>
                  </li>
                </ul>
              </div>
              <div id="socialtemplate1" className="is-hidden">
                <div className="img-c">
                  <a className="social-link zoomOut wowo image-box">
                    <i className="social-icon"></i>
                  </a>
                </div>
              </div>
              <div id="socialtemplate2" className="is-hidden">
                <div className="right-socials">
                  <a className="social-link">
                    <div className="text-c">
                      <i className="social-icon"></i>
                      <p className="text-box"></p>
                    </div>
                    <div className="img-c">
                      <div className="zoomOut wowo image-box"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="middle">
              <div className="insta-posts"></div>
              <div className="fb-posts"></div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <div className="content">
          <div className="text-c fadeInUp">
            <p>
              To learn more about our school and life at BBIS, get in touch
              today.
            </p>
            <ul>
              <li className="active">
                <a href="javascript:void(0);">
                  <i className="icon-tel"></i>ENQUIRE
                </a>
              </li>
              <li className="">
                <a href="javascript:void(0);">
                  <i className="icon-location"></i>VISIT
                </a>
              </li>
              <li className="">
                <a href="javascript:void(0);">
                  <i className="icon-enrol bbis"></i>ENROL
                </a>
              </li>
            </ul>
          </div>
          <div className="right fadeInUp">
            <div className="item-c" style={{ display: "block" }}>
              <div className="img-c">
                <div
                  style={{
                    backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1FYXJseS1FZHVjYXRpb25cL0JCSVNfRWFybHlfRWR1Y2F0aW9uXzAxMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImNlbnRlciIsIndpZHRoIjoxMjAwLCJoZWlnaHQiOm51bGx9LCJxdWFsaXR5Ijo4Mn19')`,
                    backgroundPosition: "55.82% 45.79%",
                  }}
                  className="zoomOut"
                ></div>
              </div>
              <div className="text2 darkbg">
                <p>Speak to our Admissions Team. Call us now.</p>
                <p>
                  <a href="tel:+49 (0)33 203 80 36-0" target="">
                    <strong>+49 (0)33 203 80 36-0</strong>
                  </a>
                </p>
              </div>
            </div>
            <div className="item-c">
              <div className="img-c">
                <div
                  style={{
                    backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1BZXJpYWwtUGhvdG8uanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwicG9zaXRpb24iOiJjZW50ZXIiLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjpudWxsfSwicXVhbGl0eSI6ODJ9fQ==')`,
                    backgroundPosition: "50.85% 59.48%",
                  }}
                ></div>
              </div>
              <div className="text2 darkbg">
                <p>
                  The best way to discover if BBIS is right for you or your
                  child is to visit our 360,000 sqm campus, located in
                  Kleinmachnow, southwest of Berlin.
                </p>
                <p>
                  <a
                    href="admissions/application-process/book-a-tour.html"
                    target="_blank"
                  >
                    <strong>SCHEDULE A VISIT WITH OUR ADMISSIONS TEAM</strong>
                  </a>
                </p>
              </div>
            </div>
            <div className="item-c">
              <div className="img-c">
                <div
                  style={{
                    backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1TZWNvbmRhcnktU2Nob29sXC9CQklTLVNlY29uZGFyeV9TY2hvb2xfMTIwLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoiY2VudGVyIiwid2lkdGgiOjEyMDAsImhlaWdodCI6bnVsbH0sInF1YWxpdHkiOjgyfX0=')`,
                    backgroundPosition: "68.8% 30.87%",
                  }}
                ></div>
              </div>
              <div className="text2 darkbg">
                <p>Start your application.</p>
                <p>
                  <a href="https://bbis.openapply.com/" target="_blank">
                    <strong>ENROL NOW</strong>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    <Footer/>
    </>
  );
}

export default Home;
