import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "react-query";

import { UserContext } from "../../context/userContext";

import Navbar from "../../components/navbar-in";
import CardMenu from "../../components/card-menu";
import { products } from "../../components/data";

import { API, setAuthToken } from "../../config/api";

const AddMenu = () => {
  const [state, dispatch] = useContext(UserContext);

  const existedMenu = products.find((products) => products.id === 1).product;
  const [productsList, setProductsList] = useState(existedMenu);

  console.log(localStorage.token);

  const [form, setForm] = useState({
    menuName: "",
    menuPrice: "",
    menuImg: null,
  });

  const { menuName, menuPrice, menuImg } = form;

  //-------------------------------------------------------
  const { data: ProfileData, loading, error, refetch } = useQuery(
    "menuCache",
    async () => {
      const response = await API.get("/products");
      console.log(response);

      const responseProducts = response.data.data.products;

      return responseProducts;
    }
  );

  const addProduct = useMutation(async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        menuName,
        menuPrice,
        menuImg,
      });

      await API.post("/product", body, config);
      refetch();
    } catch (err) {
      console.log(err);
    }
  });

  //-------------------------------------------------------

  //------COBA UPLOAD FILE------------------------
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
        menuName: menuName,
        menuPrice: menuPrice,
        menuImg: menuImg,
      },
    ];

    setProductsList(newProducts);

    setForm({
      menuName: "",
      menuPrice: "",
      menuImg: null,
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
              value={menuName}
              onChange={(event) => onChange(event)}
              name="menuName"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input
              value={menuPrice}
              onChange={(event) => onChange(event)}
              name="menuPrice"
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
                name="menuImg"
                value={menuImg}
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
