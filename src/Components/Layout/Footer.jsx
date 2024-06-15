import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <>
      <div className="page-wrapper">
        <footer className="main-footer pt-5">
          <div></div>
          <div className="m-5">
            <div className="row justify-content-around">
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                <div className="footer-widget footer-widget--about">
                  <a href="index.html" className="footer-widget__logo">
                    <img
                      src="/assets/Images/logo.png"
                      width="161"
                      alt="sanatan sewa nyas"
                    />
                  </a>
                  <div className="footer-widget__social">
                    <a href="https://twitter.com/">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        size="xl"
                        style={{ color: "#ffffff" }}
                      />
                    </a>
                    <a href="https://facebook.com/">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="xl"
                        style={{ color: "#ffffff" }}
                      />
                    </a>
                    <a href="https://pinterest.com/">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        size="xl"
                        style={{ color: "#ffffff" }}
                      />
                    </a>
                    <a href="https://instagram.com/">
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        size="xl"
                        style={{ color: "#ffffff" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 col-xl-2 col-xxl-2">
                <div className="footer-widget footer-widget--links">
                  <h2 className="footer-widget__title">Usefull Links</h2>
                  <ul className="list-unstyled footer-widget__links">
                    <li>
                      <a href="home.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About us</a>
                    </li>

                    <li>
                      <a href="blog.html">Contact us</a>
                    </li>

                    <li>
                      <a href="donation.html">Donations</a>
                    </li>
                    <li>
                      <a href="/login">Login</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 col-xl-2 col-xxl-2">
                <div className="footer-widget footer-widget--links">
                  <h2 className="footer-widget__title">Links</h2>
                  <ul className="list-unstyled footer-widget__links">
                    <li>
                      <a href="temples.html">Temples</a>
                    </li>
                    <li>
                      <a href="event-details.html">Events</a>
                    </li>
                    <li>
                      <a href="donate.html">Latest Events</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Give them Education</a>
                    </li>
                    <li>
                      <a href="donation.html">Start a Fundraising</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                {/* <div className="footer-widget footer-widget--mail">
                  <h2 className="footer-widget__title">Contact Us</h2>
                  <ul>
                    <li>
                      <a>Location</a>
                    </li>
                  </ul>
                  <a></a>
                  <a>-0987657890-09876</a>
                  <p>info@sanatansewanyas.com</p>
                 
                </div> */}
                <div className="footer-widget footer-widget--links">
                  <h2 className="footer-widget__title">Contact</h2>
                  <ul className="list-unstyled footer-widget__links">
                    <li>
                      <h3 href="temples.html">Location</h3>
                      <a>
                        P4HW+25C, C and D Block, Shalimar Place Site, Shalimar
                        Bagh, Delhi, 110088
                      </a>
                    </li>
                    <li>
                      <a href="event-details.html">+91 4567890987654</a>
                    </li>
                    <li>
                      <form
                        action="#"
                        data-url="MAILCHIMP_FORM_URL"
                        className="footer-widget__newsletter mc-form"
                      >
                        <input
                          type="text"
                          name="EMAIL"
                          placeholder="Email address"
                        />
                        <button type="submit" className="fas fa-paper-plane">
                          <FontAwesomeIcon
                            icon={faPaperPlane}
                            size="lg"
                            style={{ color: "#ffffff" }}
                          />
                        </button>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="main-footer-bottom">
          <div className="container">
            <p className="main-footer-bottom__copyright">
              Copyright Sanatan Sewanyas @2024. All rights reserved
            </p>
          </div>
        </div>
        <div className="mobile-nav__wrapper">
          <div className="mobile-nav__overlay mobile-nav__toggler"></div>
          <div className="mobile-nav__content">
            <span className="mobile-nav__close mobile-nav__toggler">
              <i className="fa fa-times"></i>
            </span>
            <div className="logo-box">
              <a href="index.html" aria-label="logo image">
                <img src="assets/images/logo-light.png" width="155" alt="" />
              </a>
            </div>
            <div className="mobile-nav__container"></div>
            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="fa fa-envelope"></i>
                <a href="mailto:needhelp@sanatanSewaNyas.com">
                  needhelp@sanatanSewaNyas.com
                </a>
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                <a href="tel:666-888-0000">666 888 0000</a>
              </li>
            </ul>
            <div className="mobile-nav__social">
              <a href="https://twitter.com/">
                <i className="fab fa-twitter" aria-hidden="true"></i>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://facebook.com/">
                <i className="fab fa-facebook" aria-hidden="true"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://pinterest.com/">
                <i className="fab fa-pinterest-p" aria-hidden="true"></i>
                <span className="sr-only">Pinterest</span>
              </a>
              <a href="https://instagram.com/">
                <i className="fab fa-instagram" aria-hidden="true"></i>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="search-popup">
          <div className="search-popup__overlay search-toggler"></div>
          <div className="search-popup__content">
            <form
              role="search"
              method="get"
              className="search-popup__form"
              action="#"
            >
              <input type="text" id="search" placeholder="Search Here..." />
              <button
                type="submit"
                aria-label="search submit"
                className="sanatanSewaNyas-btn sanatanSewaNyas-btn--base"
              >
                <span>
                  <i className="icon-magnifying-glass"></i>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
