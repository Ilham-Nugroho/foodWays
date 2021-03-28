import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../context/userContext";

const CardMenu = ({
  product,
  fromMenu,
  addOrder,
  fromEdit,
  deleteProductById,
  getProductById,
}) => {
  const history = useHistory();
  const { id, menuImg, menuName, menuPrice, menuDesc } = product;

  const [state, dispatch] = useContext(UserContext);

  return (
    <div>
      <div className="card">
        <img
          src={menuImg}
          // onClick={() => {
          //   if (fromMenu) {
          //     history.push(`/menu/${id}`);
          //   } else {
          //     return;
          //   }
          // }}
        />
        <div style={{ height: "50px" }} className="d-flex align-items-center ">
          <h5 className="pt-1 " style={{ fontWeight: "800", fontSize: "18px" }}>
            {menuName}
          </h5>
        </div>
        {/* <div className="d-flex align-items-center ">
          <p className="pt-1 " style={{ fontWeight: "400", fontSize: "18px" }}>
            {menuDesc}
          </p>
        </div> */}

        <p
          className=" pb-2 "
          style={{ color: "#FF1515", fontWeight: "600", fontSize: "16px" }}
        >
          Rp. {menuPrice}
        </p>
        {fromMenu && (
          <button
            onClick={() => addOrder(product)}
            className="btn btn-md order-btn"
          >
            <p style={{ fontWeight: "600", fontSize: "18px" }}>Order</p>
          </button>
        )}
        {fromEdit && (
          <button
            onClick={() => deleteProductById(id)}
            className="btn btn-md order-btn mt-3"
          >
            Delete
          </button>
        )}
        {fromEdit && (
          <button
            onClick={() => getProductById(id)}
            className="btn btn-md order-btn mt-3"
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default CardMenu;
