import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router";
import { Link, useParams } from "react-router-dom";

import { API } from "../../config/api";

import Navbar from "../../components/navbar-in";
import { UserContext } from "../../context/userContext";

const User = () => {
  const [state, dispatch] = useContext(UserContext);
  const { id } = useParams();
  const history = useHistory();

  if (state.user.id != id) {
    history.push("/");
  }

  const {
    data: profileData,
    error: profileError,
    loading: profileLoading,
    refetch: profileRefetch,
  } = useQuery(["profileCache", id], async () => {
    return API.get(`/profile/${id}`);
  });

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
                  <img
                    src={profileData?.data?.data?.profile.avatar}
                    style={{ height: "300px", width: "250px" }}
                  />
                </div>
                <Link to={`/user/${state.user.id}/edit`}>
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
                <p>{profileData?.data?.data?.profile.name}</p>
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
                <p>{profileData?.data?.data?.profile.email}</p>
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
                <p>{profileData?.data?.data?.profile.phone}</p>
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
