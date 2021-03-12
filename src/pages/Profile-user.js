import React from "react";

const ProfileUser = () => {
  return (
    <div className="profile">
      <div>
        <div>
          <input
            type="text"
            name="fullname"
            className="form-control"
            placeholder="Full Name"
          >
            Fullname
          </input>
        </div>
        <input type="file"></input>
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-control"
      >
        Email
      </input>
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        className="form-control"
      >
        Phone
      </input>

      <div className="location-btn">
        <input>Location</input>
        <button>Select On Map</button>
      </div>
    </div>
  );
};

export default ProfileUser;
