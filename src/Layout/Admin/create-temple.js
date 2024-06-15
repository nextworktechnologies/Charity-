import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";
import AdminMenu from "../../Components/Layout/SIdebar/adminSidenav";

const CreateTemple = () => {
  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [shortdescription, setShortdescription] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [sub1, setSub1] = useState("");
  const [sub2, setSub2] = useState("");
  const [sub3, setSub3] = useState("");
  const [location, setLocation] = useState("");
  const [establishedDate, setEstablishedDate] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [help, setHelp] = useState();
  const navigate = useNavigate();

  // ProductCreater
  const ProductCreater = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("title", title);
      productData.append("category", category);
      productData.append("mainImage", mainImage);
      productData.append("bannerImage", bannerImage);
      productData.append("sub1", sub1);
      productData.append("sub2", sub2);
      productData.append("sub3", sub3);
      productData.append("description", description);
      productData.append("shortdescription", shortdescription);
      productData.append("location", location);
      productData.append("establishedDate", establishedDate);
      productData.append("state", state);
      productData.append("city", city);
      productData.append("country", country);
      productData.append("help", help);

      const { data } = await axios.post("/create-temples", productData);

      if (data?.success) {
        toast.success("Temple Created Successfully");
        // navigate("/dashboard/admin/products");
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("some thing Went Wrong");
    }
  };
  return (
    <Layout title={"Create-Products Ecommerce-app"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="m-1 w-75 row">
              <form onSubmit={ProductCreater}>
                <div className="mb-3">
                  <label className="form-label fw-bold  fs-5   mb-3">
                    {"Banner Image"}
                    <input
                      className="btn btn-outline-secondary col-md-12 mt-3"
                      type="file"
                      accept="image/*"
                      placeholder="Please Select Picture"
                      onChange={(e) => setBannerImage(e.target.files[0])}
                    />
                  </label>
                </div>
                <div className="mb-3 col-md-12">
                  {bannerImage && (
                    <div className="text-center">
                      <img
                        className="img img-responsive"
                        src={URL.createObjectURL(bannerImage)}
                        alt={`Preview image `}
                        height={"500px"}
                        width={"100%"}
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label fw-bold  fs-5   mb-3">
                    {"Main Image"}
                    <input
                      className="btn btn-outline-secondary col-md-12 mt-3"
                      type="file"
                      accept="image/*"
                      placeholder="Please Select Picture"
                      onChange={(e) => setMainImage(e.target.files[0])}
                    />
                  </label>

                  {mainImage && (
                    <div className="text-center">
                      <img
                        className="img img-responsive"
                        src={URL.createObjectURL(mainImage)}
                        alt={`Preview image `}
                        height={"200px"}
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label fw-bold  fs-5   mb-3">
                    {"Sub1 Image"}
                    <input
                      className="btn btn-outline-secondary col-md-12 mt-3"
                      type="file"
                      accept="image/*"
                      placeholder="Please Select Picture"
                      onChange={(e) => setSub1(e.target.files[0])}
                    />
                  </label>
                  {sub1 && (
                    <div className="text-center">
                      <img
                        className="img img-responsive"
                        src={URL.createObjectURL(sub1)}
                        alt={`Preview image `}
                        height={"200px"}
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label fw-bold  fs-5   mb-3">
                    {"Sub2 Image"}
                    <input
                      className="btn btn-outline-secondary col-md-12 mt-3"
                      type="file"
                      accept="image/*"
                      placeholder="Please Select Picture"
                      onChange={(e) => setSub2(e.target.files[0])}
                    />
                  </label>
                  {sub2 && (
                    <div className="text-center">
                      <img
                        className="img img-responsive"
                        src={URL.createObjectURL(sub2)}
                        alt={`Preview image `}
                        height={"200px"}
                      />
                    </div>
                  )}
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label fw-bold  fs-5   mb-3">
                    {"Sub3 Image"}
                    <input
                      className="btn btn-outline-secondary col-md-12 mt-3"
                      type="file"
                      accept="image/*"
                      placeholder="Please Select Picture"
                      onChange={(e) => setSub3(e.target.files[0])}
                    />
                  </label>
                  {sub3 && (
                    <div className="text-center">
                      <img
                        className="img img-responsive"
                        src={URL.createObjectURL(sub3)}
                        alt={`Preview image `}
                        height={"200px"}
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
                      onChange={(e) => setdescription(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label fw-bold  fs-5   mb-3">
                    {"Short description"}
                    <input
                      type="text"
                      className="form-control input-width"
                      placeholder="Please Enter Short description"
                      value={shortdescription}
                      onChange={(e) => setShortdescription(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label fw-bold  fs-5   mb-3">
                    {"Location"}
                    <input
                      type="text"
                      className="form-control input-width"
                      placeholder="Please Enter Location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label fw-bold  fs-5   mb-3">
                    {"Established Date"}
                    <input
                      type="date"
                      className="form-control input-width"
                      placeholder="Please Enter Established Date"
                      value={establishedDate}
                      onChange={(e) => setEstablishedDate(e.target.value)}
                    />
                  </label>
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label fw-bold  fs-5   mb-3">
                    {"State"}
                    <input
                      type="text"
                      className="form-control input-width"
                      placeholder="Please Enter State"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label fw-bold  fs-5   mb-3">
                    {"City"}
                    <input
                      type="text"
                      className="form-control input-width"
                      placeholder="Please Enter State"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </label>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label fw-bold  fs-5   mb-3">
                    {"Country"}
                    <input
                      type="text"
                      className="form-control input-width"
                      placeholder="Please Enter Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
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
                <div className="mb-3 col-md-12">
                  <label className="form-label fw-bold  fs-5   mb-3">
                    {"Help"}
                    <input
                      type="url"
                      className="form-control input-width"
                      placeholder="Please Enter Help"
                      value={help}
                      onChange={(e) => setHelp(e.target.value)}
                    />
                  </label>
                </div>
              </form>

              {/* <div className="mb-3">
                <button
                  className="btn btn-primary col-md-12"
                  onClick={ProductCreater}
                >
                  Create Product
                </button> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateTemple;
