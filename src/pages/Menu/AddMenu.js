import React, { useState, useContext } from "react";
import { useQuery, useMutation } from "react-query";

import { Spinner } from "react-bootstrap";

import { UserContext } from "../../context/userContext";

import { useParams } from "react-router-dom";

import Navbar from "../../components/navbar-in";
import CardMenu from "../../components/restaurant/card-menu";

import { API, setAuthToken } from "../../config/api";

const AddMenu = () => {
  const [state, dispatch] = useContext(UserContext);
  const { id } = useParams();
  const [idForUpdate, setIdForUpdate] = useState(false);

  const [form, setForm] = useState({
    menuName: "",
    menuPrice: "",
    menuImg: null,
  });

  const { menuName, menuPrice, menuImg } = form;

  //-------------------------------------------------------------------------------
  const {
    data: productData,
    error: productError,
    loading: productLoading,
    refetch: productRefetch,
  } = useQuery(["addProductCache", id], async () => {
    return API.get(`/products/${id}`);
  });

  // console.log(productData);

  //------------------------------- ADD PRODUCT ------------------------------------
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
  });

  //-------------------------- UPDATE PRODUCT ------------------------------------
  const updateProduct = useMutation(async () => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const body = new FormData();

    body.append("menuName", menuName);
    body.append("menuPrice", menuPrice);
    body.append("imageFile", menuImg);

    await API.patch(`/product/${idForUpdate}`, body, config);
    productRefetch();
  });

  //------------------------- DELETE PRODUCT ------------------------------------
  const deleteProduct = useMutation(async (id) => {
    await API.delete(`/product/${id}`);
    productRefetch();
  });

  const deleteProductById = async (id) => {
    deleteProduct.mutate(id);
  };

  //------------------ SET STATE FOR UPDATE PRODUCT -----------------------------
  const getProductById = async (id) => {
    const response = await API.get(`/product/${id}`);
    const editedProduct = response.data.data.product;

    // const productString = JSON.stringify();
    setIdForUpdate(editedProduct.id);
    setForm({
      menuName: editedProduct.menuName,
      menuPrice: editedProduct.menuPrice,
      menuImg: editedProduct.menuImg,
    });
  };

  //--------------------------- FORM RELATED ------------------------------------
  const onChange = (event) => {
    const tempForm = { ...form };

    tempForm[event.target.name] =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    setForm(tempForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    idForUpdate ? updateProduct.mutate() : addProduct.mutate();

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
          <h3
            className="text-center mb-3"
            style={{ fontWeight: "800", fontSize: "36px" }}
          >
            Form Add Product
          </h3>
          {addProduct?.error?.response?.data && (
            <div class="alert alert-danger" role="alert">
              {addProduct?.error?.response?.data?.message}
            </div>
          )}
          <div className="form-group">
            <label style={{ fontWeight: "600", fontSize: "18px" }}>
              Product Name
            </label>
            <input
              value={menuName}
              onChange={(event) => onChange(event)}
              name="menuName"
              type="text"
              className="form-control"
              placeholder="Menu Name"
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: "600", fontSize: "18px" }}>
              Product Price
            </label>
            <input
              value={menuPrice}
              onChange={(event) => onChange(event)}
              name="menuPrice"
              type="text"
              className="form-control"
              placeholder="Menu Price"
            />
          </div>
          <div className="form-group">
            <label style={{ fontWeight: "600", fontSize: "18px" }}>
              Product Image
            </label>
            <div className="custom-file">
              <input
                type="file"
                onChange={(event) => onChange(event)}
                name="menuImg"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group mt-5">
            <button
              className="btn btn-primary btn-block order-btn"
              style={{ height: "45px", border: "none" }}
            >
              <p style={{ fontWeight: "600", fontSize: "18px" }}>
                {idForUpdate ? "Update Product" : "Submit Product"}
              </p>
            </button>
          </div>
        </form>

        <div className="mt-3 row">
          {productLoading ? (
            <Spinner animation="border" role="status" variant="warning">
              <span className="sr-only">Loading...</span>
            </Spinner>
          ) : (
            productData?.data?.data?.products?.map((data) => (
              <div className="col-lg-3 col-md-6 mt-3">
                <CardMenu
                  product={data}
                  key={data.id}
                  fromEdit={true}
                  deleteProductById={deleteProductById}
                  getProductById={getProductById}
                />
                {deleteProduct?.error?.response?.data && (
                  <div class="alert alert-danger" role="alert">
                    {deleteProduct?.error?.response?.data?.message}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
