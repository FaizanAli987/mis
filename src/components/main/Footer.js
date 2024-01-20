import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-top">
      <div className="container">
        <div className="content">
          <div id="back" title="Back to Top">
            <i className="icon-arrow"></i>
          </div>
          <a href="https://ibo.org/" target="_blank" className="brand">
            <span style={{ backgroundImage: "url(img/logo-1.png)" }}></span>
          </a>
          <div className="img-c">
            <div style={{ backgroundImage: "url(img/logo-1.svg)" }}>
              <a href="index.html"></a>
            </div>
          </div>
          <div className="text1">
            <p>BBIS Berlin Brandenburg International School</p>
            <p>
              Genehmigte Ersatz- und Ganztagsschule Klasse 1–10, Anerkannte
              Ergänzungsschule Klasse 11–12
            </p>
          </div>
          <div className="text2">
            <p>BBIS Berlin Brandenburg International School GmbH</p>
            <div className="info">
              <p>
                <a href="contact-us.html" target="_blank">
                  <i className="icon-location"></i>
                  <span>
                    Schopfheimer Allee 10, 14532 Kleinmachnow, Germany
                  </span>
                </a>
              </p>
              <p>
                <a
                  href="tel:+49 (0)33 203  80 36-0&ZeroWidthSpace;"
                  target="_blank"
                >
                  <i className="icon-tel"></i>
                  <span>+49 (0)33 203 80 36-0&ZeroWidthSpace;</span>
                </a>
              </p>
              <p>
                <a href="mailto:office@bbis.de" target="_blank">
                  <i className="icon-mail"></i>
                  <span>office@bbis.de</span>
                </a>
              </p>
            </div>
          </div>
          <div className="show-privacy-settings">Privacy Settings</div>

          <ul className="social-links">
            <li>
              <a
                href="https://www.facebook.com/BBISofficial"
                target="_blank"
                className="icon-facebook"
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/bbis_official/"
                target="_blank"
                className="icon-instagram"
              ></a>
            </li>
            <li>
              <a
                href="https://twitter.com/BBISofficial"
                target="_blank"
                className="icon-twitter"
              ></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/bbis-berlin-brandenburg-international-school"
                target="_blank"
                className="icon-linkedin"
              ></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCJQxGRWSuVtLbK6cU_LAs4Q"
                target="_blank"
                className="icon-youtube"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="search-inner" id="search-box" style={{ display: "none" }}>
      <a href="#" id="search-close" className="icon-close"></a>
      <div className="search-box-inner">
        <form action="https://www.bbis.de/search">
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
    <aside className="slider-bar" id="slider-bar">
      <ul>
        <li>
          <a href="contact-us.html" target="">
            <i>
              <img src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/BBIS-icons/BBIS_icon_call.svg?v=1609977369" />
            </i>
            <span>Contact the school</span>
          </a>
        </li>
        <li>
          <a href="https://info.bbis.de/school-brochure" target="_blank">
            <i>
              <img src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/images/download_brochure2.svg?v=1697095337" />
            </i>
            <span>Download school brochure</span>
          </a>
        </li>
        <li>
          <a
            href="admissions/application-process/book-a-tour.html"
            target="_blank"
          >
            <i>
              <img src="https://media.eu.digistormhosting.com.au/bbis-de-be-729-website/content/BBIS-icons/BBIS_icon_map.svg?v=1609977369" />
            </i>
            <span>Arrange a visit</span>
          </a>
        </li>
      </ul>
    </aside>
  </footer>
  )
}

export default Footer