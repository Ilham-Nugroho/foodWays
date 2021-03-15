import React, { useState, useContext } from "react";

import Navbar from "../components/navbar-in";

import CardMenu from "../components/card-menu";
import { products } from "../components/data";

const AddMenu = () => {
  const existedMenu = products.find((products) => products.id === 1).product;

  const [productsList, setProductsList] = useState(existedMenu);

  const [form, setForm] = useState({
    name: "",
    price: "",
    imgURL: null,
  });

  const { name, price, imgURL } = form;

  const onChange = (event) => {
    const updateForm = { ...form };
    updateForm[event.target.name] =
      event.target.type === "file" ? "/img/geprek.png" : event.target.value;
    setForm(updateForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProducts = [
      ...productsList,
      {
        id: Math.round(Math.random() * 100),
        menuName: name,
        menuPrice: price,
        menuImg: imgURL,
      },
    ];

    setProductsList(newProducts);

    setForm({
      name: "",
      price: "",
      imgUrl: null,
    });
  };

  return (
    <div>
      <Navbar />
      <div className=" restaurant">
        <form onSubmit={(event) => handleSubmit(event)}>
          <h3 className="text-center">Form Add Product</h3>
          <div className="form-group">
            <label>Product Name</label>
            <input
              value={name}
              onChange={(event) => onChange(event)}
              name="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input
              value={price}
              onChange={(event) => onChange(event)}
              name="price"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Product Image</label>
            <div className="custom-file">
              <input
                type="file"
                onChange={(event) => onChange(event)}
                name="imgUrl"
                value={imgURL}
                className="custom-file-input"
                id="customFile"
              />
              <label className="custom-file-label" htmlFor="customFile">
                Choose file
              </label>
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block">
              Submit Product
            </button>
          </div>
        </form>

        <div className="mt-3 row">
          {productsList.map((data) => (
            <div className="col-lg-3 col-md-6 mt-3">
              <CardMenu product={data} key={data.id} fromMenu={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
