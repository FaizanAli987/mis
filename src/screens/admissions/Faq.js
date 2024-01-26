import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";
function Faq() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
        link1="Admissions"
        link2="FAQS"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>FAQS</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="accordion-wrap layout-panel">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-8-desktop is-10-tablet is-12-mobile">
              <div class="content">
                <div class="accordion">
                  <div class="item">
                    <h5 class="item-title">
                      <a href="javascript:void(0)">Question 1</a>
                    </h5>
                    <div class="item-content">
                      <div class="text-box">
                        <p dir="ltr">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laboriosam reprehenderit distinctio modi quos
                          quod voluptatum soluta officiis, mollitia ratione
                          laudantium!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <h5 class="item-title">
                      <a href="javascript:void(0)">Question 2</a>
                    </h5>
                    <div class="item-content">
                      <div class="text-box">
                        <p dir="ltr">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laboriosam reprehenderit distinctio modi quos
                          quod voluptatum soluta officiis, mollitia ratione
                          laudantium!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <h5 class="item-title">
                      <a href="javascript:void(0)">Question 3</a>
                    </h5>
                    <div class="item-content">
                      <div class="text-box">
                        <p dir="ltr">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laboriosam reprehenderit distinctio modi quos
                          quod voluptatum soluta officiis, mollitia ratione
                          laudantium!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <h5 class="item-title">
                      <a href="javascript:void(0)">Question 4</a>
                    </h5>
                    <div class="item-content">
                      <div class="text-box">
                        <p dir="ltr">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laboriosam reprehenderit distinctio modi quos
                          quod voluptatum soluta officiis, mollitia ratione
                          laudantium!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <h5 class="item-title">
                      <a href="javascript:void(0)">Question 5</a>
                    </h5>
                    <div class="item-content">
                      <div class="text-box">
                        <p dir="ltr">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Laboriosam reprehenderit distinctio modi quos
                          quod voluptatum soluta officiis, mollitia ratione
                          laudantium!
                        </p>
                      </div>
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
  );
}

export default Faq;
