import React from "react";
import Footer from "./../../components/main/Footer";
import Header from "./../../components/main/Header";
import SectionBanner from "../../components/main/SectionBanner";

const index = () => {
  return (
    <>
      <Header />

      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/C1_03217-scaled.jpg"
        link1="About Us"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>About us</h1>
                <p class="text-body">
                Mariya International Schools is a British Council partner school, Cambridge International School and is accredited by the British council, ISO and Cognia.

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
                Mariya International Schools (MIS) was founded in 2007 in the city of Jubail,
Eastern Province of the Kingdom of Saudi Arabia. The schools was initiated to
cater for the massively growing Expatriate Community of Jubail Industrial City.


                  <br />
                </p>
                <p dir="ltr">
                Mariya International School Jubail ranges from Kg’s, Grades 1-9 in both girls and
Boys section.
The beginnings of the schools were really humble. Only 43 students with a
handful of teachers and admin staff, six rooms in a building and a small play area,
were the constituents of the schools. Once the schools was licensed by the
ministry of education, KSA, it started to grow exponentially. In the last three
years, the schools has relocated in the newly built campus consisting of three
huge buildings covering an area of over 5000 sq. Meters. According to the
Ministry of Education KSA regulations, there are separate buildings for Boys,
Girls and Admin sections. Each of the boys’ and girls’ section building was
designed and built to provide ergonomically safe and healthy environment for the
students. Over 64 classrooms, 4 Science Labs, 4 Computers’ Labs, Library,
Audio-Visual (AV) rooms, 2 indoor play areas and 2 outdoor play areas are the
main facilities in the schools. 
                  
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
                <h3>DELIVERING INCLUSIVE EDUCATION</h3>
                <p>

                The school has a huge, all indoors, Multi-purpose hall which is shared by both of
the sections. A huge size outdoor playground in the Girls’ section and a smaller
outdoor playground for the boys’ section is another feature of the schools.
Football (soccer) is the main sport within the schools, yet physical education,
basketball and cricket are also promoted and encouraged among the students.


                
                </p>
            <p>
            To ensure the safety of the whole student population and the staff, a state of the
art Closed Circuit Television Camera system is also installed. Manned security
entrance-exit system is also operated to enhance the safety aspect. 60% of the
student population uses schools owned and maintained Transport system that
consists of 35 brand new buses that cover the whole of the city. Almost 90% of
the staff, also, commutes via this transport system. The KG students are provided
with Bus assistants in every trip that they have, to ensure their safety, to and
from the schools.
            </p>
            <p>
            The School building is a purpose built facility and has been designed to make
sure that the environment provides the safest and easiest day to day running.

            </p>
            <p>
            We welcome any suggestions, feedback and questions from you. Your opinions
are of the highest value to us. Together, we shall make Mariya International
Schools, one of the Best schools in our region.
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
