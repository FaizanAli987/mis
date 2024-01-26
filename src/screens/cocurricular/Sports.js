import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";
function Sports() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
        link1="Admissions"
        link2="Sports & Athletics"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>SPORTS & ATHLETICS</h1>
                <p class="text-body">
                  Promoting healthy competition, sportsmanship and full
                  participation.
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
                <h2>A RANGE OF SPORTS TO CHOOSE FROM</h2>
                <p>
                  MIS has a proud reputation for excelling in a range of sports,
                  and we strongly encourage all students to participate. Our
                  athletics programme consists of competitive and recreational
                  sports, offered over three seasons throughout the academic
                  year. To ensure variety, each sport is offered once during
                  these terms. MIS is a full member of the German International
                  School Sports Tournament organisation (GISST), along with ten
                  other international schools in Germany. Students from Grade 6
                  to Grade 12 are involved in GISST football, basketball, cross
                  country, swimming, track and field, tennis, badminton and
                  volleyball tournaments at different locations around Germany.
                  We were the proud GISST overall winners in 2007-2008,
                  2008-2009, 2009-10, 2010-11, 2011-12, 2015-16 and 2018-19.​
                  <br />    <br />
                </p>
                <h3>GUIDING PRINCIPLES OF OUR ATHLETICS PROGRAMME</h3>
                <p>
                  We encourage MIS staff members to serve as coaches and
                  chaperones on the athletics teams. By working with students
                  outside the classroom, teachers support our holistic
                  philosophy and mission.
                  <br />    <br />
                  We believe in participation, commitment, self-discipline,
                  sportsmanship, effort and teamwork. Our competitive teams aim
                  to play to the best of their ability and be successful in
                  their games and tournaments. We teach our teams and players to
                  win and lose with grace.
                  <br />    <br />
                  We do not cut players from our teams. All players get the
                  opportunity to train and play in some friendly games. Please
                  note, though, that there are limits on how many students we
                  can take to GISST and ESC tournaments. <br />    <br />
                  Our students are involved in weekend and weekdays games and
                  tournaments both in and outside of Berlin. We also travel
                  within Europe and aim to provide students with an athletic as
                  well as a cultural experience. We strongly believe that being
                  part of a team helps our students to develop as considerate,
                  disciplined, culturally aware and open-minded people who
                  strive to get the best out themselves and their team.
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

export default Sports;
