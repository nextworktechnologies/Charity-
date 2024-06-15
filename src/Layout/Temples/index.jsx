import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Temples() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/get-all-temples");
      setBlogs(response.data?.data);
    } catch (err) {
      setError("Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Layout title="Temples" discription="Hindu Temple" keywords="Hindu Temple">
      <section className="page-header">
        <div className="page-header__bg"></div>
        <div className="container">
          <ul className="sanatanSewaNyas-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Temples</span>
            </li>
          </ul>
          <h2 className="page-header__title">Temples Page</h2>
        </div>
      </section>
      <section className="blog-one blog-one--page">
        <div className="container">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : blogs.length === 0 ? (
            <p>No temples found</p>
          ) : (
            <div className="row gutter-y-30">
              {blogs.length > 0 &&
                blogs.map((blog, index) => (
                  <div key={index} className="col-md-6 col-lg-4">
                    <div
                      className="blog-card wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="00ms"
                    >
                      <div className="blog-card__date">{blog.date}</div>
                      <div className="blog-card__image">
                        <img src={blog.image} alt={blog.title} />
                        <a
                          href={`blog-details.html?id=${blog.id}`}
                          className="blog-card__image__link"
                        >
                          <span className="sr-only">{blog.title}</span>
                        </a>
                      </div>
                      <div className="blog-card__content">
                        <ul className="list-unstyled blog-card__meta">
                          <li>
                            <i className="fa fa-user-circle"></i>By{" "}
                            <a href="blog.html">{blog.author}</a>
                          </li>
                          <li>
                            <i className="fa fa-comments"></i>
                            {blog.comments} Comments
                          </li>
                        </ul>
                        <h3 className="blog-card__title">
                          <Link to={`/temple-detail/${blog.id}`}>
                            {blog.title}
                          </Link>
                        </h3>
                        <Link
                          to={`/temple-detail/${blog.id}`}
                          className="blog-card__link"
                        >
                          Read more
                          <i className="icon-right-arrow">
                            <FontAwesomeIcon icon={faArrowRightLong} />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Temples;
