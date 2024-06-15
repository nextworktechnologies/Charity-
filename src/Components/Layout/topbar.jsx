import React from "react";

const Topbar = () => {
  return (
    <div className="topbar-two">
      <div className="container-fluid">
        <div className="topbar-two__inner">
          <a className="topbar-two__info" href="tel:9288609630">
            <i className="fas fa-phone-square topbar-two__info__icon"></i>
            <span className="topbar-two__info__text">+92 (8860) - 9630</span>
          </a>
          <a className="topbar-two__info" href="mailto:needhelp@company.com">
            <i className="fas fa-envelope topbar-two__info__icon"></i>
            <span className="topbar-two__info__text">needhelp@company.com</span>
          </a>
          <div className="topbar-two__right">
            <p className="topbar-two__info">
              <i className="fas fa-map-marker topbar-two__info__icon"></i>33
              broklyn golden street, New York. USA
            </p>
            <div className="topbar-two__social">
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
      </div>
    </div>
  );
};

export default Topbar;
