import React from "react";

const cardMenu = ({ product }) => {
  const { id, menuImg, menuName, menuPrice } = product;

  return (
    <div>
      <div className="card">
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

export default cardMenu;
