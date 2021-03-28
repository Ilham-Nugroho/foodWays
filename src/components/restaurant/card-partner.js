import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../context/userContext";

const CardPartner = ({ profile, fromMenu }) => {
  const { id, name, avatar, location } = profile;
  const history = useHistory();
  const [state, dispatch] = useContext(UserContext);

  return (
    <div>
      <div className="card">
        <img
          style={{ height: "200px", width: "100%" }}
          src={avatar}
          onClick={() => {
            state.isLogin
              ? fromMenu
                ? history.push(`/${id}/menu`)
                : history.push("/")
              : history.push("/");
          }}
        />
        <div style={{ height: "40px" }} className="mt-3">
          <h5 style={{ fontWeight: "700" }}>{name}</h5>
        </div>

        <p>{location}</p>
        {/* <button className="btn btn-md order-btn">Order</button> */}
      </div>
    </div>
  );
};

export default CardPartner;
