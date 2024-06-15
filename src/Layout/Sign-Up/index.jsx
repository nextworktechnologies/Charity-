import React, { useState } from "react";
import axios from "axios";
import Layout from "../../Components/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/authContext";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [location, setlocation] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const location = useLocation();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/register-member", {
        name,
        email,
        password,
        designation,
        location,
        state,
        city,
        country,
        phone,
      });

      localStorage.setItem("auth", JSON.stringify(response.data));
      navigate("/dashboard/create-temple");
      toast.success(response.data.message);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "An error occurred");
        localStorage.clear();
      } else {
        setError("An error occurred. Please try again later.");
        localStorage.clear();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      title="Sign-Up"
      discription={"Become a member of sanatan sewanyas "}
      keywords={"Sign-up Sanatan Sewanyas"}
    >
      <section className="page-header">
        <div className="page-header__bg"></div>
        <div className="container">
          <ul className="sanatanSewaNyas-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Sign-Up</span>
            </li>
          </ul>
          <h2 className="page-header__title">Sign-Up Page</h2>
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
            <div className="row justify-content-center">
              <div className="col-xl-9">
                <div className="sec-title text-left text-center">
                  <h6 className="sec-title__tagline">Contact with us</h6>
                  <h3 className="sec-title__title">
                    Feel free to write anytime
                  </h3>
                </div>
                <form
                  className="contact-one__form contact-form-validated wow fadeInUp"
                  data-wow-duration="1500ms"
                  onSubmit={handleSubmit}
                >
                  <div className="form-one__group">
                    <div className="form-one__control">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-one__control">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-one__control">
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-one__control">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-one__control">
                      <input
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-one__control">
                      <input
                        type="text"
                        name="location"
                        placeholder="Location "
                        value={location}
                        onChange={(e) => setlocation(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-one__control">
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-one__control">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-one__control">
                      <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                      />
                    </div>

                    {error && <div className="error-message">{error}</div>}
                    <div className="form-one__control form-one__control--full">
                      <button
                        type="submit"
                        className="sanatanSewaNyas-btn"
                        disabled={loading}
                        onClick={handleSubmit}
                      >
                        <span>{loading ? "Loading..." : "Register"}</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default SignUp;
