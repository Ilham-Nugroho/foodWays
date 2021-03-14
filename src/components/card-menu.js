import React from "react";
import { useHistory } from "react-router";

const CardMenu = ({ product }) => {
  const history = useHistory();
  const { id, menuImg, menuName, menuPrice } = product;

  return (
    <div>
      <div
        className="card"
        onClick={() => {
          history.push(`/menu/${id}`);
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
