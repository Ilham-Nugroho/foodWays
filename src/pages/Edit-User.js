import React, { useState } from "react";
import Navbar from "../components/navbar-in";

const EditUser = () => {
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
              className="form-control"
              placeholder="Full Name"
            ></input>
          </div>
          <div className="">
            <label className="btn btn-warning ">
              Attach File <img src="../img/files.png" />{" "}
              <input type="file" hidden />
            </label>
          </div>
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mt-3"
        ></input>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className="form-control mt-3"
        ></input>

        <div className="d-flex justify-content-between mt-3">
          <input
            placeholder="Location"
            className="form-control"
            type="text"
            name="location"
          ></input>
          <button className="location-btn ">Select On Map</button>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
