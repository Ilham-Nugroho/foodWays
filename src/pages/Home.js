import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { UserContext } from "../context/userContext";

import { SectionPartner } from "../components/restaurant/section-partner";

import NavbarIn from "../components/navbar-in";
import NavbarOut from "../components/navbar-out";

import Login from "./login";

import { Modal, Button } from "react-bootstrap";

const HomeIn = () => {
  const router = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const onClick = () => {
    if (state.isLogin !== true) {
      setShow(true);
    }
  };

  return (
    <div>
      {state.isLogin ? <NavbarIn /> : <NavbarOut />}
      <div className="home-header">
        <div className="header-title">
          <div className="">
            <div>
              <h1 style={{ fontSize: "55px", fontWeight: "800" }}>
                Are You Hungry?
              </h1>
              <h1 style={{ fontSize: "55px", fontWeight: "800" }}>
                Express Home Delivery
              </h1>
            </div>

            <div className="content-desc mb-3">
              <img src="/img/Rectangle 2.png" />
              <p>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet
              </p>
            </div>
          </div>
          <div className="header-pizza">
            <img src="/img/pizza.png" />
          </div>
        </div>
      </div>

      <div className="home-content">
        <div className="restaurant">
          <div className="">
            <h3 style={{ fontWeight: "800" }}>Popular Restaurant</h3>
          </div>

          <div className="row mt-2">
            <div className="mt-2 col-lg-3 col-md-6">
              <div className="restaurant-card">
                <img src="/img/burgerking.png" />
                <h5>Burger King</h5>
              </div>
            </div>

            <div className="mt-2 col-lg-3 col-md-6 ">
              <div className="restaurant-card">
                <img src="/img/starbucks.png" />
                <h5>Starbucks</h5>
              </div>
            </div>

            <div className=" mt-2 col-lg-3 col-md-6 ">
              <div className="restaurant-card">
                <img src="/img/kfc.png" />
                <h5>KFC</h5>
              </div>
            </div>

            <div className="mt-2 col-lg-3 col-md-6 ">
              <div className="restaurant-card">
                <img src="/img/jco.png" />
                <h5>JCo</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="restaurant" onClick={onClick}>
          <div>
            <SectionPartner />
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HomeIn;
