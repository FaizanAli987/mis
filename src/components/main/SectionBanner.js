import React from "react";

function SectionBanner(props) {
  return (
    <section class="global-banners inner-banners">
      <div class="container is-fluid">
        <div class="">
          <div class="">
            <div>
              <div class="banner " style={{ width: "100%" }}>
                <div class="image-box">
                  <div class="image">
                    <span
                      className="zoomOut"
                      style={{
                        backgroundImage: `url(${props.imglink})`,
                        backgroundPosition: "50% 50%",
                      }}
                    ></span>
                  </div>
                </div>
                <div class="text-box fadeInUp">
                  <ul>
                    <li>
                      <a href="/" tabindex="0">
                        home
                      </a>
                    </li>
                    {props.link1 && (
                      <li className="is-active">
                        <a tabIndex="0">{props.link1}</a>
                      </li>
                    )}

                    {props.link2 && (
                      <li className="is-active">
                        <a tabIndex="0">{props.link2}</a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionBanner;
