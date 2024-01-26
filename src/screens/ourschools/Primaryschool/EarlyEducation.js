import React from 'react'
import Footer from "../../../components/main/Footer";
import SectionBanner from "../../../components/main/SectionBanner";
import Header from '../../../components/main/Header';

function EarlyEducation() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
        link1="Our Schools"
        link2="Primary School"
        link3="Early Education (Grade 1-5)"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>EARLY EDUCATION
</h1>
                <p className="text-body">
                Helping our youngest students to discover the world, nurtured by our community.

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
                <h2>
                THE EARLY YEARS OF LEARNING

                </h2>
                <p>
                Our Early Education Programme empowers our youngest learners to follow their natural curiosity and interests. We believe children construct knowledge through interactions within their environment, and our teachers facilitate this natural learning process.
<br/><br/>
Your child will be gently challenged to test their emerging theories of the world and develop a capacity for critical thinking. Over the course of the year, they will follow units of inquiry that encourage deep exploration of concepts aligned to their interests.
<br/><br/>
Our teachers – who are all constantly observing the children – work together to discuss and interpret the children’s actions and behaviours. They then share the observations with the kids themselves, and work with them to develop the next stage of learning. It’s an incredibly insightful way to help our children develop their own thinking strategies.


                </p>
                <h3>OUR TEACHING PHILOSOPHY
</h3>
                <p>
                The Early Education department embodies the school’s mission statement, which is to inspire everyone in our learning community to be responsible, compassionate global citizens who make a difference through inclusion, innovation and action.
<br/><br/>
Our teachers work together to ensure that the learning rights of our youngest students are recognised, respected and celebrated
                </p>
                <h3>
                FACILITIES
                </h3>
                <p>
                The Early Education Department is purpose-built to engage and inspire our students. An art room, loft areas, integrated play spaces and multi-purpose areas provide diverse spaces for children to explore. The playground is a safe space for them to develop gross motor skills. And we regularly venture into the woods for outdoor learning opportunities.


                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default EarlyEducation