import React from "react";
import Layout from "../../Components/Layout";

function Contact() {
  return (
    <Layout
      title="Contact-Us"
      discription={"Sanatan Sewanyas Contact"}
      keywords={"Sanatan number,email sanatan sewanyas"}
    >
      <section className="page-header">
        <div className="page-header__bg"></div>
        <div className="container">
          <ul className="sanatanSewaNyas-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Contact</span>
            </li>
          </ul>
          <h2 className="page-header__title">Contact Page</h2>
        </div>
      </section>
      <section className="contact-one">
        <div className="container">
          <div
            className="contact-one__inner"
            style={{
              backgroundImage: "url(assets/images/shapes/contact-bg.jpg)",
            }}
          >
            <div className="contact-one__inner__shape"></div>
            <div className="row">
              <div className="col-xl-12 d-flex flex-column align-items-center">
                <div className="sec-title text-center">
                  <h6 className="sec-title__tagline">Contact with us</h6>
                  <h3 className="sec-title__title">
                    Feel free to write anytime
                  </h3>
                </div>
                <form
                  className="contact-one__form contact-form-validated wow fadeInUp"
                  data-wow-duration="1500ms"
                  action="https://noxitheme.com/sanatanSewaNyas/charity-html-template/inc/sendemail.php"
                >
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
                      <button type="submit" className="sanatanSewaNyas-btn">
                        <span>Send Message</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="container-fluid">
          <div className="google-map google-map__contact">
            <iframe
              title="template google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
              className="map__contact"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
