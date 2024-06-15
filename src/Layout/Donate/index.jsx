import React, { useState } from "react";
import Layout from "../../Components/Layout";

function Donate() {
  const [donateAmount, setDonateAmount] = useState(".00");

  const handleAmountClick = (amount) => {
    setDonateAmount(amount);
  };
  return (
    <Layout
      title="Donate-Now"
      discription={"Donate in Sanatan sewanyas"}
      keywords={"Donation Sanatan Sewanyas"}
    >
      <section className="page-header">
        <div className="page-header__bg"></div>
        <div className="container">
          <ul className="sanatanSewaNyas-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Donation</span>
            </li>
          </ul>
          <h2 className="page-header__title">Donate Now</h2>
        </div>
      </section>
      <section className="donate-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <form action="#" className="donate-page__form">
                <div className="donate-page__form__amount">
                  <div className="donate-page__form__amount__box">
                    <span className="donate-page__form__amount__sign">$</span>
                    <input
                      type="text"
                      value={donateAmount}
                      name="donate_amount"
                      id="donate_amount"
                      placeholder="Enter amount"
                      className="donate-page__form__amount__input"
                      onChange={(e) => setDonateAmount(e.target.value)}
                    />
                  </div>
                  <div className="donate-page__form__amount__buttons">
                    {[25, 50, 75, 100].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        className="donate-page__form__amount__btn"
                        onClick={() => handleAmountClick(`$${amount}`)}
                      >
                        ${amount}
                      </button>
                    ))}
                    <button
                      type="button"
                      className="donate-page__form__amount__btn"
                      onClick={() => handleAmountClick("")}
                    >
                      Custom amount
                    </button>
                  </div>
                </div>
                <div className="donate-page__form__payment">
                  <h3 className="donate-page__form__payment__title">
                    Select payment method
                  </h3>
                  <div className="donate-page__form__payment__method">
                    <div className="donate-page__form__payment__method__item">
                      <input
                        type="radio"
                        id="account"
                        name="checkout-info"
                        defaultChecked
                      />
                      <label htmlFor="account">
                        <span></span>Test Donation
                      </label>
                    </div>
                    <div className="donate-page__form__payment__method__item">
                      <input type="radio" id="ship" name="checkout-info" />
                      <label htmlFor="ship">
                        <span></span>Offline Donation
                      </label>
                    </div>
                  </div>
                </div>
                <h3 className="donate-page__form__info-title">Personal Info</h3>
                <div className="form-one">
                  <div className="form-one__group">
                    <div className="form-one__control">
                      <input type="text" name="name" placeholder="Your name" />
                    </div>
                    <div className="form-one__control">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="form-one__control">
                      <input type="text" name="phone" placeholder="Phone" />
                    </div>
                    <div className="form-one__control">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <div className="form-one__control form-one__control--full">
                      <textarea
                        name="message"
                        placeholder="Write a message"
                      ></textarea>
                    </div>
                    <div className="form-one__control form-one__control--full">
                      <button
                        type="submit"
                        className="sanatanSewaNyas-btn sanatanSewaNyas-btn--icon"
                      >
                        <i className="sanatanSewaNyas-btn__icon fas fa-heart"></i>
                        <span>Donate now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <div className="donate-page__carousel sanatanSewaNyas-owl__carousel owl-carousel owl-theme">
                {[1, 2, 3].map((item) => (
                  <div className="item" key={item}>
                    <div className="donation-one__item">
                      <a
                        href="donation-details.html"
                        className="donation-one__item__image"
                      >
                        <img
                          src={`assets/images/resources/donation-1-${item}.jpg`}
                          alt="sanatanSewaNyas"
                        />
                        <div className="donation-one__item__cats">
                          {item === 1
                            ? "Education"
                            : item === 2
                            ? "Medical"
                            : "Food"}
                        </div>
                      </a>
                      <div className="donation-one__item__content">
                        <h3 className="donation-one__item__title">
                          <a href="donation-details.html">
                            {item === 1
                              ? "Educate childrens to get good life"
                              : item === 2
                              ? "Protect poor & give them medical help"
                              : "Raise funds for clean and healthy water"}
                          </a>
                        </h3>
                        <p className="donation-one__item__text">
                          There are many of lorem, but majori have suffered
                          alteration in some form.
                        </p>
                      </div>
                      <div className="donation-one__item__progress">
                        <div className="donation-one__item__progress__bar-wrapper">
                          <div
                            className="donation-one__item__progress__bar count-bar"
                            data-percent={
                              item === 1 ? "36%" : item === 2 ? "50%" : "66%"
                            }
                          >
                            <span className="donation-one__item__progress__bar__round"></span>
                            <div className="donation-one__item__progress__number count-text">
                              {item === 1 ? "36%" : item === 2 ? "50%" : "66%"}
                            </div>
                          </div>
                        </div>
                        <div className="donation-one__item__progress__content">
                          <div className="donation-one__item__progress__content__number">
                            $25,270 <span>Raised</span>
                          </div>
                          <div className="donation-one__item__progress__content__number">
                            $30,000 <span>Goal</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="donate-page__organizer">
                <h3 className="donate-page__organizer__title">Organizer:</h3>
                <div className="donate-page__organizer__author">
                  <img
                    src="assets/images/resources/organizer.jpg"
                    alt="sanatanSewaNyas"
                  />
                  <div className="donate-page__organizer__author__content">
                    <h4 className="donate-page__organizer__name">
                      Aleesha Brown
                    </h4>
                    <ul className="donate-page__organizer__list">
                      <li>
                        <span className="fas fa-tag"></span>Medical
                      </li>
                      <li>
                        <span className="fas fa-map-marker"></span>New York, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Donate;
