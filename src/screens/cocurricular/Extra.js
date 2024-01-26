import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";
function Extra() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
        link1="Admissions"
        link2="EXTRA-CURRICULAR ACTIVITIES"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>EXTRA-CURRICULAR ACTIVITIES</h1>
                <p className="text-body">
                  From sports to STEM, arts to academics, MIS provides many
                  opportunities for students to extend themselves.
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
                <h2>OUR ECA PROGRAMME</h2>
                <p>
                  Through the ECA programme, our students meet new friends,
                  learn how to be risk-takers, and share and learn new passions
                  – all while having fun along the way! It’s a great way to
                  learn new skills and fully become part of our international
                  school community.
                  <br />
                  With a diverse range of activities on offer, the ECA programme
                  aims to further open the minds and eyes of our students, to
                  give them new challenges to look forward to. The activities
                  change every year. Some examples of recent options include:
                  <br />
                  Primary School:
                  <br />
                  Chess Club
                  <br />
                  Pottery and Sculpting
                  <br />
                  Dance
                  <br />
                  First LEGO League
                  <br />
                  Multi Sports
                  <br />
                  Robotics
                  <br />
                  Karate
                  <br />
                  Minecraft
                  <br />
                  Kids Yoga
                  <br />
                  Lacrosse
                  <br />
                  Instrumental Programme
                  <br />
                  Secondary School:
                  <br />
                  Duke of Edinburgh's International Award
                  <br />
                  Pathways to Academic Success
                  <br />
                  Creative Writing Club
                  <br />
                  Model United Nationsv Varsity Debating Society
                  <br />
                  United World Schools Club
                  <br />
                  Role Playing Games Club
                  <br />
                  E-Skills
                  <br />
                  Gardening
                  <br />
                  Drama Club
                  <br />
                  Math Club
                  <br />
                  Guitar Orchestra
                  <br />
                  Music Soiree
                  <br />
                  Gender and Sexuality Alliance
                  <br />
                  Badminton
                  <br />
                  Volleyball
                  <br />
                  Football
                  <br />
                  Basketball
                  <br />
                  Instrumental Programme
                  <br />
                  And many, many more.
                  <br />
                  Students can choose which activities they would like to
                  participate in within the ECA programme, and can speak to the
                  programme coordinator about registrations, scheduling and
                  information about each activity.
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

export default Extra;
