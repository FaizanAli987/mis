import React from "react";
import Footer from "./../../components/main/Footer";
import Header from "./../../components/main/Header";
import SectionBanner from "../../components/main/SectionBanner";

const index = () => {
  return (
    <>
      <Header />

      <SectionBanner
        imglink="https://images-eu.digistormhosting.com.au/eyJidWNrZXQiOiJkaWdpc3Rvcm0td2Vic2l0ZXMtZXUiLCJrZXkiOiJiYmlzLWRlLWJlLTcyOS13ZWJzaXRlXC9jb250ZW50XC9CQklTLWltYWdlc1wvQkJJUy1QcmltYXJ5LVNjaG9vbFwvQkJJUy1QcmltYXJ5LVNjaG9vbC01Mzg5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsInBvc2l0aW9uIjoiY2VudGVyIiwid2lkdGgiOjI0MDAsImhlaWdodCI6bnVsbH0sInF1YWxpdHkiOjgyfX0="
        link1="About Us"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>About us</h1>
                <p class="text-body">
                  A warm, welcoming school environment where students gain
                  access to a world-leading International Baccalaureate
                  education.
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
                <h2>WELCOME</h2>
                <p>
                  Welcome to BBIS Berlin Brandenburg International School, a
                  place where students are empowered to reach their unique
                  potential and thrive on a global stage.
                  <br />
                </p>
                <p dir="ltr">
                  As one of the world’s leading International Baccalaureate (IB)
                  schools, BBIS proudly offers three IB programmes in the
                  Primary, Middle and Diploma years of schooling to students
                  from over 70 countries, as well as a huge range of
                  extra-curricular activities. Inclusive, diverse and expansive,
                  we’re here to help each student discover and develop their
                  passions in a warm and welcoming environment.
                  <br />
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
                <h3>NURTURING COMPASSIONATE GLOBAL CITIZENS</h3>
                <p dir="ltr">
                  While English is our language of instruction, BBIS is a truly
                  international school.
                </p>
                <p>
                  Our students hail from families who come from across the globe
                  and share our values of humanity, tolerance and empathy.
                  Together, we are building a caring, internationally minded
                  community of students, teachers and alumni – people who truly
                  have the potential to leave a positive mark on our world.
                </p>
                <h3>DELIVERING INCLUSIVE EDUCATION</h3>
                <p>
                  Every year, we welcome around 780 day students and around 80
                  boarding students, from 3 to 19 years of age. These students
                  spend their days developing invaluable, life-long skills like
                  critical thinking, languages and intercultural competencies
                  across our early education, primary and secondary areas:
                  <br />
                  <br />
                </p>
                <ul>
                  <li>
                    From ages 3-6, children join our early education community
                  </li>
                  <li>
                    From ages 6-11, students join Grades 1 to 5 to pursue the{" "}
                    <a href="our-schools/primary-school/ib-primary-years-programme.html">
                      IB Primary Years Programme
                    </a>
                    <br />
                  </li>
                  <li>
                    From ages 11-19, students join our secondary school to
                    pursue the{" "}
                    <a href="our-schools/secondary-school/ib-middle-years-programme.html">
                      IB Middle Years Programme
                    </a>{" "}
                    and{" "}
                    <a href="our-schools/secondary-school/ib-diploma-programme.html">
                      IB Diploma Programme
                    </a>
                  </li>
                </ul>
                <p dir="ltr">
                  In all of these programmes, we encourage students to be
                  courageous and explore new opportunities, fostering a
                  pioneering spirit that will help them succeed, no matter what
                  the future holds.
                </p>
                <h3>CREATING A SAFE AND HAPPY SPACE FOR STUDENTS</h3>
                <p>
                  Our overarching goal at BBIS is to help students become happy,
                  well-rounded humans.
                </p>
                <p dir="ltr">
                  Our classes are small – usually with fewer than 20 students –
                  so that everyone receives individual attention and support.
                  Beyond the classroom, collaboration and cooperation between
                  staff, students, parents and the wider community is very
                  important to us.
                </p>
                <p dir="ltr">
                  Growing up is not easy, but we understand the challenges and
                  changes that occur. We support our students with dedicated,
                  caring professionals at every step of the way. This nurturing
                  approach – coupled with 24/7 security and a strong{" "}
                  <a
                    href="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/documents/7600-Child-Protection-Policy-2021.pdf?v=1658490152"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    child-protection policy
                  </a>{" "}
                  – makes BBIS a safe and supportive environment for your child.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default index;
