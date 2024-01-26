import React from "react";
import Footer from "../../../components/main/Footer";
import SectionBanner from "../../../components/main/SectionBanner";
import Header from "../../../components/main/Header";

function MiddleYears() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
        link1="Our Schools"
        link2="Secondary School"
        link3="Middle Years (Grade 6-10)"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>MIDDLE YEARS</h1>
                <p className="text-body">
                  A caring environment in which students develop responsibility
                  for their own learning and potential.
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
                <h2>HELPING STUDENTS GROW</h2>
                <p>
                  Our middle school students are encouraged and supported to
                  grow in all areas of their life – academic, artistic, athletic
                  and social. During their time in middle school, students at
                  MIS learn to think critically in order to solve authentic
                  problems.
                </p>
                <h3>TEACHING AND LEARNING</h3>
                <p>
                  The IB Middle Years Programme recognises that students in
                  early puberty and mid-adolescence are going through a critical
                  phase of personal and intellectual development.
                  <br />
                  <br />
                  The curriculum is designed to help students participate
                  actively and responsibly in a changing and increasingly
                  interrelated world. It’s as much about learning how to learn
                  as it is about learning facts.
                  <br />
                  <br />
                  Exploring the interrelations between various disciplines and
                  subjects, we take a holistic view of learning that encourages
                  students to consider issues and problems with a much wider
                  lens. By doing so, our students quickly realise that the best
                  solutions often come from knowledge and understanding drawn
                  from many sources.
                </p>
                <h3>DEVELOPING A BROADER PERSPECTIVE</h3>
                <p>
                  To help foster understanding, tolerance and awareness, our
                  students are encouraged to consider issues from multiple
                  perspectives and to learn about their own and others’ social,
                  national and ethnic cultures. We’re here to help our students
                  develop invaluable skills and intercultural awareness that
                  they will carry with them for life.
                </p>
                <h3>EXTRA-CURRICULAR ACTIVITIES</h3>
                <p>
                  In addition to the academic programme, students can choose
                  from a wide range of extra-curricular activities, including
                  basketball, badminton, soccer, volleyball, athletics, Drama
                  Club, Musical Mania, Instrumental Ensemble, Model United
                  Nations, Debate Club, United World Schools, First Lego League
                  and Filmmaking.
                </p>
                <h3>PROJECT-BASED LEARNING</h3>
                <p>
                  Every year, the Grade 10 students have the opportunity to
                  embark on a Personal Project. During this six-month project,
                  students pursue something they are passionate about – to
                  showcase and celebrate their achievements, skills and
                  interests.
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

export default MiddleYears;
