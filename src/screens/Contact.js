import React from "react";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import SectionBanner from "../components/main/SectionBanner";
function Contact() {
  return (
    <>
      <Header />
      <SectionBanner
        imglink="https://mariyaschools.com/wp-content/uploads/2023/09/IMG_7062-scaled.jpg"
        link1="Contact us"
        link2=""
      />
      <section class="guide-wrap">
        <div class="container fadeInUp">
          <div class="columns is-centered">
            <div class="column is-10-desktop is-10-tablet is-12-mobile">
              <div class="content has-text-centered">
                <h1>CONTACT US</h1>
                <p className="text-body">
                  Discover how you can get in touch and where you can find us.
                  We’re always here to help.
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
                <h2>GET IN TOUCH</h2>
                <p>
                  <b> For general enquiries: </b> <br />
                  Phone: +966567334791
                  <br />
                  Email: info@mariyaschools.com
                  <br />
                  <br />
                  <b>For admissions enquiries:</b> <br />
                  Email: admissions@mariyaschools.com
                </p>
                <h3>MIS Location</h3>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d455060.52451740426!2d49.624973!3d26.993477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a0f8e7f063db%3A0x57a5a095f532dd2c!2sMariya%20International%20Schools!5e0!3m2!1sen!2sus!4v1706297865349!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: "0", width: "100%", height: "380px", marginTop:"20px" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <h3>Address</h3>
                <p>
                Hi, Alyarmouk, Al Jubail 31951, Saudi Arabia
                </p>
                <h3>
                    Contact us
                </h3>
                <form action="" className="forms">
                 <div className="form-control">
                    <label htmlFor="">Name</label>
                    <input type="text"  />
                 </div>
                 <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" />
                 </div>
                 <div className="form-control">
                    <label htmlFor="">Message</label>
                   <textarea name=""  id="" cols="30" rows="10"></textarea>
                 </div>
                 <button>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
