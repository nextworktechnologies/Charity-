import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";
import AdminMenu from "../../Components/Layout/SIdebar/adminSidenav";

const CreateEvents = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [organizer, setOrganizer] = useState("");
  const navigate = useNavigate();

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setLocation((prevLocation) => ({
      ...prevLocation,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("city", location.city);
    formData.append("state", location.state);
    formData.append("country", location.country);
    formData.append("zipcode", location.zipcode);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("organizer", organizer);
    formData.append("category", category);
    if (eventImage) {
      formData.append("eventImage", eventImage);
    }

    try {
      const response = await axios.post("/create-event", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Event created successfully:", response.data);
      navigate("/events"); // Redirect after successful event creation
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };
  return (
    <Layout title={"Create-Events Ecommerce-app"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Events</h1>
            <div className="m-1 w-75 row">
              <div className="mb-3">
                <label className="form-label fw-bold  fs-5   mb-3">
                  {"Event Image"}
                  <input
                    className="btn btn-outline-secondary col-md-12 mt-3"
                    type="file"
                    accept="image/*"
                    placeholder="Please Select Picture"
                    onChange={(e) => setEventImage(e.target.files[0])}
                  />
                </label>
              </div>
              <div className="mb-3 col-md-12">
                {eventImage && (
                  <div className="text-center">
                    <img
                      className="img img-responsive"
                      src={URL.createObjectURL(eventImage)}
                      alt={`Preview image `}
                      height={"500px"}
                      width={"100%"}
                    />
                  </div>
                )}
              </div>
              <div className="mb-3 mt-4 col-md-6">
                <label className="form-label fw-bold  fs-5   mb-3">
                  {"Title"}
                  <input
                    type="text"
                    className="form-control   input-width"
                    placeholder="Please Enter Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </label>
              </div>
              <div className="mb-3 mt-4 col-md-6">
                <label className="form-label fw-bold  fs-5   mb-3">
                  {"description"}
                  <input
                    type="text"
                    className="form-control input-width"
                    placeholder="Please Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </label>
              </div>
              <div className="mb-3 mt-4 col-md-6">
                <label className="form-label fw-bold  fs-5   mb-3">
                  {"Organization"}
                  <input
                    type="text"
                    className="form-control input-width"
                    placeholder="Please Enter description"
                    value={organizer}
                    onChange={(e) => setOrganizer(e.target.value)}
                  />
                </label>
              </div>

              <div className="mb-3 col-md-6">
                <label className="form-label fw-bold  fs-5   mb-3">
                  {"City"}
                  <input
                    type="text"
                    placeholder="City"
                    name="city"
                    value={location.city}
                    onChange={handleLocationChange}
                    required
                  />
                </label>
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label fw-bold  fs-5   mb-3">
                  {"state"}
                  <input
                    type="text"
                    placeholder="state"
                    name="state"
                    value={location.state}
                    onChange={handleLocationChange}
                    required
                  />
                </label>
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label fw-bold  fs-5   mb-3">
                  {"Country"}
                  <input
                    type="text"
                    placeholder="country"
                    name="country"
                    value={location.country}
                    onChange={handleLocationChange}
                    required
                  />
                </label>
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label fw-bold  fs-5   mb-3">
                  {"zipcode/pincode"}
                  <input
                    type="text"
                    placeholder="zipcode"
                    name="zipcode"
                    value={location.zipcode}
                    onChange={handleLocationChange}
                    required
                  />
                </label>
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label fw-bold  fs-5   mb-3">
                  {"Start Date"}
                  <input
                    type="date"
                    className="form-control input-width"
                    placeholder="Please Enter Established Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </label>
              </div>
              <div className="mb-3 col-md-6">
                <label className="form-label fw-bold  fs-5   mb-3">
                  {"End Date"}
                  <input
                    type="date"
                    className="form-control input-width"
                    placeholder="Please Enter Established Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </label>
              </div>

              <div className="mb-3 col-md-6">
                <label className="form-label fw-bold  fs-5   mb-3">
                  {"Category"}
                  <input
                    type="text"
                    className="form-control input-width"
                    placeholder="Please Enter Country"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </label>
              </div>

              <div className="mb-3">
                <button
                  className="btn btn-primary col-md-12"
                  onClick={handleSubmit}
                >
                  Create Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateEvents;
