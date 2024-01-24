import React from "react";
import Header from "../../../components/main/Header";
import Footer from "../../../components/main/Footer";
import SectionBanner from "../../../components/main/SectionBanner";

function index() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/C1_03557-scaled.jpg"
        link1="Primary School"
        link2=""
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>PRIMARY SCHOOL</h1>
                <p class="text-body">
                  Guiding your child to become more creative, curious and
                  caring.
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
                <h2>NURTURING LITTLE LEARNERS</h2>
                <p>
                  The MIS Primary School is a collaborative learning environment
                  in which children truly thrive. We believe in nurturing
                  optimism, kindness, playfulness and personal growth; and we
                  believe kids are capable of all these things, and more, from
                  an early age.
                  <br />
                </p>
                <p>
                  At MIS, kids enjoy access to bright, spacious classrooms with
                  the latest teaching and learning tools. Beyond the classroom,
                  we encourage plenty of time learning in the natural
                  environment, too. <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="quote-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-8-desktop is-10-tablet is-12-mobile">
              <div class="content">
                <div class="image-box">
                  <span
                    class="zoomOut"
                    style={{backgroundImage: `url(https://mariyaschools.com/wp-content/uploads/2023/09/C1_03217-scaled.jpg)`, backgroundPosition: "50% 50%"}}
                  ></span>
                </div>
                <div class="text-box fadeInUp">
                  <blockquote>
                    At MIS we believe that schools are about people and the
                    relationships between them, so the home/school partnership
                    is an integral part of our learning community. We work
                    together with families and provide a challenging,
                    stimulating, inclusive, and varied learning experience for
                    children to flourish.
                    <cite> MIS School Principal</cite>
                  </blockquote>
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

export default index;
