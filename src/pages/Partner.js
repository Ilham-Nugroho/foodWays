import React from "react";
import Navbar from "../components/navbar-in";
import { Link } from "react-router-dom";

const Partner = () => {
  return (
    <div>
      <Navbar />
      <div className="profile ">
        <div className="d-flex profile-content">
          <div className="profile-bio">
            <h2>Profile Partner</h2>
            <div className="d-flex mt-3">
              <div>
                <div>
                  <img src="/img/bensu.png" />
                </div>
                <Link to="/user/edit">
                  <button className="btn btn-md edit-profile mt-3">
                    Edit Profile
                  </button>
                </Link>
              </div>
              <div className="profile-bio-data">
                <p>Partner Name</p>
                <p>Geprek Bensu</p>
                <br />
                <p>Email</p>
                <p>bensu@gmail.com</p>
                <br />
                <p>Phone</p>
                <p>089876543211</p>
              </div>
            </div>
          </div>

          <div>
            <div className="profile-history ">
              <h2>Order History</h2>
              <div className="history-transaction mt-3">
                <div>
                  <p>Andi</p>
                  <p>12 Maret 2021</p>
                  <br />
                  <p>Total: Rp. 45000</p>
                </div>
                <div className="history-status">
                  <img src="/img/orderlogo.png" />
                  <p>Finished </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
