import React from "react";
import { useHistory } from "react-router";

const CardMenu = ({ product, fromMenu }) => {
  const history = useHistory();
  const { id, menuImg, menuName, menuPrice } = product;

  return (
    <div>
      <div
        className="card"
        onClick={() => {
          if (fromMenu) {
            history.push(`/menu/${id}`);
          } else {
            return;
          }
        }}
      >
        <img src={menuImg} />
        <div style={{ height: "50px" }}>
          <h5>{menuName}</h5>
        </div>

        <p>{menuPrice}</p>
        <button className="btn btn-md order-btn">Order</button>
      </div>
    </div>
  );
};

export default CardMenu;
