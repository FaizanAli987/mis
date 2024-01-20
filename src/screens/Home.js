import React from "react";
import logo from "../logo.svg";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";

function Home() {
  return (
    <>
    <Header/>
    

      <section class="global-banners home-banners">
        <div class="container is-fluid">
          <div class="banners video-carousel">
            <div class="banner">
              <div class="image-box">
                <div class="image">
                  <span
                    class="zoomOut"
                    style={{
                      backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1DYW1wdXMtYWVyaWFsLXZpZXcuSlBHIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwicG9zaXRpb24iOiJjZW50ZXIiLCJ3aWR0aCI6MjQwMCwiaGVpZ2h0IjpudWxsfSwicXVhbGl0eSI6ODJ9fQ==')`,
                      backgroundPosition: "50% 50%",
                    }}
                  ></span>
                </div>
              </div>
              <div class="floating-controls">
                <i class="control-pause fa fa-pause"></i>
                <i class="control-vol fa fa-volume-off"></i>
              </div>
              <div class="video-holder">
                <div class="video-sizer"></div>
                <div
                  class="video-player container-size"
                  data-index="1"
                  data-settings='{"poster":"https:\/\/images-eu.digistormhosting.com.au\/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1DYW1wdXMtYWVyaWFsLXZpZXcuSlBHIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwicG9zaXRpb24iOiJjZW50ZXIiLCJ3aWR0aCI6MjQwMCwiaGVpZ2h0IjpudWxsfSwicXVhbGl0eSI6ODJ9fQ==","controls":[],"autoplay":false,"muted":true,"volume":0,"clickToPlay":true,"fullscreen":{"enabled":false},"loop":{"active":true}}'
                >
                  <video
                    poster="https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1DYW1wdXMtYWVyaWFsLXZpZXcuSlBHIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwicG9zaXRpb24iOiJjZW50ZXIiLCJ3aWR0aCI6MjQwMCwiaGVpZ2h0IjpudWxsfSwicXVhbGl0eSI6ODJ9fQ=="
                    class="player"
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

      <section class="home-guide">
        <div class="content fadeInUp">
          <div class="text-box darkbg">
            <h1>MIS IS A LEADING INTERNATIONAL DAY SCHOOL</h1>
            <p>
              Offering different programmes, we inspire a lifelong love of
              learning and actively develop global citizenship in a welcoming,
              supportive environment.
            </p>
            <div class="word-button-block">
              <div class="button-block">
                <p>
                  <a href="about-us.html" target="" class="readmore">
                    FIND OUT MORE
                  </a>
                </p>
              </div>
              <div class="word-block word-block-allWords"></div>
            </div>
          </div>
          <div class="right-box">
            <div class="item-c">
              <a href="our-schools.html" target="">
                {" "}
                <div class="inner">
                  <div class="img">
                    <img
                      src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/images/student-teacher.svg?v=1614122601"
                      alt="Teacher : student"
                    />
                  </div>
                  <p class="num">1:7</p>
                  <p>Teacher : student</p>
                </div>
              </a>{" "}
            </div>
            <div class="item-c">
              <a
                href="our-schools/secondary-school/ib-diploma-programme.html"
                target=""
              >
                {" "}
                <div class="inner">
                  <div class="img">
                    <img
                      src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/images/Overview.svg?v=1614122450"
                      alt="IB Diploma Score"
                    />
                  </div>
                  <p class="num">34</p>
                  <p>IB Diploma Score</p>
                </div>
              </a>{" "}
            </div>
            <div class="item-c">
              <a href="about-us.html" target="">
                {" "}
                <div class="inner">
                  <div class="img">
                    <img
                      src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/images/Nationality.svg?v=1614122612"
                      alt="Nationalities"
                    />
                  </div>
                  <p class="num">70+</p>
                  <p>Nationalities</p>
                </div>
              </a>{" "}
            </div>
            <div class="item-c">
              <a href="about-us/our-campus.html" target="">
                {" "}
                <div class="inner">
                  <div class="img">
                    <img
                      src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/images/learning-bbis_2021-02-23-232433.svg?v=1614122673"
                      alt="Learning space"
                    />
                  </div>
                  <p class="num">7,668m²</p>
                  <p>Learning space</p>
                </div>
              </a>{" "}
            </div>
          </div>
        </div>
      </section>

      <section class="intro-wrap">
        <div class="container">
          <div class="content">
            <div class="title-box has-text-centered fadeInUp">
              <h1>Our Schools</h1>
              <p>
                From the earliest years of education right through to from
                secondary school, MIS students are given every opportunity to
                thrive.
              </p>
            </div>
            <div class="group group-slick">
              <div class="item-c slider-wrapper ">
                <a href="our-schools/primary-school.html" target="">
                  <div class="img-c">
                    <div
                      className="zoomOut"
                      style={{
                        backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1XZWJQXC9QcmltYXJ5LVNjaG9vbC53ZWJwIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwicG9zaXRpb24iOiJjZW50ZXIiLCJ3aWR0aCI6ODAwLCJoZWlnaHQiOm51bGx9LCJxdWFsaXR5Ijo4Mn19')`,
                        backgroundPosition: "50% 50%",
                      }}
                    ></div>
                  </div>
                  <div class="text-c">
                    <h3>Primary</h3>
                  </div>
                </a>
              </div>
              <div class="item-c slider-wrapper ">
                <a href="our-schools/secondary-school.html" target="">
                  <div class="img-c">
                    <div
                      className="zoomOut"
                      style={{
                        backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1XZWJQXC9CQklTLVNlY29uZGFyeS1TY2hvb2wud2VicCIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoiY2VudGVyIiwid2lkdGgiOjgwMCwiaGVpZ2h0IjpudWxsfSwicXVhbGl0eSI6ODJ9fQ==')`,
                        backgroundPosition: "50% 50%",
                      }}
                    ></div>
                  </div>
                  <div class="text-c">
                    <h3>SECONDARY</h3>
                  </div>
                </a>
              </div>
              <div class="slider-progress">
                <div class="progress"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="background-text-wrap">
        <div class="content">
          <div class="img-c">
            <div
              className="zoomOut"
              style={{
                backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1TZWNvbmRhcnktU2Nob29sXC9CQklTX1NlY29uZGFyeV9TY2hvb2xfMzk0LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoidG9wIiwid2lkdGgiOjI0MDAsImhlaWdodCI6bnVsbH0sInF1YWxpdHkiOjgyfX0=')`,
                backgroundPosition: "45.3% 15.96%",
              }}
            ></div>
          </div>
          <div class="text-c fadeInUp darkbg">
            <h2>Academic Excellence</h2>
            <p>
              Small class sizes, an engaging curriculum, an extensive
              extra-curricular programme and incredible teachers combine to help
              our students realise their full potential. The results speak for
              themselves.
            </p>
            <p>
              <a href="our-schools.html" target="" class="readmore">
                FIND OUT MORE
              </a>
            </p>
          </div>
        </div>
      </section>

      <section class="news-events-wrap">
        <div class="container fadeInUp">
          <div class="content">
            <div class="title-box has-text-centered">
              <p class="heading-tag">NEWS &amp; EVENTS</p>
              <h2>Latest at BBIS</h2>
            </div>
            <div class="columns is-variable is-2">
              <div class="column is-6-desktop is-6-tablet is-12-mobile">
                <div class="group news-wrapper">
                  <div class="item-c item1">
                    <div class="img-c">
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
                    <div class="text-c">
                      <a href="news/bimp-2024.html">
                        <div class="outer">
                          <div class="tag">News</div>
                          <h3>BIMP 2024</h3>
                          <p class="date">15 Dec 2023</p>
                        </div>
                      </a>
                      <p>
                        <a href="news/bimp-2024.html" class="readmore">
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="item-c item2">
                    <div class="img-c">
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
                    <div class="text-c">
                      <a href="news/model-united-nations-at-bbis.html">
                        <div class="outer">
                          <div class="tag">News</div>
                          <h3>Model United Nations at BBIS</h3>
                          <p class="date">29 Nov 2023</p>
                        </div>
                      </a>
                      <p>
                        <a
                          href="news/model-united-nations-at-bbis.html"
                          class="readmore"
                        >
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="show-all-link">
                <a href="#" class="button">
                  Show More
                </a>
              </div>
              <div class="column is-6-desktop is-6-tablet is-12-mobile">
                <div class="group events-wrapper">
                  <div class="item-c item1">
                    <div class="img-c">
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
                    <div class="text-c">
                      <a href="events/online-live-q-a-chat-early-education.html">
                        <div class="outer">
                          <div class="tag">Event</div>
                          <h3>
                            Online live Q&amp;A chat: Early Education and
                            Admissions
                          </h3>
                          <p class="date">23 Jan 2024</p>
                        </div>
                      </a>
                      <p>
                        <a
                          href="events/online-live-q-a-chat-early-education.html"
                          class="readmore"
                        >
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="item-c item2">
                    <div class="img-c">
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
                    <div class="text-c">
                      <a href="events/online-live-q-a-chat-primary-school.html">
                        <div class="outer">
                          <div class="tag">Event</div>
                          <h3>
                            Online live Q&amp;A chat: Primary School and
                            Admissions
                          </h3>
                          <p class="date">23 Jan 2024</p>
                        </div>
                      </a>
                      <p>
                        <a
                          href="events/online-live-q-a-chat-primary-school.html"
                          class="readmore"
                        >
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="has-text-centered">
              <a href="news-events.html" class="readmore">
                View All
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="social-wrap" data-social="">
        <div class="container fadeInUp">
          <div class="content">
            <div class="left">
              <div class="text-c">
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
                      class="icon-facebook"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/bbis_official/"
                      target="_blank"
                      class="icon-instagram"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/BBISofficial"
                      target="_blank"
                      class="icon-twitter"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/bbis-berlin-brandenburg-international-school"
                      target="_blank"
                      class="icon-linkedin"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCJQxGRWSuVtLbK6cU_LAs4Q"
                      target="_blank"
                      class="icon-youtube"
                    ></a>
                  </li>
                </ul>
              </div>
              <div id="socialtemplate1" class="is-hidden">
                <div class="img-c">
                  <a class="social-link zoomOut wowo image-box">
                    <i class="social-icon"></i>
                  </a>
                </div>
              </div>
              <div id="socialtemplate2" class="is-hidden">
                <div class="right-socials">
                  <a class="social-link">
                    <div class="text-c">
                      <i class="social-icon"></i>
                      <p class="text-box"></p>
                    </div>
                    <div class="img-c">
                      <div class="zoomOut wowo image-box"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="middle">
              <div class="insta-posts"></div>
              <div class="fb-posts"></div>
            </div>
            <div class="right"></div>
          </div>
        </div>
      </div>

      <div class="call-to-action">
        <div class="content">
          <div class="text-c fadeInUp">
            <p>
              To learn more about our school and life at BBIS, get in touch
              today.
            </p>
            <ul>
              <li class="active">
                <a href="javascript:void(0);">
                  <i class="icon-tel"></i>ENQUIRE
                </a>
              </li>
              <li class="">
                <a href="javascript:void(0);">
                  <i class="icon-location"></i>VISIT
                </a>
              </li>
              <li class="">
                <a href="javascript:void(0);">
                  <i class="icon-enrol bbis"></i>ENROL
                </a>
              </li>
            </ul>
          </div>
          <div class="right fadeInUp">
            <div class="item-c" style={{ display: "block" }}>
              <div class="img-c">
                <div
                  style={{
                    backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1FYXJseS1FZHVjYXRpb25cL0JCSVNfRWFybHlfRWR1Y2F0aW9uXzAxMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImNlbnRlciIsIndpZHRoIjoxMjAwLCJoZWlnaHQiOm51bGx9LCJxdWFsaXR5Ijo4Mn19')`,
                    backgroundPosition: "55.82% 45.79%",
                  }}
                  class="zoomOut"
                ></div>
              </div>
              <div class="text2 darkbg">
                <p>Speak to our Admissions Team. Call us now.</p>
                <p>
                  <a href="tel:+49 (0)33 203 80 36-0" target="">
                    <strong>+49 (0)33 203 80 36-0</strong>
                  </a>
                </p>
              </div>
            </div>
            <div class="item-c">
              <div class="img-c">
                <div
                  style={{
                    backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1BZXJpYWwtUGhvdG8uanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwicG9zaXRpb24iOiJjZW50ZXIiLCJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjpudWxsfSwicXVhbGl0eSI6ODJ9fQ==')`,
                    backgroundPosition: "50.85% 59.48%",
                  }}
                ></div>
              </div>
              <div class="text2 darkbg">
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
            <div class="item-c">
              <div class="img-c">
                <div
                  style={{
                    backgroundImage: `url('https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1TZWNvbmRhcnktU2Nob29sXC9CQklTLVNlY29uZGFyeV9TY2hvb2xfMTIwLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoiY2VudGVyIiwid2lkdGgiOjEyMDAsImhlaWdodCI6bnVsbH0sInF1YWxpdHkiOjgyfX0=')`,
                    backgroundPosition: "68.8% 30.87%",
                  }}
                ></div>
              </div>
              <div class="text2 darkbg">
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
