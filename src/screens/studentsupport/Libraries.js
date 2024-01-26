import React from 'react'
import Header from "../../components/main/Header";
import Footer from "../../components/main/Footer";
import SectionBanner from "../../components/main/SectionBanner";
function Libraries() {
  return (
    <>
    <Header />
    <SectionBanner
      imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_6923-scaled.jpg"
      link1="Student Support"
      link2="Libraries"
    />

    <section class="guide-wrap">
      <div class="container fadeInUp">
        <div class="columns is-centered">
          <div class="column is-10-desktop is-10-tablet is-12-mobile">
            <div class="content has-text-centered">
              <h1>Libraries</h1>
              <p className="text-body">
              Welcoming, open learning environments for the entire MIS community.
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
              Our Primary and Secondary School library are full of materials to enrich and support the curriculum, catering to the diverse interests and needs of our students, faculty and staff.
<br/><br/>
The MIS librarians, maintain the collection using a fully automated catalogue and circulation system. Our library team also deliver special programmes that complement and extend the curriculum, and teach the students how to make the most of the wide range of resources on offer.
<br/><br/>
As well as books and other publications, our libraries have a networked bank of computers and laptops to support electronic information resources, including our online subscriptions to a wide variety of academic journals. Students can also use these computers to access the Internet.
<br/><br/>
Students can access the library during the school day, individually or through class visits. The Secondary School Library is open from 8.00am until 4.30pm and our Primary School library is open from 7.45am until 3.00pm on weekdays. Parents can visit the Primary School library on Monday and Wednesday from 3.00pm until 4.00pm.


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

export default Libraries