import React, { useState } from "react";
import Navbar from "../components/navbar-in";

const EditUser = () => {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />

      <div className="profile">
        <h2>Edit Profile</h2>
        <div className="d-flex justify-content-between mt-3">
          <div style={{ width: "85%" }}>
            <input
              type="text"
              name="fullname"
              value={user.fullname}
              className="form-control"
              placeholder="Full Name"
              onChange={handleChange}
            ></input>
          </div>
          <div className="">
            <button className="btn btn-md attach">
              Attach File <img src="/img/files.png" />{" "}
              <input type="file" hidden />
            </button>
          </div>
        </div>

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          className="form-control mt-3"
        ></input>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="form-control mt-3"
        ></input>

        <div className="d-flex justify-content-between mt-3">
          <input
            placeholder="Location"
            className="form-control"
            type="text"
            name="location"
            value={user.location}
            onChange={handleChange}
          ></input>
          <button className="location-btn btn btn-md">Select On Map</button>
        </div>
        <div className="justify-content-end d-flex ">
          <button className="btn btn-lg btn-primary mt-5 save">Save</button>
        </div>
        <pre> {JSON.stringify(user, 2, null)}</pre>
      </div>
    </div>
  );
};

export default EditUser;
