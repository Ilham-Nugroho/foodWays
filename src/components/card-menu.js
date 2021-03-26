import React from "react";
import { useHistory } from "react-router";

const CardMenu = ({ product, fromMenu, addOrder }) => {
  const history = useHistory();
  const { id, menuImg, menuName, menuPrice } = product;

  return (
    <div>
      <div className="card">
        <img
          src={menuImg}
          onClick={() => {
            if (fromMenu) {
              history.push(`/menu/${id}`);
            } else {
              return;
            }
          }}
        />
        <div style={{ height: "50px" }} className="d-flex align-items-center ">
          <h5 className="pt-1 " style={{ fontWeight: "800", fontSize: "18px" }}>
            {menuName}
          </h5>
        </div>

        <p className=" pb-2 " style={{ color: "#FF1515" }}>
          Rp. {menuPrice}
        </p>
        <button
          onClick={() => addOrder(product)}
          className="btn btn-md order-btn"
        >
          Order
        </button>
      </div>
    </div>
  );
};

export default CardMenu;
