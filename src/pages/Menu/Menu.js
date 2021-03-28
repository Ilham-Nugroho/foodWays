import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { useParams } from "react-router-dom";

import { CartContext } from "../../context/cartContext";

import { Spinner } from "react-bootstrap";

import { API, setAuthToken } from "../../config/api";

import Navbar from "../../components/navbar-in";
import CardMenu from "../../components/restaurant/card-menu";

const Menu = () => {
  const { id } = useParams();

  const [state, dispatch] = useContext(CartContext);

  const {
    data: productData,
    error: productError,
    loading: productLoading,
  } = useQuery(["productCache", id], async () => {
    return API.get(`/products/${id}`);
  });

  const { data: partnerProductData, error: partnerProductError } = useQuery(
    ["partnerProductCache", id],
    async () => {
      return API.get(`/profile/${id}`);
    }
  );
  console.log(partnerProductData?.data?.data?.profile?.avatar);

  const addOrder = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  return (
    <div className="bg-color-full">
      <div className="products-all">
        <Navbar />
        <div className="restaurant">
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={partnerProductData?.data?.data?.profile?.avatar}
              style={{ height: "200px", width: "20%" }}
            />
          </div>
          <div>
            <strong>
              <h3 style={{ fontSize: "36px", fontWeight: "800" }}>
                {partnerProductData?.data?.data?.profile?.name}, Menus:
              </h3>
            </strong>
          </div>

          <div className="mt-3 row">
            {productLoading ? (
              <Spinner animation="border" role="status" variant="warning">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : productData?.data?.data?.products.length < 1 ? (
              <div className="mt-5 ml-3">
                <h1>This partner hasn't add any product yet</h1>
              </div>
            ) : (
              productData?.data?.data?.products?.map((data) => (
                <div className="col-lg-3 col-md-6 mt-3">
                  <CardMenu
                    product={data}
                    key={data.id}
                    fromMenu={true}
                    addOrder={addOrder}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
