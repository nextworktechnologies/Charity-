import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { Link } from "react-router-dom";
const Header = () => {
  const [isVisible, setIsvisible] = useState(false);
  console.log(isVisible);
  return (
    <>
      <header className="main-header main-header--two sticky-header sticky-header--normal">
        <div className="container-fluid">
          <a href="tel:+92(8800)-6930" className="main-header__top">
            <i className="main-header__top__icon"></i>
            <span>Are you ready to help them? Let’s become a volunteer</span>
          </a>
          <div className="main-header__logo">
            <a href="index.html">
              <img
                src="/assets/Images/logo.png"
                alt="Sanatan Sewanyas"
                width="100"
              />
            </a>
          </div>
          <div className="main-header__inner">
            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li className="dropdown">
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li className="dropdown">
                  <Link to="#">Donations</Link>
                  <ul>
                    <li>
                      <Link to="/donation">Donations</Link>
                    </li>
                    <li>
                      <Link to="/donate">Donate Now</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link to="/events">Events</Link>
                </li>
                <li className="dropdown">
                  <Link to="/temples">Temple</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="main-header__right">
              <div className="mobile-nav__btn mobile-nav__toggler">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <a href="donate.html" className="sanatanSewaNyas-btn-right">
            <div className="main-header__logo">
              <Link to="/">
                <img
                  src="/assets/Images/logo.png"
                  alt="Sanatan Sewa Nyas"
                  width={120}
                />
              </Link>
            </div>
          </a>
        </div>
      </header>
      <div className="mobile-nav__wrapper expanded">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={() => {
            setIsvisible(!isVisible);
          }}
        ></div>
        <div
          className={`mobile-nav__content ${!isVisible && "d-none"}`}
          onClick={() => {
            setIsvisible(!isVisible);
          }}
        >
          <span className="mobile-nav__close mobile-nav__toggler">
            <FontAwesomeIcon icon={faXmark} style={{ color: "#ffffff" }} />
          </span>
          <div className="logo-box">
            <a href="index.html" aria-label="logo image">
              <img src="/assets/Images/logo.png" width="155" alt="" />
            </a>
          </div>
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li className="dropdown">
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li className="dropdown">
                <Link to="#">Donations</Link>
                <ul>
                  <li>
                    <Link to="/donation">Donations</Link>
                  </li>
                  <li>
                    <Link to="/donate">Donate Now</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="/events">Events</Link>
              </li>
              <li className="dropdown">
                <Link to="/temples">Temple</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:needhelp@aofixo.com">needhelp@aofixo.com</a>
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
    </>
  );
};

export default Header;
