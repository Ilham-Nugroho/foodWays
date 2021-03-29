import React, { useState, useContext } from "react";

import { useHistory } from "react-router";
import { useQuery, useMutation } from "react-query";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

import { API } from "../../config/api";

import Navbar from "../../components/navbar-in";
import { UserContext } from "../../context/userContext";

const EditPartner = () => {
  const [state, dispatch] = useContext(UserContext);
  const { id } = useParams();
  const history = useHistory();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    avatar: null,
  });

  const { name, phone, location, avatar } = form;

  const {
    data: profileData,
    error: profileError,
    loading: profileLoading,
    refetch: profileRefetch,
  } = useQuery(["editProfileCache", id], async () => {
    return API.get(`/profile/${id}`);
  });

  if (id != state.user.id) {
    history.push("/");
  }

  const updateProfile = useMutation(async () => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const body = new FormData();

    body.append("name", name);
    body.append("phone", phone);
    body.append("location", location);
    body.append("imageFile", avatar);

    await API.patch(`/profile/${state.user.id}`, body, config);
    profileRefetch();
  });

  const handleChange = (event) => {
    const tempForm = { ...form };

    tempForm[event.target.name] =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    setForm(tempForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updateProfile.mutate();

    setForm({
      name: "",
      phone: "",
      location: "",
      avatar: null,
    });
  };

  return (
    <div style={{ backgroundColor: " #e5e5e5" }} className="pb-5">
      <div className="bg-color-full ">
        <Navbar />

        <div className="profile ">
          <form onSubmit={(event) => handleSubmit(event)}>
            <h2>Edit Partner</h2>
            <div className="mt-4 form-group">
              <label style={{ fontWeight: "600", fontSize: "18px" }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                placeholder="Full Name"
                onChange={(event) => handleChange(event)}
              ></input>
            </div>

            <div className="form-group mt-4">
              <label style={{ fontWeight: "600", fontSize: "18px" }}>
                Avatar
              </label>
              <div>
                <input
                  type="file"
                  onChange={(event) => handleChange(event)}
                  name="avatar"
                  className="form-control"
                />
              </div>
            </div>

            <div className="mt-4">
              <label style={{ fontWeight: "600", fontSize: "18px" }}>
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(event) => handleChange(event)}
                placeholder="Phone"
                className="form-control"
              ></input>
            </div>

            <div className="mt-4">
              <label style={{ fontWeight: "600", fontSize: "18px" }}>
                Location
              </label>
              <div className="d-flex justify-content-between">
                <input
                  placeholder="Location"
                  className="form-control"
                  type="text"
                  name="location"
                  value={location}
                  onChange={(event) => handleChange(event)}
                ></input>
                <button className="location-btn btn btn-md">
                  Select On Map
                </button>
              </div>
            </div>
            <div className="justify-content-end d-flex ">
              <button className="btn btn-lg btn-primary mt-5 save">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPartner;
