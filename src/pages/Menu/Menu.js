import React, { useState } from "react";
import Navbar from "../../components/navbar-in";

import CardMenu from "../../components/card-menu";
import CardResto from "../../components/card-resto";

import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import { products } from "../../components/data";

const Menu = () => {
  const [productList] = useState(products);
  const [state, dispatch] = useContext(CartContext);

  const addOrder = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  const getMenuFromResto = productList.find((products) => products.id === 1)
    .product;

  return (
    <div className="products-all">
      <Navbar />
      <div className="restaurant">
        <div>
          <strong>
            <h3 style={{ fontSize: "36px", fontWeight: "800" }}>
              Geprek Bensu, Menus
            </h3>
          </strong>
        </div>
        <div className="row mt-3">
          {getMenuFromResto.map((product) => (
            <div className="col-lg-3 col-md-6 mt-3">
              <CardMenu
                product={product}
                key={product.id}
                fromMenu={true}
                addOrder={addOrder}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
