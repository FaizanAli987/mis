import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";

const index = () => {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/C1_03768-scaled.jpg"
        link1="Student Support"
        link2=""
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>STUDENT SUPPORT
</h1>
                <p class="text-body">
                An inclusive learning environment dedicated to the creative, curious and caring qualities of children.


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
                At MIS, we make sure that every student feels understood, challenged, included and prepared for life beyond the school campus. Our Student Support Services team plays a key role in this important task.


                  <br />
                </p><p>
                With our support, we empower all learners to fulfill their individual potential. We specialise in helping students to overcome barriers to learning that may exist due to a range of circumstances – like language, learning, health, behaviour or social/emotional needs. Equally, we support students who strive for academic, social, emotional, artistic or athletic excellence.
                  <br />
                </p>
                <h2>
                HEALTHY ASPECTS
                  <br />
                </h2>
                <p>
                Because we care about our students health we provide all hygiene tools such as :
-There are sanitizer everywhere in our school and in each class
<br/>
Healthy food from the most important aspect of students health because of that we
provide many choices of healthy food in our canteen

                </p>
                <h2>SPORTS ASPECTS</h2>
                <p>
                Sports help kids in character building and maintain energy and strength which improve their blood circulation and physically fit, it also improves the mental sharpness and stamina. It always develop a sense of friendliness, team spirit, confidence among children,Therefore, we are keen to provide sports activity for boys and girls in all available ways

                </p>
                <h2>
                ACTIVITIES
                  <br />
                </h2>
                <p>
                Our children are full of talents we have to care about these talents .
<br />
Every year we have an amazing trips because our message is to make our students happy as much as we can.
<br />
                </p>
                <h2>RELIGIOUS ASPECTS</h2>
                <p>
                We are keen on the development of our student to the correct religious values so the must have a pray time and we also has a Competitions for Quran.


                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="quote-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-8-desktop is-10-tablet is-12-mobile">
              <div class="content">
                <div class="image-box">
                  <span
                    class="zoomOut"
                    style={{backgroundImage: `url(https://mariyaschools.com/wp-content/uploads/2023/09/C1_03217-scaled.jpg)`, backgroundPosition: "50% 50%"}}
                  ></span>
                </div>
                <div class="text-box fadeInUp">
                  <blockquote>
                  I AM INCREDIBLY PROUD OF THE INDIVIDUAL ATTENTION THAT STUDENTS RECEIVE WITHIN THE MIS LEARNING COMMUNITY, WHICH ALLOWS THEM TO THRIVE, BE SUCCESSFUL AND ACHIEVE THEIR GOALS.

                    <cite> MIS Head of Student Support Services
</cite>
                  </blockquote>
                </div>
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
