import React, { useState } from "react";
import { Modal } from "react-bootstrap";

import Navbar from "../../components/navbar-in";
import Map from "../../components/mapBox";

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

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <Navbar />

      <div className="profile">
        <h2>Edit Profile</h2>
        <div className="d-flex justify-content-between mt-3">
          <div style={{ width: "81%" }}>
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
            <button
              className="btn btn-sm attach"
              style={{
                backgroundColor: "#e5e5e5",
                color: "black",
                borderColor: "black",
              }}
            >
              <label className="d-flex pt-2" style={{ fontSize: "15px" }}>
                Attach File
                <img
                  className=" pl-2"
                  src="/img/files.png"
                  style={{ height: "20px" }}
                />
                <input type="file" hidden />
              </label>
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
          <button
            className="location-btn btn btn-md"
            onClick={() => {
              setShow(true);
            }}
          >
            Select On Map
          </button>
        </div>
        <div className="justify-content-end d-flex ">
          <button className="btn btn-lg btn-primary mt-5 save">Save</button>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        style={{ height: "600px" }}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Map />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditUser;
