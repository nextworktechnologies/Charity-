import React from "react";
import Layout from "../../Components/Layout";
function Donation() {
  const donations = [
    {
      delay: "100ms",
      category: "Education",
      title: "Educate childrens to get good life",
      text: "There are many of lorem, but majori have suffered alteration in some form.",
      percent: "36%",
      raised: "$25,270",
      goal: "$30,000",
      image: "assets/images/resources/donation-1-1.jpg",
    },
    {
      delay: "200ms",
      category: "Medical",
      title: "Protect poor & give them medical help",
      text: "There are many of lorem, but majori have suffered alteration in some form.",
      percent: "50%",
      raised: "$25,270",
      goal: "$30,000",
      image: "assets/images/resources/donation-1-2.jpg",
    },
    {
      delay: "300ms",
      category: "Food",
      title: "Raise funds for clean and healthy water",
      text: "There are many of lorem, but majori have suffered alteration in some form.",
      percent: "66%",
      raised: "$25,270",
      goal: "$30,000",
      image: "assets/images/resources/donation-1-3.jpg",
    },
    {
      delay: "400ms",
      category: "Education",
      title: "Educate childrens to get good life",
      text: "There are many of lorem, but majori have suffered alteration in some form.",
      percent: "36%",
      raised: "$25,270",
      goal: "$30,000",
      image: "assets/images/resources/donation-1-4.jpg",
    },
    {
      delay: "500ms",
      category: "Medical",
      title: "Protect poor & give them medical help",
      text: "There are many of lorem, but majori have suffered alteration in some form.",
      percent: "50%",
      raised: "$25,270",
      goal: "$30,000",
      image: "assets/images/resources/donation-1-5.jpg",
    },
    {
      delay: "600ms",
      category: "Food",
      title: "Raise funds for clean and healthy water",
      text: "There are many of lorem, but majori have suffered alteration in some form.",
      percent: "66%",
      raised: "$25,270",
      goal: "$30,000",
      image: "assets/images/resources/donation-1-6.jpg",
    },
  ];
  const DonationItem = ({
    delay,
    category,
    title,
    text,
    percent,
    raised,
    goal,
    image,
  }) => (
    <div className={`col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={delay}>
      <div className="donation-one__item">
        <a href="donation-details.html" className="donation-one__item__image">
          <img src={image} alt="sanatanSewaNyas" />
          <div className="donation-one__item__cats">{category}</div>
        </a>
        <div className="donation-one__item__content">
          <h3 className="donation-one__item__title">
            <a href="donation-details.html">{title}</a>
          </h3>
          <p className="donation-one__item__text">{text}</p>
        </div>
      </div>
    </div>
  );
  return (
    <Layout
      title="Donation"
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
          <h2 className="page-header__title">Donation</h2>
        </div>
      </section>
      <section className="donation-one donation-one--page">
        <div className="container">
          <div className="row gutter-y-30">
            {donations.map((donation, index) => (
              <DonationItem key={index} {...donation} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Donation;
