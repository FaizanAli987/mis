import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";

const AppProcess = () => {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_7062-scaled.jpg"
        link1="Admissions"
        link2="Application Process"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>HOW TO APPLY</h1>
                <p class="text-body">
                  MIS uses an online application system for all enrolments.
                  We’re here to help at any stage.
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
                  STARTING YOUR APPLICATION
                  <br />
                </h2>
                <p>
                  Families can start an application to BBIS at any time by
                  following the link below. You can also apply here for our
                  Boarding School.
                  <br />
                </p>
                <h2>
                  THINGS TO NOTE
                  <br />
                </h2>
                <p>
                  Please submit all the required documentation.
                  <br />
                  A non-refundable application fee is due when you apply. The
                  fee for each submitted school application is 100 SAR and an
                  additional 100 SAR for boarding.
                  <br />
                  Completed applications are processed by the admissions team
                  and applicants will be updated on their application status via
                  the online application portal.
                  <br />
                  Students may be tested and screened depending on age and
                  language proficiency. This may include testing in Maths,
                  Arabic and English (to assess the requirements for EAL
                  support).
                </p>

                <h2>
                  WHAT HAPPENS NEXT?
                  <br />
                </h2>
                <p>
                  If your application is successful, we’ll send you a letter of
                  acceptance, a school contract, a registration fee invoice and,
                  if applicable, a boarding contract. To confirm your child’s
                  place, please sign these contracts and pay the registration
                  fee within three weeks of receipt.
                  <br />
                  Following your child’s acceptance, we encourage you to make an
                  appointment and visit the campus before enrollment to discuss
                  the student's transfer and the programme offered.
                  <br />
                  If your application is unsuccessful, we will let you know.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AppProcess;
