import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";

function MandBoard() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/C1_03680-scaled.jpg"
        link1="About Us"
        link2="Management & Board"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>MANAGEMENT & BOARD</h1>
                <p class="text-body">
                  The leadership team at MIS is committed to upholding the
                  school’s values – we strive to be pioneering, caring,
                  reflective and excellent.
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
                <h2>MEET OUR TEAM</h2>
                <p dir="ltr">
                  Our leadership team is comprised of a Supervisory Board
                  (elected according to our by-laws) made up of business,
                  community and education leaders, parents, and two managing
                  directors. The school’s Director and CEO is responsible for
                  leading and ensuring the continuing high quality of our
                  educational programmes; while our Business Director and CFO is
                  responsible for administrative and financial management.{" "}
                </p>
                <p dir="ltr">
                  The principals of the Primary and Secondary Schools, as well
                  as the heads of Student Support Services and Boarding, round
                  out our management team. Meet them all below. <br />
                </p>
                <h3>Management Team</h3>
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
                      <a href="javascript:void(0)">Director/CEO</a>
                    </h5>
                    <div class="item-content">
                      <div class="text-box">
                        <p dir="ltr">
                          Mark Hardeman joined the MIS community as Director in
                          August 2023. With over 20 years of experience in
                          international education, Mark has previously worked in
                          Kuwait, Abu Dhabi and Beijing, and Dar es Salaam. He
                          is a strong advocate for personalising education and
                          believes that all students should have opportunities
                          to explore and develop their passion for learning.
                          Mark's educational credentials include a Doctorate of
                          Educational Leadership from Lehigh University. In
                          addition, Mark holds a Masters of Educational
                          Leadership degree from the University of Wollongong,
                          Australia and Bachelor of Arts and Education degrees
                          from the University of Windsor, Canada.
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

 

      <section class="table-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-8-desktop is-10-tablet is-12-mobile">
              <div class="content">
                <div class="table-wrapper">
                  <table class="table is-fullwidth">
                    <thead>
                      <tr>
                        <th align="left" width="250">
                          Supervisory Board
                        </th>
                        <th align="left" width=""></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Supervisory Board" align="left">
                          <div class="cell-content">
                            Dr. Frank H. Walter-von Gierke (Chair)
                          </div>
                        </td>
                        <td data-label="" align="left">
                          <div class="cell-content">
                            Attorney-at-Law from Germany (Potsdam), three
                            children at the school 1996-2016, board member since
                            2001.
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Supervisory Board" align="left">
                          <div class="cell-content">Markus Beran</div>
                        </td>
                        <td data-label="" align="left">
                          <div class="cell-content">
                            Banker from Germany, two children at the school,
                            board member since 2013.
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Supervisory Board" align="left">
                          <div class="cell-content">Dr. Martin Hintze</div>
                        </td>
                        <td data-label="" align="left">
                          <div class="cell-content">
                            Entrepreneur from Germany, two children at the
                            school, board member since 2021.
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Supervisory Board" align="left">
                          <div class="cell-content">
                            Prof. Dr. Daniel Koerfer
                          </div>
                        </td>
                        <td data-label="" align="left">
                          <div class="cell-content">
                            Historian from Switzerland, teaching at the FU
                            Berlin, two children at the school 1996-2009, board
                            member since 2015.
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td data-label="Supervisory Board" align="left">
                          <div class="cell-content">Ira Philip</div>
                        </td>
                        <td data-label="" align="left">
                          <div class="cell-content">
                            Business consultant and financial analyst, two
                            children at the school, board member since 2023.
                          </div>
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

export default MandBoard;
