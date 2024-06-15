import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title, discription, keywords, author }) => {
  return (
    <>
      <Header />
      <Helmet>
        <meta name="description" content={discription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Sanatan sewanyas",
  discription: "Hindu temples",
  keywords: "Sanskriti , Hindu",
  author: "Shivom Mishra",
};
export default Layout;
