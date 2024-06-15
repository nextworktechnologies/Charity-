import Layout from "../../Components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchEvents = async () => {
    try {
      const response = await axios.get("/get-all-events");
      setEvents(response.data?.data);
    } catch (err) {
      setError("Failed to fetch Events");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <Layout
      title="Events"
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
          <h2 className="page-header__title">Events Page</h2>
        </div>
      </section>
      <section className="blog-one blog-one--page">
        <div className="container">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : events.length === 0 ? (
            <p>No Events found</p>
          ) : (
            <div className="row gutter-y-30">
              {events.length > 0 &&
                events.map((event, index) => (
                  <div className="col-md-6 col-lg-4  key={index}">
                    <div
                      className="blog-card wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay="00ms"
                    >
                      <div className="blog-card__date">{event.startDate}</div>
                      <div className="blog-card__image">
                        <img
                          src={`http://localhost:8080/events/${event.eventImage}`}
                          alt={event.title}
                        />
                        <img
                          src={`http://localhost:8080/events/${event.eventImage}`}
                          alt={event.title}
                        />
                      </div>
                      <div className="blog-card__content">
                        <ul className="list-unstyled blog-card__meta">
                          <li>
                            <i className="fa fa-user-circle"></i>
                            <a href="blog.html">{event.organizer}</a>
                          </li>
                          <li>
                            <i className="fa fa-comments"></i>
                            {event.location.city}
                          </li>
                          <li>
                            <i className="fa fa-comments"></i>
                            {event.location.state}
                          </li>
                        </ul>
                        <h3 className="blog-card__title">
                          <a href="blog-details.html">{event.title}</a>
                        </h3>
                        <Link
                          to={`/event-detail/${event._id}`}
                          className="blog-card__link"
                        >
                          Read more
                          <i className="icon-right-arrow">
                            {" "}
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

export default Events;
