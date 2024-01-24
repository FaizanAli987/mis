import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";

function OurMission() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6985-scaled.jpg"
        link1="About Us"
        link2="Our Mission"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>MIS Aims</h1>
                <p>
                To prepare the learners for life and lifelong learning


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
                <h2>Aims</h2>
                <p>
                  Educate our students to become the brightest young children in
                  the Eastern province of Saudi Arabia, regardless of their
                  social, cultural, religious and financial background. <br />
                  Educate our students and equip them to have the courage to use
                  the understanding they gain from this. <br />
                  Teach them to think for themselves and to develop a life-long
                  love of learning. Lessons are taught by academic specialists
                  with a passion for their subject, and teaching goes well
                  beyond the narrow confines of examination syllabuses, offering
                  our pupils the best preparation for the very top universities,
                  both in this country and abroad. <br />
                  Know every student and create an environment in which every
                  student feels valued as an individual, and is challenged to
                  fulfil his/her potential, whatever their talents and
                  attributes. <br />
                  Produce well-rounded young students who have a true sense of
                  service to their communities. Alongside this, the School
                  itself seeks to promote co-operation with the wider community
                  and in particular to build partnerships with local schools.{" "}
                  <br />
                  Maintain a vibrant and diverse programme of co-curricular
                  activities which plays a key role in the School, enabling all
                  students to explore and develop new interests, challenge
                  themselves and take responsibility, develop teamwork and
                  leadership skills, make friends and have fun. <br />
                  Ensure that the school is in line with the current Saudi 2030
                  Vision on cultivating this generation of learners to enable
                  them to be able to compete at an international level , shaping
                  higher education to keep the growing children in pace with
                  scientific engineering and technical innovation. <br />
                  Saudi Arabia 2030 Vision on Education Reform.
                  <br />
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

export default OurMission;
