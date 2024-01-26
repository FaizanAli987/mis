import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";
function LearningSupport() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
        link1="Student Support"
        link2="Learning Support"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>Learning Support</h1>
                <p className="text-body">
                Enabling all students to develop to their fullest potential.
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
                Within our Learning Support programme, we design support with each child’s needs in mind. Our goal is to enable students to develop to their fullest potential – as such, instruction is specially designed to meet the student's particular needs.

The Learning Support service is available to students who have been identified via a referral process as needing additional academic support in order to be successful in school. It’s also available for students whose abilities are far above average, and may benefit from curriculum enrichment.


                  <br />
             
                </p>
         <h3>
         WHAT DO THESE PROGRAMMES LOOK LIKE?
         </h3>
         <p>
         They will vary from child to child. We adapt the content, teaching methodology, or delivery of instruction in order to:
<br/>


Address the unique needs of the student that results from a learning difference
<br/>
Ensure the student can access the general curriculum in order to meet the educational standards that apply to all students
<br/>
Our goal is to deliver equitable, inclusive education to all.


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

export default LearningSupport;
