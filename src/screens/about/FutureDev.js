import React from "react";
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";

function FutureDev() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
        link1="About Us"
        link2="Future Developments"
      />

      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>FUTURE DEVELOPMENTS</h1>
                <p class="text-body">
                  We invest in ongoing upgrades, new buildings and renovations
                  across the MIS campus.
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
                At MIS Mariya International Schools, we are committed to providing a dynamic and innovative learning environment that prepares students for the challenges and opportunities of the future. Our vision extends beyond the present, and we are excited to share some of the upcoming developments that will shape the future of education at MIS Mariya International Schools
                  <br />
                  <br/>
                </p>
              <img style={{marginBottom:"40px"}} src="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_7062-scaled.jpg"/>
           
            <ul>

            <li>

Embracing the latest advancements in technology, we are investing in cutting-edge tools and platforms to enhance the learning experience. Virtual reality (VR), augmented reality (AR), and artificial intelligence (AI) will be seamlessly integrated into our curriculum, fostering a more interactive and immersive educational journey for our students.
</li>
<li>

Recognizing the importance of global perspectives, we are actively exploring partnerships and collaborations with international schools and institutions. This will open doors for exchange programs, joint projects, and cultural exchanges, providing our students with a broader worldview and enriching their educational experience.


</li>
<li>
To nurture the next generation of innovators, MIS Mariya International Schools will be placing a strong emphasis on Science, Technology, Engineering, and Mathematics (STEM) education. State-of-the-art innovation labs will be established, providing students with hands-on experiences and encouraging creative problem-solving.


</li>
<li>
Understanding that each student is unique, we are working on developing personalized learning pathways. Adaptive learning platforms and tailored educational plans will cater to individual strengths, interests, and learning styles, ensuring that every student reaches their full potential.


</li>
<li>
In alignment with global efforts towards sustainability, MIS Mariya International Schools will undertake initiatives to promote environmental consciousness. From eco-friendly campus designs to curriculum elements focused on sustainability, we aim to instill a sense of responsibility and environmental stewardship in our students.


</li>
            </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
   


      <Footer />
    </>
  );
}

export default FutureDev;
