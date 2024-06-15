import React, { useState } from "react";
import axios from "axios";
import Layout from "../../Components/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../Context/authContext";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/auth/login", {
        email,
        password,
      });
      setAuth({
        ...auth,
        user: response.data?.data.user,
        token: response.data?.data.token,
      });
      localStorage.setItem("auth", JSON.stringify(response.data));
      navigate(location.state || "/dashboard/create-temple");
      toast.success(response.data.massage);
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
      title="Sign-In"
      discription={"Become a member of sanatan sewanyas "}
      keywords={"Sign-in Sanatan Sewanyas"}
    >
      <section className="page-header">
        <div className="page-header__bg"></div>
        <div className="container">
          <ul className="sanatanSewaNyas-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>Sign-In</span>
            </li>
          </ul>
          <h2 className="page-header__title">Sign-In Page</h2>
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
                        type="email"
                        name="email"
                        placeholder="Email address"
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
                    {error && <div className="error-message">{error}</div>}
                    <div className="form-one__control form-one__control--full">
                      <button
                        type="submit"
                        className="sanatanSewaNyas-btn"
                        disabled={loading}
                      >
                        <span>{loading ? "Loading..." : "Login"}</span>
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

export default SignIn;
