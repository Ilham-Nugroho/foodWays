import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../components/data";
import CardMenu from "../components/card-menu";

import Navbar from "../components/navbar-in";

const Detail = () => {
  const [productList] = useState(products);
  const [product, setProduct] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    ProductById();
  }, []);

  const ProductById = () => {
    const getMenuFromResto = productList.find((products) => products.id === 1)
      .product;
    const filterProduct = getMenuFromResto.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(filterProduct);
  };

  console.log(product);

  return (
    <div>
      <Navbar />
      <div className="products-all">
        <div className="restaurant" style={{ height: "100vh" }}>
          {product && <CardMenu product={product} />}
        </div>
      </div>
    </div>
  );
};

export default Detail;
