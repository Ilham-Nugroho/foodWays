import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "react-query";

import { UserContext } from "../../context/userContext";

import Navbar from "../../components/navbar-in";
import CardMenu from "../../components/card-menu";
import { products } from "../../components/data";

import { API, setAuthToken } from "../../config/api";

const AddMenu = () => {
  const [state, dispatch] = useContext(UserContext);

  // const existedMenu = products.find((products) => products.id === 1).product;
  // const [productsList, setProductsList] = useState(existedMenu);

  const [form, setForm] = useState({
    menuName: "",
    menuPrice: "",
    menuImg: null,
  });

  const { menuName, menuPrice, menuImg } = form;

  //-------------------------------------------------------
  const {
    data: productData,
    error: productError,
    loading: productLoading,
    refetch: productRefetch,
  } = useQuery("productsCache", async () => {
    return API.get("/products");
    // console.log(response);
  });

  const addProduct = useMutation(async () => {
    // try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const body = new FormData();

    body.append("menuName", menuName);
    body.append("menuPrice", menuPrice);
    body.append("imageFile", menuImg);

    await API.post("/product", body, config);
    productRefetch();
    // }
    // catch (err) {
    //   console.log(err);
    // }
  });

  console.log(productData);

  //-------------------------------------------------------

  //------COBA UPLOAD FILE------------------------
  const onChange = (event) => {
    const tempForm = { ...form };

    tempForm[event.target.name] =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    setForm(tempForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const newProducts = [
    //   ...productsList,
    //   {
    //     id: Math.round(Math.random() * 100),
    //     menuName: menuName,
    //     menuPrice: menuPrice,
    //     menuImg: menuImg,
    //   },
    // ];

    // setProductsList(newProducts);
    addProduct.mutate();

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
                // className="custom-file-input"
                className="form-control"
                // id="customFile"
              />
              {/* <label className="custom-file-label" htmlFor="customFile">
                Choose file
              </label> */}
            </div>
          </div>
          <div className="form-group mt-5">
            <button className="btn btn-primary btn-block">
              Submit Product
            </button>
          </div>
        </form>

        <div className="mt-3 row">
          {productLoading ? (
            <h1>loading data</h1>
          ) : (
            productData?.data?.data?.products?.map((data) => (
              <div className="col-lg-3 col-md-6 mt-3">
                <CardMenu
                  product={data}
                  key={data.id}
                  // fromMenu={true}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
