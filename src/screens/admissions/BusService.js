import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";

function BusService() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
        link1="Admissions"
        link2="Bus Service"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>BUS SERVICE</h1>
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
                  On our school buses, students enjoy a comfortable, safe
                  journey.
                  <br />
                  The MIS bus service is offered through our transport partner,
                  Bus Service Name. They have an office on our school campus –
                  we encourage families to reach out to them directly to discuss
                  schedules, bus routes, terms and conditions (they are open
                  from 8am to 4pm, Monday to Friday).
                  <br />
                  A seat in a large school bus costs from 1,500 Riyal incl. 7%
                  VAT in the school year 2023/2024. Individual offers can be
                  made upon request.
                  <br />
                  Other services are also available for business and private
                  travel needs.
                  <br />
                  Name Here
                  <br />
                  General Manager
                  <br />
                  +966567334791
                  <br />
                  info@mariyaschools.com
                  <br />
                  <br />
                </p>
                <img src="https://static.srpcdigital.com/styles/1037xauto/public/2023/02/03/thumbnail_vehicle.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default BusService;
