import React from "react";
import Slider from "react-slick";
import Layout from "../../Components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faHandsPraying,
  faOm,
  faPlay,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import about2 from "../../Assets/Images/Shapes/about-2-shape-1.png";

import about1 from "../../Assets/Images/Shapes/ram.jpeg";
import section21 from "../../Assets/Images/homeBanner/amarnathh.jpeg";
import section22 from "../../Assets/Images/homeBanner/kedarnath.jpeg";
import section23 from "../../Assets/Images/homeBanner/ramMandir.png";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { blogItems } from "../../services/data";
function About() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          margin: 140,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          margin: 40,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          margin: 40,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          margin: 30,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          margin: 30,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          margin: 0,
        },
      },
    ],
  };

  return (
    <Layout
      title="About-us"
      discription={"About Sanatan sewanyas"}
      keywords={"sanatan,sanatan dharam"}
    >
      <section className="page-header">
        <div className="page-header__bg"></div>
        <div className="container">
          <ul className="sanatanSewaNyas-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>About</span>
            </li>
          </ul>
          <h2 className="page-header__title">About us</h2>
        </div>
      </section>
      <section className="about-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
              <div className="about-three__image">
                <img src={about1} alt="sanatanSewaNyas" height={"100px"} />
                <div className="about-three__image__inner">
                  <div className="about-three__image__left">
                    <img src={about2} alt="sanatanSewaNyas" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
              <div className="about-three__content">
                <div className="sec-title text-left">
                  <h6 className="sec-title__tagline">हमारे बारे मे।</h6>
                  <h3 className="sec-title__title">
                    निःस्वार्थ सेवा और सनातन ज्ञान से सशक्तिकरण।
                  </h3>
                </div>
                <p className="about-three__content__text">
                  सनातन सेवा न्याय, जिसको वर्ष 2020 में स्थापित किया गया, एक
                  एनजीओ है जो सेवा, करुणा और न्याय के सनातन सिद्धांतों पर आधारित
                  है। सनातन सेवा न्याय में, हम एक ऐसे समाज की कल्पना करते हैं
                  जहां प्रत्येक व्यक्ति को प्रगति करने और अपनी पूरी क्षमता तक
                  पहुंचने का अवसर मिलता हो। हमारा विसन हम एक संगठन के रूप में
                  सनातन धर्म के उन सिद्धांतों को बढ़ावा देने की दिशा में कार्य
                  करते हैं जो हमें अपने आप से, एक दूसरे से और पर्यावरण के साथ
                  अनुकूलता की ओर ले जाते हैं। निःस्वार्थ सेवा, सनातन ज्ञान और
                  अडिग न्याय के साथ, हम सहानुभूति और समझ की संस्कृति को पोषित
                  करने का लक्ष्य रखते हैं जहां हर व्यक्ति को पूर्ति और उद्देश्य
                  मिल सके।
                </p>
                <h4>हमारा विसन </h4>
                <p className="about-three__content__text">
                  हम एक संगठन के रूप में सनातन धर्म के उन सिद्धांतों को बढ़ावा
                  देने की दिशा में कार्य करते हैं जो हमें अपने आप से, एक दूसरे
                  से और पर्यावरण के साथ अनुकूलता की ओर ले जाते हैं। निःस्वार्थ
                  सेवा, सनातन ज्ञान और अडिग न्याय के साथ, हम सहानुभूति और समझ की
                  संस्कृति को पोषित करने का लक्ष्य रखते हैं जहां हर व्यक्ति को
                  पूर्ति और उद्देश्य मिल सके। हमारा मिशन * न्याय - जरूरतमंदों को
                  कानूनी और नैतिक समर्थन प्रदान करना, सभी के लिए निष्पक्षता और
                  न्याय सुनिश्चित करना। * सेवा - समाज के वंचित और पिछड़े वर्गों
                  की आवश्यकताओं को पूरा करने वाली निःस्वार्थ सामाजिक सेवा
                  गतिविधियों में शामिल होना। •ज्ञान - कार्यशालाओं, शैक्षिक
                  कार्यक्रमों और सांस्कृतिक दौरों और आयोजनों के माध्यम से सनातन
                  दर्शन के शाश्वत ज्ञान और बुद्धिमत्ता को बढ़ावा देना।
                </p>
                <h4>हमारा मिशन</h4>
                <p className="about-three__content__text">
                  * न्याय - जरूरतमंदों को कानूनी और नैतिक समर्थन प्रदान करना,
                  सभी के लिए निष्पक्षता और न्याय सुनिश्चित करना।<br></br> * सेवा
                  - समाज के वंचित और पिछड़े वर्गों की आवश्यकताओं को पूरा करने
                  वाली निःस्वार्थ सामाजिक सेवा गतिविधियों में शामिल होना।{" "}
                  <br></br>* ज्ञान - कार्यशालाओं, शैक्षिक कार्यक्रमों और
                  सांस्कृतिक दौरों और आयोजनों के माध्यम से सनातन दर्शन के शाश्वत
                  ज्ञान और बुद्धिमत्ता को बढ़ावा देना।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-one">
        <div className="container">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">Our volunteers</h6>
            <h3 className="sec-title__title">
              Meet the team behind the <br />
              success story
            </h3>
          </div>
          <div className="team-one__wrapper">
            <div
              className="team-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div className="team-card__image">
                <div className="team-card__image__bg"></div>
                <img src={section21} alt="Aleesha brown" />
                <div className="team-card__hover">
                  <div className="team-card__social">
                    <i className="fa fa-share-alt">
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                    <div className="team-card__social__list">
                      <a href="https://twitter.com/">
                        <FontAwesomeIcon icon={faXTwitter} size="lg" />
                      </a>
                      <a href="https://facebook.com/">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                      </a>

                      <a href="https://instagram.com/">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-card__content">
                <h3 className="team-card__title">Aleesha brown</h3>
                <p className="team-card__description">
                  There are many of lorem ipsum available but the have in some
                  form.
                </p>
              </div>
            </div>
            <div
              className="team-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="team-card__image">
                <div className="team-card__image__bg"></div>
                <img src={section22} alt="David cooper" />
                <div className="team-card__hover">
                  <div className="team-card__social">
                    <i className="fa fa-share-alt">
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                    <div className="team-card__social__list">
                      <a href="https://twitter.com/">
                        <FontAwesomeIcon icon={faXTwitter} size="lg" />
                      </a>
                      <a href="https://facebook.com/">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                      </a>

                      <a href="https://instagram.com/">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-card__content">
                <h3 className="team-card__title">David cooper</h3>
                <p className="team-card__description">
                  There are many of lorem ipsum available but the have in some
                  form.
                </p>
              </div>
            </div>
            <div
              className="team-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="team-card__image">
                <div className="team-card__image__bg"></div>
                <img src={section23} alt="Sarah albert" />
                <div className="team-card__hover">
                  <div className="team-card__social">
                    <i className="fa fa-share-alt">
                      <FontAwesomeIcon icon={faShareNodes} />
                    </i>
                    <div className="team-card__social__list">
                      <a href="https://twitter.com/">
                        <FontAwesomeIcon icon={faXTwitter} size="lg" />
                      </a>
                      <a href="https://facebook.com/">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                      </a>

                      <a href="https://instagram.com/">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-card__content">
                <h3 className="team-card__title">Sarah albert</h3>
                <p className="team-card__description">
                  There are many of lorem ipsum available but the have in some
                  form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-one">
        <div className="container">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">समाचार और लेख।</h6>
            <h3 className="sec-title__title">हमारे आगामी इवेंट्स</h3>
          </div>
          <Slider
            {...settings}
            className="blog-one__carousel sanatanSewaNyas-owl__carousel sanatanSewaNyas-owl__carousel--with-shadow sanatanSewaNyas-owl__carousel--basic-nav"
          >
            {blogItems.map((item, index) => (
              <div className="item" key={index}>
                <div
                  className="blog-card wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <div className="blog-card__date">{item.date}</div>
                  <div>
                    <img src={item.imgSrc} alt={item.altText} width={"100%"} />
                    <a href={item.link} className="blog-card__image__link">
                      <span className="sr-only">{item.altText}</span>
                    </a>
                  </div>
                  <div className="blog-card__content">
                    <ul className="list-unstyled blog-card__meta">
                      <li>
                        <i className="fa fa-user-circle"></i>By
                        <a href="blog.html">{item.author}</a>
                      </li>
                      <li>
                        <i className="fa fa-comments"></i>
                        {item.comments} Comments
                      </li>
                    </ul>
                    <h3 className="blog-card__title">
                      <a href={item.link}>{item.title}</a>
                    </h3>
                    <a href={item.link} className="blog-card__link">
                      Read more{" "}
                      <i className="icon-right-arrow">
                        <FontAwesomeIcon icon={faArrowRightLong} />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </Layout>
  );
}

export default About;
