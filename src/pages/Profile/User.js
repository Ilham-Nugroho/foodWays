import React from "react";
import Navbar from "../../components/navbar-in";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div>
      <Navbar />
      <div className="profile ">
        <div className="d-flex profile-content">
          <div className="profile-bio">
            <h2
              style={{
                fontWeight: "800",
                fontSize: "36px",
              }}
            >
              My Profile
            </h2>
            <div className="d-flex mt-3">
              <div>
                <div>
                  <img src="/img/profpic.png" />
                </div>
                <Link to="/user/edit">
                  <button className="btn btn-md edit-profile mt-3">
                    Edit Profile
                  </button>
                </Link>
              </div>
              <div className="profile-bio-data pl-3">
                <p
                  style={{
                    color: "#613D2B",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  Full Name
                </p>
                <p>Andi</p>
                <br />
                <p
                  style={{
                    color: "#613D2B",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  Email
                </p>
                <p>andigans@gmail.com</p>
                <br />
                <p
                  style={{
                    color: "#613D2B",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  Phone
                </p>
                <p>081234567899</p>
              </div>
            </div>
          </div>

          <div>
            <div className="profile-history ">
              <h2
                style={{
                  fontWeight: "800",
                  fontSize: "36px",
                }}
              >
                My Transaction History
              </h2>
              <div className="history-transaction mt-3">
                <div>
                  <p
                    style={{
                      fontWeight: "700",
                      fontSize: "14px",
                    }}
                  >
                    Geprek Bensu
                  </p>
                  <p>
                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      Senin,{" "}
                    </span>
                    12 Maret 2021
                  </p>
                  <br />
                  <p
                    style={{
                      fontWeight: "700",
                      fontSize: "14px",
                    }}
                  >
                    Total: Rp. 45000
                  </p>
                </div>
                <div className="history-status">
                  <img src="/img/orderlogo.png" />
                  <img src="/img/finish.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
