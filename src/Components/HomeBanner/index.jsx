import React from "react";
import Slider from "react-slick";
import img1 from "../../Assets/Images/homeBanner/ramMandir.png";
import img2 from "../../Assets/Images/homeBanner/kedarnath.jpeg";
import img3 from "../../Assets/Images/homeBanner/amarnathh.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBanner = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true, // Equivalent to "nav"
    prevArrow: <span className="icon-long-left-arrow slick-prev"></span>,
    nextArrow: <span className="icon-long-right-arrow slick-next"></span>,
  };

  const slides = [
    {
      backgroundImage: img1,
      subTitle: "Start donating them now",
      title: "education contributes to a better life",
      buttonText: "Discover more",
      buttonLink: "about.html",
      text: "Let’s you can be a part of changes in the world",
    },
    {
      backgroundImage: img2,
      subTitle: "Start donating them now",
      title: "education contributes to a better life 22222",
      buttonText: "Discover more",
      buttonLink: "about.html",
      text: "Let’s you can be a part of changes in the world 33333",
    },
    {
      backgroundImage: img3,
      subTitle: "Start donating them now",
      title: "education contributes to a better life 444444",
      buttonText: "Discover more",
      buttonLink: "about.html",
      text: "Let’s you can be a part of changes in the world",
    },
  ];

  return (
    <section className="main-slider-two">
      <Slider {...sliderSettings} className="main-slider-two__carousel">
        {slides.map((slide, index) => (
          <div className="item" key={index}>
            <div className="main-slider-two__item">
              <div
                className="main-slider-two__bg"
                style={{
                  backgroundImage: `url(${slide.backgroundImage})
                
                `,
                  height: "100vh",
                }}
              ></div>

              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    {/* <div className="slider-content">
                      <h5 className="slider-content__sub-title">
                        {slide.subTitle}
                      </h5>
                      <h2
                        className="slider-content__title"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                      <div className="slider-content__btn">
                        <a href={slide.link} className="sanatanSewaNyas-btn">
                          <span>Discover more</span>
                        </a>
                        <p
                          className="slider-content__text"
                          dangerouslySetInnerHTML={{ __html: slide.text }}
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomeBanner;
