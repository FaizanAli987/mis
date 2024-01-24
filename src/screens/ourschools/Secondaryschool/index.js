import React from "react";
import Header from "../../../components/main/Header";
import Footer from "../../../components/main/Footer";
import SectionBanner from "../../../components/main/SectionBanner";

function index() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/C1_03584-scaled.jpg"
        link1="Secondary School"
        link2=""
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>SECONDARY SCHOOL
</h1>
                <p class="text-body">
                  Supporting every student to realise their potential and become
                  responsible global citizens.
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
                <h2>NURTURING ELDER LEARNERS</h2>
                <p>
                Our secondary students are given every opportunity to find the things they love, and learn how to do them well. We balance academia with a wide range of extra-curricular activities and community service, to help our students mature into responsible, compassionate global citizens who will make a positive contribution within the community for years to come.


                  <br />
                </p>
                <p>
                Our small class sizes – usually with less than 18 students – allow teachers to get to know each and every student, which means they can then address their individual needs. We provide extra support for those with special learning needs and those for whom English is not a first language.

<br />
                </p>
                <p>
                As a learning community, we place great value on interaction and cooperation between staff, students, parents, administration and the wider community.


<br />
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
                    style={{
                      backgroundImage: `url(https://mariyaschools.com/wp-content/uploads/2023/09/IMG_7089-scaled.jpg)`,
                      backgroundPosition: "50% 50%",
                    }}
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
