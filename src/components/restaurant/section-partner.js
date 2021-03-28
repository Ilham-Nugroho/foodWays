import React, { useState, useContext } from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";

import { UserContext } from "../../context/userContext";

import { Spinner } from "react-bootstrap";

import CardPartner from "./card-partner";

import { API, setAuthToken } from "../../config/api";

export const SectionPartner = () => {
  const router = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const { id } = useParams();

  const {
    data: partnerData,
    error: partnertError,
    loading: partnerLoading,
  } = useQuery("restoCache", async () => {
    return API.get(`/profile-partners`);
  });

  return (
    <div>
      <div>
        <h3 style={{ fontWeight: "800" }}>Restaurant Near You</h3>
      </div>
      <div className="mt-3 row">
        {partnerLoading ? (
          <Spinner animation="border" role="status" variant="warning">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          partnerData?.data?.data?.profiles?.map((data) => (
            <div className="col-lg-3 col-md-6 mt-3">
              <CardPartner profile={data} key={data.id} fromMenu={true} />
            </div>
          ))
        )}
      </div>
      {/* <div
          // className="row mt-3"
          onClick={() => {
            state.isLogin ? router.push("/menu") : setShow(true);
          }}
        >          
        </div> */}
    </div>
  );
};
