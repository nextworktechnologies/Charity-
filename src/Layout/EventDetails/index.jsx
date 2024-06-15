import React, { useEffect } from "react";
import Layout from "../../Components/Layout";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import member from "../../Assets/Images/Shapes/about-2-1.jpg";
function EventDetail() {
  const [eventData, setEventData] = React.useState([]);
  const { id } = useParams();
  const getEvent = async () => {
    try {
      const response = await axios.get(`/get-event/${id}`);

      setEventData(response.data?.data[0]);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getEvent();
  }, []);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Layout
      title="Event-Details"
      discription={"Events of  Sanatan sewanyas"}
      keywords={"Events Sanatan Sewanyas"}
    >
      <section className="page-header">
        <div className="page-header__bg"></div>
        <div className="container">
          <ul className="sanatanSewaNyas-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Events</span>
            </li>
          </ul>
          <h2 className="page-header__title">{eventData.title}</h2>
        </div>
      </section>
      <section className="blog-details">
        <div className="container">
          <div key={eventData._id} className="row gutter-y-60">
            <div className="col-lg-8">
              <div className="blog-details__content">
                <div className="blog-details__image">
                  <img
                    src={`http://localhost:8080/events/${eventData.eventImage}`}
                    alt={eventData.title}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <div className="blog-card__date">
                    Start Date -- {formatDate(eventData.startDate)}
                  </div>{" "}
                  {"           "}
                  <div className="blog-card__date">
                    End Date -- {formatDate(eventData.endDate)}
                  </div>
                </div>
                <h3 className="blog-details__title">{eventData.title}</h3>
                <h5>{eventData.organizer}</h5>
                <p className="blog-details__text">{eventData.description}</p>
                <ul className="list-unstyled blog-details__paginations">
                  <li className="blog-details__paginations__item">
                    <div className="blog-details__paginations__image">
                      <img src={member} alt="blog" />
                    </div>
                    <div className="blog-details__paginations__content">
                      <h4 className="blog-details__paginations__title">
                        <a href="blog-details.html">
                          It is important to support poor people
                        </a>
                      </h4>
                    </div>
                  </li>
                  <li className="blog-details__paginations__item">
                    <div className="blog-details__paginations__image">
                      <img src={member} alt="blog" />
                    </div>
                    <div className="blog-details__paginations__content">
                      <h4 className="blog-details__paginations__title">
                        <a href="blog-details.html">
                          Get deep knowledge of your beauty
                        </a>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <aside className="widget-area">
                  <div className="sidebar__single">
                    <h4 className="sidebar__title">Commite Member</h4>
                    <ul className="sidebar__posts list-unstyled">
                      <li className="sidebar__posts__item">
                        <div className="sidebar__posts__image">
                          <img src={member} alt="blog" />
                        </div>
                        <div className="sidebar__posts__content">
                          <h4 className="sidebar__posts__title">
                            <a href="blog-details.html">Rajat Rai</a>
                          </h4>
                          <p> Chief</p>
                        </div>
                      </li>
                      <li className="sidebar__posts__item">
                        <div className="sidebar__posts__image">
                          <img src={member} alt="blog" />
                        </div>
                        <div className="sidebar__posts__content">
                          <h4 className="sidebar__posts__title">
                            <a href="blog-details.html">Suraj Rao</a>
                          </h4>
                          <p> Expert</p>
                        </div>
                      </li>
                      <li className="sidebar__posts__item">
                        <div className="sidebar__posts__image">
                          <img src={member} alt="blog" />
                        </div>
                        <div className="sidebar__posts__content">
                          <h4 className="sidebar__posts__title">
                            <a href="blog-details.html">Abhay Panjla</a>
                          </h4>
                          <p> Chief</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar__single">
                    <h4 className="sidebar__title">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: "#470604" }}
                      />{" "}
                      Location
                    </h4>
                    <ul className="sidebar__categories list-unstyled">
                      <li>
                        <a href="blog.html">
                          <span> City : </span> {eventData.location?.city}
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          {" "}
                          <span> State : </span> {eventData.location?.state}
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          {" "}
                          <span> Country : </span> {eventData.location?.country}
                        </a>
                      </li>
                      <li>
                        <a href="blog.html">
                          {" "}
                          <span> Postal Code : </span>{" "}
                          {eventData.location?.zipcode}
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default EventDetail;
