import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import HomeBanner from "../../Components/HomeBanner";
import section21 from "../../Assets/Images/homeBanner/amarnathh.jpeg";
import about1 from "../../Assets/Images/Shapes/ram.jpeg";
import arrow1 from "../../Assets/Images/Shapes/video-btn-arrow.png";
import logo from "../../Assets/Images/Logo/snatan-seva-logo.png";
import {
  faArrowRightLong,
  faHandsPraying,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../Components/Layout";
import { blogItems, testimonials } from "../../services/data";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [templeData, setTempleData] = React.useState([]);
  const [eventData, setEventData] = React.useState([]);
  const getEvents = async () => {
    try {
      const response = await axios.get("/get-all-events");
      setEventData(response.data?.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const getTemples = async () => {
    try {
      const response = await axios.get("/get-all-temples");
      setTempleData(response.data?.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const testimonilos = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <span className="icon-long-right-arrow" />,
    prevArrow: <span className="icon-long-left-arrow" />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    getTemples();
    getEvents();
  }, []);
  const templesSlider = {
    slidesToShow: 3,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Layout>
      <HomeBanner />
      <section className="feature-three">
        <div className="container">
          <Slider {...templesSlider}>
            {templeData &&
              templeData.map((feature) => {
                console.log(feature);

                return (
                  <div key={feature._id} className="wow fadeInUp">
                    <div className="feature-three__item">
                      <div className="feature-three__item__inner">
                        <div className="feature-three__item__image">
                          <img
                            src={`http://localhost:8080/temples/${feature.mainImage.image}`}
                            alt="sanatanSewaNyas"
                          />
                          <div className="feature-three__item__icon">
                            <span className={`icon-health-care`}>
                              <FontAwesomeIcon
                                icon={faHandsPraying}
                                size="2xs"
                              />
                            </span>
                          </div>
                        </div>
                        <h3 className="feature-three__item__title">
                          {feature.title}
                        </h3>
                        <p className="feature-three__item__text">
                          {feature.shortdescription}
                        </p>

                        <Link
                          to={`/temple-detail/${feature._id}`}
                          className="feature-three__item__rm"
                          href={feature.link}
                        >
                          <span className="icon-long-right-arrow">
                            <FontAwesomeIcon icon={faArrowRightLong} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </section>

      {/* About us  */}
      <section className="about-two">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-lg-5 col-md-6 col-sm-10   wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="about-two__image">
                <img src={about1} alt="sanatanSewaNyas" />
              </div>
            </div>
            <div
              className="col-xl-6  col-lg-7 col-md-6 col-sm-12  wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="about-two__content">
                <div className="sec-title text-left">
                  <h6 className="sec-title__tagline">हमारे बारे मे।</h6>
                  <h3 className="sec-title__title">
                    निःस्वार्थ सेवा और सनातन ज्ञान से सशक्तिकरण।
                  </h3>
                </div>
                <p className="about-two__content__text">
                  सनातन सेवा न्याय, जिसको वर्ष 2020 में स्थापित किया गया, एक
                  एनजीओ है जो सेवा, करुणा और न्याय के सनातन सिद्धांतों पर आधारित
                  है। <br></br>हमारी टीम, कर्तव्य और सेवा की गहरी भावना से
                  प्रेरित होकर, सामाजिक कल्याण, शैक्षिक सशक्तिकरण और न्याय एवं
                  उत्तरदायित्व की वकालत के माध्यम से निचले वर्गों को उठाने के
                  लिए अथक प्रयास करती है।<br></br> सनातन सेवा न्याय में, हम एक
                  ऐसे समाज की कल्पना करते हैं जहां प्रत्येक व्यक्ति को प्रगति
                  करने और अपनी पूरी क्षमता तक पहुंचने का अवसर मिलता हो।
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="about-two__content__list">
                      <li>
                        <span>
                          <FontAwesomeIcon
                            icon={faHeart}
                            beat
                            style={{ color: "#FFD43B" }}
                          />
                        </span>
                        सनातन दर्शन और जीवन शैली को बढ़ावा देना।
                      </li>
                      <li>
                        <span>
                          <FontAwesomeIcon
                            icon={faHeart}
                            beat
                            style={{ color: "#FFD43B" }}
                          />
                        </span>
                        निःस्वार्थ सेवा को बढ़ावा देना।
                      </li>
                      <li>
                        <span>
                          <FontAwesomeIcon
                            icon={faHeart}
                            beat
                            style={{ color: "#FFD43B" }}
                          />
                        </span>
                        न्याय और उत्तरदायित्व को बढ़ावा देना।
                      </li>
                      <li>
                        <span>
                          <FontAwesomeIcon
                            icon={faHeart}
                            beat
                            style={{ color: "#FFD43B" }}
                          />
                        </span>
                        सनातन धर्म के शाश्वत ज्ञान और बुद्धिमत्ता को बढ़ावा
                        देना।
                      </li>
                    </ul>
                  </div>
                </div>

                <a href="about.html" className="sanatanSewaNyas-btn">
                  <span>अधिक जानें</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="donation-one donation-one--home-two">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sec-title text-center">
                <h6 className="sec-title__tagline">प्रसिद्ध सनातन मंदिर।</h6>
                <h3 className="sec-title__title">
                  अद्भुत प्राचीन मंदिरों की सैर।
                </h3>
              </div>
            </div>
          </div>
          <div className="row gutter-y-30">
            {templeData &&
              templeData.map((blog) => {
                <div
                  key={blog._id}
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="donation-one__item">
                    <a
                      href="donation-details.html"
                      className="donation-one__item__image"
                    >
                      <img src={blog.mainImage} alt="sanatan sewa nyas" />
                      <div className="donation-one__item__cats">
                        {blog.category}
                      </div>
                    </a>
                    <div className="donation-one__item__content">
                      <h3 className="donation-one__item__title">
                        <a href="donation-details.html">{blog.title}</a>
                      </h3>
                      <p className="donation-one__item__text">
                        {blog.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>;
              })}
          </div>
        </div>
      </section>
      <section className="event-one">
        <div className="container">
          <div className="row gutter-y-30 p-5">
            <div
              className="col-lg-4 col-md-12 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="sec-title text-left mt-4">
                <h6 className="sec-title__tagline">आगामी कार्यक्रम।</h6>
                <h3 className="sec-title__title">
                  हमारे आगामी कार्यक्रम और प्रोगाम।
                </h3>
              </div>
              <p className="event-one__text">
                हमारे आगामी कार्यक्रम जैसे कि कल्याण उपाय, शैक्षिक कार्यक्रम,
                सेमिनार, वर्कशॉप, सांस्कृतिक कार्यक्रम, त्योंहारों का उत्सव,
                इत्यादि के बारे में नियमित अपडेट्स के लिए हमारी वेबसाइट पर बने
                रहें।
              </p>
            </div>
            {eventData &&
              eventData.slice(0, 2).map((item) => {
                console.log(item);
                return (
                  <div
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="event-one__item">
                      <a
                        href="event-details.html"
                        className="event-one__item__image"
                      >
                        <img
                          src={`http://localhost:8080/events/${item.eventImage}`}
                          alt={item.title}
                        />
                      </a>
                      <div className="event-one__item__content">
                        <div className="event-one__item__date">
                          <img src={logo} alt="Logo" width={"60px"} />
                        </div>
                        <div className="event-one__item__content__bottom">
                          <ul className="event-one__item__meta">
                            <li>
                              <i className="fas fa-clock"></i>
                              {formatDate(item.startDate)}
                            </li>
                            <li>
                              <i className="fas fa-map-marker"></i>
                              {item.location.city}
                              {"  "}
                              {item.location.state}
                            </li>
                          </ul>
                          <h3 className="event-one__item__title">
                            <a href="event-details.html">{item.title}</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section className="funfact-two">
        <div
          className="funfact-two__bg jarallax"
          data-jarallax
          data-speed="0.3"
          data-imgPosition="50% -100%"
        ></div>
        <div className="container">
          <div className="row p-5">
            <div className="col-xl-8 col-lg-7 col-md-6">
              <div className="funfact-two__content">
                <a
                  href="www.youtube.com/@SanatanSewaNyas"
                  className="video-popup"
                >
                  <FontAwesomeIcon icon={faPlay} size="xl" />
                  <span className="video-popup__border-one"></span>
                  <span className="video-popup__border-two"></span>
                </a>
                <div className="funfact-two__content__shape">
                  <img src={arrow1} alt="sanatanSewaNyas" />
                </div>
                <div className="sec-title text-left">
                  <h6 className="sec-title__tagline">
                    आपका विश्वसनीय गैर-लाभकारी संस्थान।
                  </h6>
                  <h3 className="sec-title__title">
                    जानिए हमें क्या खास बनाता है।
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fund-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="fund-one__image">
                <img src={section21} alt="sanatanSewaNyas" />
              </div>
              <div className="row fund-one__cus-row">
                <div className="col-md-6">
                  <div className="fund-one__info">
                    <div className="fund-one__info__icon">
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <h3 className="fund-one__info__title">
                      Charity fundraising community
                    </h3>
                  </div>
                </div>
                <div className="col-md-6">
                  <p className="fund-one__info-text">
                    Lorem Ipsum. Proin gravin nibh vel velit nims. Aenean lorem
                    is simply quis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="fund-one__form-wrapper">
                <div
                  className="fund-one__form-wrapper__bg"
                  style={{
                    backgroundImage: "url(assets/images/shapes/fund-bg.png)",
                  }}
                ></div>
                <div className="sec-title text-center">
                  <h6 className="sec-title__tagline">दान करें।</h6>
                  <h3 className="sec-title__title">
                    एक बेहतर उद्देश्य के लिए सहयोग करें!
                  </h3>
                </div>
                <p className="fund-one__form-wrapper__text">
                  आपका उदार दान जीवनों को परिवर्तित कर सकता है और जरूरतमंद
                  समुदायों की मदद कर सकता है।
                </p>
                <form action="#" className="fund-one__form">
                  <div className="fund-one__form__amount">
                    <input type="text" value={""} placeholder="Name" />
                    <input type="email" value={""} placeholder="Email" />
                    <input type="tel" value={""} placeholder="Phone" />
                    <input
                      type="text"
                      value=""
                      name="donate_amount"
                      id="donate_amount"
                      placeholder="Amount"
                      className="fund-one__form__amount__input"
                    />
                    <span className="fund-one__form__amount__sign">INR</span>
                  </div>

                  <button type="submit" className="sanatanSewaNyas-btn">
                    <span>Donate Now</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="testimonials-two mt-5"
        style={{
          backgroundImage: "url(assets/images/shapes/testimonial-bg-2.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="testimonials-two__content">
                <div className="sec-title text-left">
                  <h6 className="sec-title__tagline">हमारे प्रशंसापत्र</h6>
                  <h3 className="sec-title__title">
                    सेवानिवृत्ति और दान की प्रेरणादायक कहानियाँ।
                  </h3>
                </div>

                <div className="testimonials-two__custome-navs"></div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="sanatanSewaNyas-stretch-element-inside-column">
                <Slider
                  {...testimonilos}
                  className="testimonials-two__carousel sanatanSewaNyas-owl__carousel sanatanSewaNyas-owl__carousel--with-shadow"
                >
                  {testimonials.map((testimonial, index) => (
                    <div className="item" key={index}>
                      <div className="testimonials-two__item">
                        <div className="testimonials-two__item__author">
                          <img src={section21} alt="sanatanSewaNyas" />
                        </div>

                        <div className="testimonials-two__item__ratings">
                          {Array(testimonial.rating)
                            .fill()
                            .map((_, i) => (
                              <span className="fa fa-star" key={i}></span>
                            ))}
                        </div>
                        <div>
                          <div className="testimonials-two__item__content">
                            {testimonial.content}
                          </div>
                          <h3 className="testimonials-two__item__meta">
                            {testimonial.author}
                          </h3>
                          <h2 className="testimonials-two__item__quatation">
                            “
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
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

export default Home;
