import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";
function SchoolCounseling() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
        link1="Student Support"
        link2="School Counseling"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>SCHOOL COUNSELLING</h1>
                <p className="text-body">
                  Providing strategic, timely and personal interventions when
                  required.
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
                  Recognising that every individual is unique, our school
                  counsellors play a key role in customising educational
                  experiences to enhance capabilities, close achievement gaps
                  among high and low performing groups, and support positive
                  choices.
                  <br />
                  Students, parents and teachers can access our school
                  counselling programme. By providing prevention-based workshops
                  and counselling support for students with specific social or
                  emotional concerns, we aim to make our school a healthy and
                  balanced learning environment.
                  <br />
                  At MIS, we believe:
                  <br />
                  All students possess the power to manage quality, growth and
                  satisfaction in their lives Each student’s abilities, talents
                  and interests should be recognised and nurtured All students
                  deserve to be treated with dignity and respect
                  <br />
                  All students, through lessons, groups and activities, can be
                  guided to function successfully in a rapidly changing global
                  society
                  <br />
                  We continually evaluate our counselling service to ensure it
                  is data-driven and responds to the needs of our diverse
                  community.
                  <br />
                </p>
                <h3>ABOUT OUR SCHOOL COUNSELLORS</h3>
                <p>
                  MIS school counsellors are trained at a postgraduate level in
                  school counselling, counselling psychology or social work –
                  and have years of invaluable experience helping children,
                  adolescents and their families in multi-ethnic and
                  multilingual learning environments. They all hold membership
                  in professional organisations such as the International School
                  Counsellor Association, the American School Counsellor
                  Association, the British Psychological Society and the UK
                  Association of Solution-Focused Practice.
                  <br />
                  There are dedicated counsellors for the Primary School,
                  Secondary School and Boarding School, as well as specialist
                  Career and College Counselling.
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

export default SchoolCounseling;
