import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";

const index = () => {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/C1_03557-scaled.jpg"
        link1="Our Schools"
        link2=""
      />

      <section className="intro-wrap">
        <div className="container">
          <div className="content">
            <div class="content has-text-centered">
              <h1>OUR SCHOOLS</h1>
              <p class="text-body">
                From the earliest years of education right through to graduation
                from secondary school, we support all students to be their best
                – with boarding options for students from further afield.
              </p>
            </div>
            <div className="group ">
              <div className="item-c">
                <a href="#" target="">
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
                </a>
              </div>
              <div className="item-c slider-wrapper ">
                <a href="#" target="">
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default index;
