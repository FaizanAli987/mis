import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Home() {
  const [dailyVisitors, setDailyVisitors] = useState(0);
  const [monthlyVisitors, setMonthlyVisitors] = useState(0);
  const [yearlyVisitors, setYearlyVisitors] = useState(0);
  const url = "http://localhost:3000";
  const addDailyCount = async () => {
    try {
      const resp = await axios.post(`${url}/visitor-counter`);
      console.log(resp);

      localStorage.setItem(
        "lastApiCallDate",
        new Date().toISOString().split("T")[0]
      );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const lastApiCallDate = localStorage.getItem("lastApiCallDate");

    const currentDate = new Date().toISOString().split("T")[0];

    if (lastApiCallDate !== currentDate) {
      addDailyCount();
    }
  }, []);

  const getDailyVisitors = async (type, day) => {
    try {
      const resp = await axios.get(`${url}/visitor-count?${type}=${day}`);

      if (type === "day") {
        setDailyVisitors(resp.data.visitorByDay);
      }
      if (type === "month") {
        setMonthlyVisitors(resp.data.visitorByMonth);
      }
      if (type === "year") {
        setYearlyVisitors(resp.data.visitorByYear);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    getDailyVisitors("day", day);
    getDailyVisitors("month", month);
    getDailyVisitors("year", year);
  }, [dailyVisitors, monthlyVisitors, yearlyVisitors]);
  return (
    <>
      <Header />

      <section class="showcase">
        <video width="320" height="240" muted playsInline loop autoPlay>
          <source src="./mis.mp4" type="video/mp4" />
        </video>

        <div class="overlay"></div>
        <div class="text">
          <h2>Mariya International </h2>
          <h3>Schools</h3>
        </div>
      </section>

      <section className="home-guide">
        <div className="content w-100 fadeInUp">
          <div className="text-box darkbg">
            <h1>MIS IS A LEADING INTERNATIONAL DAY SCHOOL</h1>
            <p>
              Offering different programmes, we inspire a lifelong love of
              learning and actively develop global citizenship in a welcoming,
              supportive environment.
            </p>
          </div>
          <div className="right-box">
            <div className="item-c">
              <Link to="">
                {" "}
                <div className="inner">
                  {/* <div className="img">
                    <img
                      src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/images/student-teacher.svg?v=1614122601"
                      alt="Teacher : student"
                    />
                  </div> */}
                  <p className="num">{dailyVisitors}</p>
                  <p>Daily Visitors</p>
                </div>
              </Link>
            </div>
            <div className="item-c">
              <Link to="">
                {" "}
                <div className="inner">
                  {/* <div className="img">
                    <img
                      src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/images/Overview.svg?v=1614122450"
                      alt="IB Diploma Score"
                    />
                  </div> */}
                  <p className="num">{monthlyVisitors}</p>
                  <p>Monthly Visitors</p>
                </div>
              </Link>{" "}
            </div>
            <div className="item-c">
              <Link to="">
                {" "}
                <div className="inner">
                  {/* <div className="img">
                    <img
                      src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/images/Nationality.svg?v=1614122612"
                      alt="Nationalities"
                    />
                  </div> */}
                  <p className="num">{yearlyVisitors}</p>
                  <p>Yearly Visitors</p>
                </div>
              </Link>{" "}
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
            <div className="group ">
              <div className="item-c">
                <Link to="/our-schools/primary-school">
                  <div className="img-c">
                    <div
                      className="zoomOut"
                      style={{
                        backgroundImage: `url('https://images.pexels.com/photos/5905515/pexels-photo-5905515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                        backgroundPosition: "50% 50%",
                      }}
                    ></div>
                  </div>
                  <div className="text-c">
                    <h3>Primary</h3>
                  </div>
                </Link>
              </div>
              <div className="item-c slider-wrapper ">
                <Link to="/our-schools/secondary-school">
                  <div className="img-c">
                    <div
                      className="zoomOut"
                      style={{
                        backgroundImage: `url('https://images.pexels.com/photos/7978261/pexels-photo-7978261.jpeg?auto=compress&cs=tinysrgb&w=800')`,
                        backgroundPosition: "50% 50%",
                      }}
                    ></div>
                  </div>
                  <div className="text-c">
                    <h3>SECONDARY</h3>
                  </div>
                </Link>
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
                backgroundImage: `url('https://mariyaschools.com/wp-content/uploads/2023/09/C1_03768-scaled.jpg')`,
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
          </div>
        </div>
      </section>
      <section className="video-image-text intro-wrap">
        <div className="container fadeInUp">
          <div className="content">
            <div className="title-box has-text-centered fadeInUp">
              <h1>Our Values</h1>
              <p></p>
            </div>
            <div className="columns is-centered">
              <div className="column is-8-desktop is-10-tablet is-12-mobile">
                <div className="tile-box">
                  <div className="item">
                    <div class="image-box widescreen">
                      <span
                        class="img-holder"
                        style={{
                          backgroundImage: `url(https://images.pexels.com/photos/7666429/pexels-photo-7666429.jpeg?auto=compress&cs=tinysrgb&w=800)`,
                          backgroundPosition: "52.67% 66.71%",
                        }}
                      ></span>
                    </div>
                    <div class="text-box bg-white">
                      <h3>Mission</h3>
                      <div class="body-text show-read-more">
                        To provide a safe and supportive environment where
                        personal
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div class="image-box widescreen">
                      <span
                        class="img-holder"
                        style={{
                          backgroundImage: `url(https://images.pexels.com/photos/45072/pexels-photo-45072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
                          backgroundPosition: "52.67% 66.71%",
                        }}
                      ></span>
                    </div>
                    <div class="text-box bg-white">
                      <h3>Vision</h3>
                      <div class="body-text show-read-more">
                        We aspire to be an outstanding British Primary school
                        whose students are fully
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="gallery-wrap layout-panel">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-8-desktop is-10-tablet is-12-mobile">
              <div class="gallery-box content">
                <div className="title-box has-text-centered">
                  <h2 style={{ marginBottom: "40px" }}>Affiliations</h2>
                </div>

                <ul className="affiliation-ul">
                  <li class="">
                    <Link
                      style={{
                        backgroundImage: `url(https://mariyaschools.com/wp-content/uploads/2023/03/cambridge-logo.jpg`,
                        backgroundPosition: "50% 50%",
                      }}
                    ></Link>
                  </li>
                  <li class="">
                    <Link
                      style={{
                        backgroundImage: `url(https://mariyaschools.com/wp-content/uploads/2023/03/British-council-partner-school-logo.jpg)`,
                        backgroundPosition: "50% 50%",
                      }}
                    ></Link>
                  </li>
                  <li class="">
                    <Link
                      style={{
                        backgroundImage: `url(https://mariyaschools.com/wp-content/uploads/2023/03/ISO-logo.png)`,
                        backgroundPosition: "50% 50%",
                      }}
                    ></Link>
                  </li>
                  <li class="">
                    <Link
                      style={{
                        backgroundImage: `url(https://mariyaschools.com/wp-content/uploads/2020/02/1280px-MOELogo.svg_-300x153.png)`,
                        backgroundPosition: "50% 50%",
                      }}
                    ></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="news-events-wrap">
        <div className="container fadeInUp">
          <div className="content">
            <div className="title-box has-text-centered">
              <p className="heading-tag">NEWS &amp; EVENTS</p>
              <h2>Latest at MIS</h2>
            </div>
            <div className="columns is-variable is-2">
              <div className="column is-6-desktop is-6-tablet is-12-mobile">
                <div className="group news-wrapper">
                  <div className="item-c item1">
                    <div className="img-c">
                      <Link to="#">
                        <div
                          className="zoomOut"
                          style={{
                            backgroundImage: `url('https://mariyaschools.com/wp-content/uploads/2020/03/6-6.jpg')`,
                            backgroundPosition: "50% 50%",
                          }}
                        ></div>
                      </Link>
                    </div>
                    <div className="text-c">
                      <Link to="#">
                        <div className="outer">
                          <div className="tag">News</div>
                          <h3>Students of the month</h3>
                          <p className="date">15 Dec 2023</p>
                        </div>
                      </Link>
                      <p>
                        <Link to="/news-events" className="readmore">
                          Read more
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="item-c item2">
                    <div className="img-c">
                      <Link to="#">
                        <div
                          className="zoomOut"
                          style={{
                            backgroundImage: `url('https://mariyaschools.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-22-at-12.22.54-PM-1.jpeg')`,
                            backgroundPosition: "50.17% 11.83%",
                          }}
                        ></div>
                      </Link>
                    </div>
                    <div className="text-c">
                      <Link to="#">
                        <div className="outer">
                          <div className="tag">News</div>
                          <h3>Saudi National Day</h3>
                          <p className="date">29 Nov 2023</p>
                        </div>
                      </Link>
                      <p>
                        <Link to="/news-events" className="readmore">
                          Read more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="show-all-link">
                <Link to="#" className="button">
                  Show More
                </Link>
              </div>
              <div className="column is-6-desktop is-6-tablet is-12-mobile">
                <div className="group events-wrapper">
                  <div className="item-c item1">
                    <div className="img-c">
                      <Link to="#">
                        <div
                          className="zoomOut"
                          style={{
                            backgroundImage: `url('https://mariyaschools.com/wp-content/uploads/2020/03/2-4-scaled.jpg')`,
                            backgroundPosition: "50% 50%",
                          }}
                        ></div>
                      </Link>
                    </div>
                    <div className="text-c">
                      <Link to="#">
                        <div className="outer">
                          <div className="tag">Event</div>
                          <h3>Bank of Prizes</h3>
                          <p className="date">23 Jan 2024</p>
                        </div>
                      </Link>
                      <p>
                        <Link to="/news-events" className="readmore">
                          Read more
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="item-c item2">
                    <div className="img-c">
                      <Link to="#">
                        <div
                          className="zoomOut"
                          style={{
                            backgroundImage: `url('https://mariyaschools.com/wp-content/uploads/2020/03/6-2.jpg')`,
                            backgroundPosition: "50% 50%",
                          }}
                        ></div>
                      </Link>
                    </div>
                    <div className="text-c">
                      <Link to="#">
                        <div className="outer">
                          <div className="tag">Event</div>
                          <h3>Student of The Month</h3>
                          <p className="date">23 Jan 2024</p>
                        </div>
                      </Link>
                      <p>
                        <Link to="/news-events" className="readmore">
                          Read more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="has-text-centered">
              <Link to="/news-events" className="readmore">
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="call-to-action">
        <div className="content">
          <div className="text-c fadeInUp">
            <p>
              To learn more about our school and life at MIS, get in touch
              today.
            </p>
            <ul>
              <li className="active">
                <Link to="javascript:void(0);">
                  <i className="icon-tel"></i>ENQUIRE
                </Link>
              </li>
              <li className="">
                <Link to="javascript:void(0);">
                  <i className="icon-location"></i>VISIT
                </Link>
              </li>
              <li className="">
                <Link to="javascript:void(0);">
                  <i className="icon-enrol bbis"></i>ENROL
                </Link>
              </li>
            </ul>
          </div>
          <div className="right fadeInUp">
            <div className="item-c" style={{ display: "block" }}>
              <div className="img-c">
                <div
                  style={{
                    backgroundImage: `url('https://mariyaschools.com/wp-content/uploads/2023/09/C1_03584-scaled.jpg')`,
                    backgroundPosition: "55.82% 45.79%",
                  }}
                  className="zoomOut"
                ></div>
              </div>
              <div className="text2 darkbg">
                <p>Speak to our Admissions Team. Call us now.</p>
                <p>
                  <Link to="tel:+966567334791">
                    <strong>+966567334791</strong>
                  </Link>
                </p>
              </div>
            </div>
            <div className="item-c">
              <div className="img-c">
                <div
                  style={{
                    backgroundImage: `url('https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6985-scaled.jpg')`,
                    backgroundPosition: "50.85% 59.48%",
                  }}
                ></div>
              </div>
              <div className="text2 darkbg">
                <p>
                  The best way to discover if MIS is right for you or your child
                  is to visit our 360,000 sqm campus, located in Kleinmachnow,
                  southwest of Berlin.
                </p>
                <p>
                  <Link to="#" target="_blank">
                    <strong>SCHEDULE A VISIT WITH OUR ADMISSIONS TEAM</strong>
                  </Link>
                </p>
              </div>
            </div>
            <div className="item-c">
              <div className="img-c">
                <div
                  style={{
                    backgroundImage: `url('https://mariyaschools.com/wp-content/uploads/2023/09/C1_03217-scaled.jpg')`,
                    backgroundPosition: "68.8% 30.87%",
                  }}
                ></div>
              </div>
              <div className="text2 darkbg">
                <p>Start your application.</p>
                <p>
                  <Link to="#" target="_blank">
                    <strong>ENROL NOW</strong>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
