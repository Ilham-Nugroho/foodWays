import React, { useContext, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import { Modal, Button } from "react-bootstrap";

import { UserContext } from "../context/userContext";

import Login from "./Login";
import NavbarIn from "../components/navbar-in";
import NavbarOut from "../components/navbar-out";
import Menu from "./Menu/Menu";

const HomeIn = () => {
  const router = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

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
            <div
              className="mt-2 col-lg-3 col-md-6"
              onClick={() => {
                state.isLogin ? router.push("/menu") : setShow(true);
              }}
            >
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

        <div className="restaurant">
          <div>
            <h3 style={{ fontWeight: "800" }}>Restaurant Near You</h3>
          </div>
          <div
            className="row mt-3"
            onClick={() => {
              state.isLogin ? router.push("/menu") : setShow(true);
            }}
          >
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img src="/img/nasgor.png" />
                <h6>Geprek Bensu</h6>
                <p>0.2 KM</p>
              </div>
            </div>

            <div className=" col-lg-3 col-md-6">
              <div className="card">
                <img src="/img/geprek.png" />
                <h6>Nasi Goreng</h6>
                <p>0.6 KM</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img src="/img/pecel.png" />
                <h6>Pecel</h6>
                <p>0.6 KM</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img src="/img/kopi.png" />
                <h6>Kopi Kenangan</h6>
                <p>1.6 KM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIn;
