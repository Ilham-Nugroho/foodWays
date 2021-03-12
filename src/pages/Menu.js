import React, { useState } from "react";
import Navbar from "../components/navbar-in";
import CardMenu from "../components/card-menu";
import { products } from "../components/data";

const Menu = () => {
  const [productList] = useState(products);

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
          {productList.map((product) => (
            <div className="col-lg-3 col-md-6 mt-3" key={product.id}>
              <CardMenu product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
