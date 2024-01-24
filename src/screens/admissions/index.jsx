import React from "react";
import Header from "./../../components/main/Header";
import Footer from "./../../components/main/Footer";
import SectionBanner from "./../../components/main/SectionBanner";

function index() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/C1_03584-scaled.jpg"
        link1="Admission"
        link2=""
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>ADMISSIONS</h1>
                <p class="text-body">
                  MIS welcomes students of all nationalities, cultures, creeds
                  and abilities. Our friendly Admissions Team is here to answer
                  any questions you may have about studying with us.
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
                <h2>
                  BOOK A TOUR OF OUR SCHOOL
                  <br />
                </h2>
                <p>
                  A great first step – if you live close enough to the campus –
                  is to come on a guided, private tour of our campus. This tour
                  gives you a first-hand opportunity to get to know MIS, our
                  students and our exceptional facilities.
                  <br />
                </p>
                <h2>
                HOW TO APPLY

                  <br />
                </h2>
                <p>
                If you are interested in attending MIS, please contact our Admissions Team. Then, when you’re ready to apply, you can do so online. We’re here to help at every stage of the process.

We consider applications throughout the school year based on space availability
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

export default index;
