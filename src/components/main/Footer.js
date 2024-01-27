import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="content">
            <div id="back" title="Back to Top">
              <i className="icon-arrow"></i>
            </div>
            <a href="" target="_blank" className="brand">
              <span style={{ backgroundImage: "url(https://dnyansadhana.net.in/wp-content/uploads/vismis.png)", backgroundSize:"contain" }}></span>
            </a>

            <div className="text1">
              <p>MIS Mariya International Schools</p>
            </div>
            <div className="text2">
              <div className="info">
                <p>
                  <Link to="#">
                    <i className="icon-location"></i>
                    <span>King Fahd Industrial Port, Al Jubail 31951</span>
                  </Link>
                </p>
                <p>
                  <a href="tel:+966567334791" target="_blank">
                    <i className="icon-tel"></i>
                    <span>+966567334791</span>
                  </a>
                </p>
                <p>
                  <a href="mailto:info@mariyaschools.com" target="_blank">
                    <i className="icon-mail"></i>
                    <span>info@mariyaschools.com</span>
                  </a>
                </p>
              </div>
            </div>

            <ul className="social-links">
              <li>
                <a href="#" target="_blank" className="icon-facebook"></a>
              </li>
              <li>
                <a href="#" target="_blank" className="icon-instagram"></a>
              </li>
              <li>
                <a href="#" target="_blank" className="icon-twitter"></a>
              </li>
              <li>
                <a href="#" target="_blank" className="icon-linkedin"></a>
              </li>
              <li>
                <a href="#" target="_blank" className="icon-youtube"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="search-inner" id="search-box" style={{ display: "none" }}>
        <a href="#" id="search-close" className="icon-close"></a>
        <div className="search-box-inner">
          <form action="#">
            <input
              type="text"
              className="input"
              name="q"
              value=""
              placeholder="Search our website"
            />
          </form>
          <p>
            Type on the line above then press the Enter/Return key to submit a
            new search query
          </p>
        </div>
      </div>
      <aside class="slider-bar" id="slider-bar">
        <ul>
          <li>
            <Link to="contact-us">
              <i>
                <img src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/BBIS-icons/BBIS_icon_call.svg?v=1609977369" />
              </i>
              <span>Contact the school</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <i>
                <img src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/images/download_brochure2.svg?v=1697095337" />
              </i>
              <span>Download school brochure</span>
            </Link>
          </li>
          <li>
            <Link to="/contact-us">
              <i>
                <img src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/BBIS-icons/BBIS_icon_map.svg?v=1609977369" />
              </i>
              <span>Arrange a visit</span>
            </Link>
          </li>
        </ul>
      </aside>
    </footer>
  );
}

export default Footer;
