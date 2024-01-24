import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";

function OurCampus() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6928-scaled.jpg"
        link1="About Us"
        link2="Our Campus"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>OUR CAMPUS</h1>
                <p class="text-body">
                  Ideally located in King Fahd Industrial Port, Al Jubail 31951.
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
                Mariya International Schools Jubail is part of an ever growing, ever
changing inclusive and diverse community based here in the Industrial City
of Jubail with over 200,000 expats, including the local Saudi Arabian
population. Our School rules are intended to promote the safety, happiness
and well-being of all of our students and staff. All students are expected to
follow the school rules and respect each other, adhering to the code of
conduct.
                  <br />
                </p>
            
              
                <h2>Code of conduct for pupils
</h2>
                <p>
                MIS takes the safety of its students extremely seriously and we pride ourselves to ensure that
every pupil in our care is safe at all times. The digital world is a huge part of people’s life, IT and
online communications can provide beneficial, valuable support for learning, opportunities and
education, however at times the internet may pose a significant risk to young people.
Our students are therefore taught about the potential risks that may arise online and are taught
how to limit them; these risks may include but are not limited to:
<br/><br/>
Bullying<br/>
Fraud<br/>
Grooming<br/>
Stalking<br/>
Abusive behaviors<br/>
Malicious software<br/><br/>
<img src="https://mariyaschools.com/wp-content/uploads/2023/09/C1_03557-scaled.jpg"/>
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

export default OurCampus;
