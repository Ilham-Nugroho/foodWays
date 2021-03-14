import React, { useState } from "react";
import Navbar from "../components/navbar-in";

import CardMenu from "../components/card-menu";
import CardResto from "../components/card-resto";

import { products } from "../components/data";

const Menu = () => {
  const [productList] = useState(products);

  const getMenuFromResto = productList.find((products) => products.id === 1)
    .product;

  return (
    <div className="products-all">
      <Navbar />
      <div className="restaurant">
        <div>
          <strong>
            <h3>Geprek Bensu, Menus</h3>
          </strong>
        </div>
        <div className="row mt-3">
          {getMenuFromResto.map((data) => (
            <div className="col-lg-3 col-md-6 mt-3" key={data.id}>
              <CardMenu product={data} />
            </div>
          ))}
        </div>
        <div className="row mt-3">
          {productList.map((resto) => (
            <div className="col-lg-3 col-md-6 mt-3" key={resto.id}>
              <CardResto restaurant={resto} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
