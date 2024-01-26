import React from 'react'
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";
function ArtsDesign() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
        link1="Admissions"
        link2="Arts & Design"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>ARTS & DESIGN</h1>
                <p className='text-body'>
                Nurturing creativity and lateral thinking by allowing students to explore different mediums and technologies.
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
                VISUAL ARTS

                </h2>
                <p>
                Every person, young and old, has a need and desire to express themselves in a creative and original manner. Creativity is a frame of mind and an approach to life. It’s the capacity to experiment and play, to take informed risks, to plan and anticipate, to consider things from various points of view, and to overcome one’s own fear of failure.
                <br />
Across every year level at MIS, we aim to foster these attributes in our students.
<br />
Our art teachers provide instruction and practice in the use of materials, techniques, tools, skills and concepts – to not only develop the ability to create, discuss and appreciate works of art, but to develop creative confidence. We truly believe that art is a dynamic forum for expression and discussion, for acquiring skills and techniques, and for constant interaction with the values and preferences of different cultures
                  <br />
                
                </p>
                <h2>
                DESIGN
                </h2>
                <p>
                Design surrounds us. It includes the materials, knowledge and processes required to create all the gadgets, products and structures we use every day.
                <br />
Recognising that design is inherently linked to a wide array of professions, our Design classes involve much more than computing. Students learn about Architecture, Graphic Design, Product Design, Engineering and Digital Film Making. They use a variety of computer software to document, visualise and produce their work. They draw in three dimensions, create movies, manipulate pictures, and research and document their ideas and thoughts while learning the importance of visual thinking, communication and storytelling.
                </p>
                <h3>
                DESIGN IN THE MIDDLE YEARS

                </h3>
                <p>
                The holistic approach of the IB Middle Years Programme (MYP) acknowledges that inquiry and problem solving contribute to students’ development of thinking skills and strategies. MYP Design provides both the means and context to help students become skilled problem solvers who appreciate the role of technology in everyday life and all aspects of society, and who can respond critically and resourcefully to real life challenges. The course also plays a key role in raising students’ awareness of their responsibilities as global citizens.


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

export default ArtsDesign