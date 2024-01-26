import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";
function HealthServices() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
        link1="Student Support"
        link2="Health Services"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>HEALTH SERVICES</h1>
                <p className="text-body">
                  From cuts and bruises to long-term conditions, our caring
                  nurses are here to help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="editor-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-8-desktop is-10-tablet is-12-mobile">
              <div class="content">
                <p>
                  MIS is one of the few schools in Berlin to have its own nurse
                  on site – giving parents peace of mind that children are cared
                  for in everyday and emergency situations. Our students can
                  visit the nurse at any time, whether for an in-the-moment
                  consultation or for help in managing a long-term health
                  condition.
                  <br />
                  As well as providing compassionate care to our kids, our
                  school nurse has also played a key role in overseeing our
                  school wide allergy-friendly environment. She is an invaluable
                  member of our school community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HealthServices;
