import React from "react";

const CardResto = ({ restaurant }) => {
  const { id, name, distance, image } = restaurant;

  return (
    <div>
      <div className="card">
        <img src={image} />
        <div style={{ height: "50px" }}>
          <h5>{name}</h5>
        </div>

        <p>{distance} KM</p>
        {/* <button className="btn btn-md order-btn">Order</button> */}
      </div>
    </div>
  );
};

export default CardResto;
