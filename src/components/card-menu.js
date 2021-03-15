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
        <div style={{ height: "50px" }}>
          <h5>{menuName}</h5>
        </div>

        <p>{menuPrice}</p>
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
