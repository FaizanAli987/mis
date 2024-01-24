import React from 'react'
import Header from './../../components/main/Header';
import Footer from './../../components/main/Footer';
import SectionBanner from '../../components/main/SectionBanner';

const index = () => {
  return (
    <>
    <Header />
    <SectionBanner
      imglink="https://mariyaschools.com/wp-content/uploads/2020/03/2-4-scaled.jpg"
      link1="News & Events"
      link2=""
    />

    <section class="guide-wrap">
      <div class="container fadeInUp">
        <div class="columns is-centered">
          <div class="column is-10-desktop is-10-tablet is-12-mobile">
            <div class="content has-text-centered">
              <h1>NEWS & EVENTS
</h1>
              <p class="text-body">
           Latest at MIS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

 
    <section className="news-events-wrap" style={{background:"#fff"}}>
        <div className="container fadeInUp">
          <div className="content">
         
            <div className="columns is-variable is-2">
              <div className="column is-6-desktop is-6-tablet is-12-mobile">
                <div className="group news-wrapper">
                  <div className="item-c item1">
                    <div className="img-c">
                      <a href="#">
                        <div
                          className="zoomOut"
                          style={{
                            backgroundImage: `url('https://mariyaschools.com/wp-content/uploads/2020/03/6-6.jpg')`,
                            backgroundPosition: "50% 50%",
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className="text-c">
                      <a href="#">
                        <div className="outer">
                          <div className="tag">News</div>
                          <h3>Students of the month</h3>
                          <p className="date">15 Dec 2023</p>
                        </div>
                      </a>
                      <p>
                        <a href="#" className="readmore">
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="item-c item2">
                    <div className="img-c">
                      <a href="#">
                        <div
                          className="zoomOut"
                          style={{
                            backgroundImage: `url('https://mariyaschools.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-22-at-12.22.54-PM-1.jpeg')`,
                            backgroundPosition: "50.17% 11.83%",
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className="text-c">
                      <a href="#">
                        <div className="outer">
                          <div className="tag">News</div>
                          <h3>Saudi National Day</h3>
                          <p className="date">29 Nov 2023</p>
                        </div>
                      </a>
                      <p>
                        <a href="#" className="readmore">
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
                      <a href="#">
                        <div
                          className="zoomOut"
                          style={{
                            backgroundImage: `url('https://mariyaschools.com/wp-content/uploads/2020/03/2-4-scaled.jpg')`,
                            backgroundPosition: "50% 50%",
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className="text-c">
                      <a href="#">
                        <div className="outer">
                          <div className="tag">Event</div>
                          <h3>Bank of Prizes</h3>
                          <p className="date">23 Jan 2024</p>
                        </div>
                      </a>
                      <p>
                        <a
                          href="#"
                          className="readmore"
                        >
                          Read more
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="item-c item2">
                    <div className="img-c">
                      <a href="#">
                        <div
                          className="zoomOut"
                          style={{
                            backgroundImage: `url('https://mariyaschools.com/wp-content/uploads/2020/03/6-2.jpg')`,
                            backgroundPosition: "50% 50%",
                          }}
                        ></div>
                      </a>
                    </div>
                    <div className="text-c">
                      <a href="#">
                        <div className="outer">
                          <div className="tag">Event</div>
                          <h3>Student of The Month</h3>
                          <p className="date">23 Jan 2024</p>
                        </div>
                      </a>
                      <p>
                        <a
                          href="#"
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

         
          </div>
        </div>
      </section>


    <Footer />
  </>
  )
}

export default index
