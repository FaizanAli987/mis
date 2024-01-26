import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";
function CareerCounsling() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
        link1="Student Support"
        link2="CAREER & COLLEGE COUNSELLING"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>CAREER & COLLEGE COUNSELLING</h1>
                <p className="text-body">
                  Welcoming, open learning environments for the entire MIS
                  community.
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
                <p>
                  Thinking about the future – let alone organising it – can be
                  daunting. As our older students begin to make plans for their
                  lives and education beyond MIS, our extensive careers and
                  college information programme is an essential resource to help
                  them take the next steps with confidence.
                  <br />
                  <br />
                  Our Careers and College counsellors are here to help students
                  and parents apply to colleges and universities in Germany,
                  Europe, the UK, and elsewhere around the world.
                  <br />
                  <br />
                  The programme includes:
                  <br />
                  Tools to help start the decision-making process, by evaluating
                  students’ interests and skills
                  <br />
                  <br />
                  Provision of career orientation assessment programmes and
                  career information seminars
                  <br />
                  <br />
                  Support for the timely registration of entrance exams and
                  processing of university applications
                  <br />
                  <br />
                  Support in submitting student transcripts and personal
                  references to universities
                  <br />
                  <br />
                  Information seminars for students and parents throughout the
                  school year about the college application process
                  <br />
                  <br />
                  Coordinating closely with Secondary School counsellors to
                  support students’ emotional development
                </p>
                <h3>HELPING STUDENTS FIND THE RIGHT UNIVERSITY</h3>
                <p>
                  We take a holistic approach, helping students choose a
                  university that not only offers the best academic fit for
                  their post-secondary studies, but also the best location for
                  themselves and family. MIS students are proudly accepted at
                  universities in Germany, across Europe and the United Kingdom,
                  as well as North America and Asia.
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

export default CareerCounsling;
