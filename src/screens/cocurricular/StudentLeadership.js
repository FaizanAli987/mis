import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";

function StudentLeadership() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/C1_03680-scaled.jpg"
        link1="Admissions"
        link2="STUDENT LEADERSHIP"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>STUDENT LEADERSHIP</h1>
                <p className="text-body">
                  MIS offers many exciting opportunities for students to learn
                  about leadership.
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
                <h2>CREATING TOMORROW’S LEADERS</h2>
                <p>
                  Over the last 30 years, many MIS graduates have moved on to
                  take up leadership roles in companies, communities and
                  countries. We are proud of the role we play in enabling
                  students to reach their full potential to become leaders – in
                  whatever capacity they wish to serve.
                  <br />
                  <h3>STUDENT AMBASSADORS</h3>
                  <p>
                    The Student Ambassadors Programme is all about fostering a
                    sense of belonging amongst new students and the wider MIS
                    student community. <br />
                  </p>
                  <p>
                    Our Student Ambassadors are a diverse group of caring and
                    open-minded volunteers. We provide them with leadership and
                    communication training, and then partner them with new
                    students as they arrive. Not only does this build a stronger
                    feeling of community cohesion and responsibility among
                    students, but it also helps to settle new students and
                    strengthen connections with their classmates.
                    <br />
                  </p>
                  <h3>STUDENT COUNCIL</h3>
                  <p>
                    Working cooperatively with MIS students and teachers, the
                    Student Council represents the student body and contributes
                    to the MIS community. As the voice of all students, our
                    Student Councillors play an active role in building the
                    supportive, happy and respectful environment that MIS is
                    renowned for.
                    <br />
                    Student Council representatives are selected by their
                    classmates to serve on the Council for one year.
                    <br />
                    In Primary School, representatives from the Grades 1-5
                    homerooms meet every week during their lunch break to
                    discuss school issues.
                    <br />
                    In Secondary School, the Student Council meets regularly
                    under the guidance of a teacher representative and the
                    school counsellor. Class Representatives and the Executive
                    (Student Council President, Vice President, Treasurer and
                    Secretary) are democratically elected by the student body.
                  </p>
                  <h3>PEACEMAKERS</h3>
                  <p>
                    Peacemakers are Primary School students who listen and
                    actively help others to find peaceful and fair solutions to
                    daily conflicts or problems.
                    <br />
                    At MIS, Grade 4 and 5 students can participate in peer
                    mediator training to become Peacemakers. They learn about
                    the MIS Peace Bridge, as well as how to become compassionate
                    listeners and reflectors, and how to resolve conflicts.
                    There is one full-day training session, followed by shorter
                    sessions during lunch and recess.
                    <br />
                    Once they have completed the training, our Peacemakers join
                    a roster to work in pairs during lunch and recess. When on
                    duty, their job is to ask if disputing students want help in
                    finding a peaceful way to resolve their conflicts.
                    Peacemakers also share their knowledge and skills at
                    assemblies and by visiting classrooms and helping students
                    to understand and practice the MIS Peace Bridge.
                  </p>
                  <br />
                  <br />
                </p>
                <img src="https://mariyaschools.com/wp-content/uploads/2023/09/C1_03768-scaled.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default StudentLeadership;
