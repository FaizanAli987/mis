import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";
function SchoolFees() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
        link1="Admissions"
        link2="School Fees"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>School Fees</h1>
                <p className="text-body">
                  Our annual school fees and additional fees are set out below.
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
                <h3>ANNUAL SCHOOL FEES 2023-24 (IN RIYALS)</h3>
                <p>
                  Families may apply for a school fee and registration fee
                  adjustment based on their positive gross family household
                  income through our School Fees Reduction Programme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="table-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-8-desktop is-10-tablet is-12-mobile">
              <div class="content">
                <div class="table-wrapper">
                  <table class="table is-fullwidth">
                    <thead>
                      <tr>
                        <th align="left" width="">
                          Early Education
                        </th>
                        <th align="left" width=""></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Early Education" align="left">
                          <div class="cell-content">3 to 4 Years</div>
                        </td>
                        <td data-label="" align="left">
                          <div class="cell-content">13,500</div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Early Education" align="left">
                          <div class="cell-content">5 Years*</div>
                        </td>
                        <td data-label="" align="left">
                          <div class="cell-content">14,200</div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Early Education" align="left">
                          <div class="cell-content">
                            One-time registration fee
                          </div>
                        </td>
                        <td data-label="" align="left">
                          <div class="cell-content">7,500</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

export default SchoolFees;
