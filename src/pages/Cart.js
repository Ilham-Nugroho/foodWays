import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";

import { CartContext } from "../context/cartContext";
import Navbar from "../components/navbar-in";
import Map from "../components/mapBox";

const Cart = () => {
  const [cartState, cartDispatch] = useContext(CartContext);

  const addOrderToCart = (id) => {
    cartDispatch({
      type: "ADD_CART",
      payload: {
        id,
      },
    });
  };

  const subOrderFromCart = (id) => {
    cartDispatch({
      type: "SUB_CART",
      payload: {
        id,
      },
    });
  };

  const deleteProductFromCart = (id) => {
    cartDispatch({
      type: "REMOVE_CART",
      payload: {
        id,
      },
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  //-----------------------------------------------------------------------------------------------------------------

  const totalItemPrice = cartState.carts.reduce((amount, item) => {
    const totalAmountPerProduct = item.menuPrice * item.qty;
    return amount + totalAmountPerProduct;
  }, 0);

  const totalQty = cartState.carts.reduce((qty, item) => {
    return qty + item.qty;
  }, 0);

  // console.log(totalQty);

  const submitTransaction = () => {
    const body = {
      partner_id: cartState.partnerId,
      products: cartState.carts.map((product) => ({
        id: product.id,
        qty: product.qty,
      })),
    };
  };

  // makeTransaction.mutate(JSON.stringify(body, null, 2))
  //   cartDispatch({
  //     type: "SUBMIT_CART",
  //     payload: { partnerId: null},
  //   });
  //-----------------------------------------------------------------------------------------------------------------
  return (
    <div>
      <Navbar />

      <div className="restaurant">
        <div>
          <h1 className="mt-4" style={{ fontWeight: "800" }}>
            Geprek Bensu
          </h1>
          <h4 className="mt-5">Delivery Location</h4>
        </div>
        <div className="d-flex">
          <input className="form-control" style={{ height: "47px" }}></input>
          <button
            className="location-btn btn btn-md"
            onClick={() => setShow(true)}
          >
            Select On Map
            <img src="/img/map-icon.png" />
          </button>
        </div>

        <h4 className="mt-4">Review Your Order </h4>
        <hr style={{ borderTop: "solid" }} />
        <div className="d-flex justify-content-between mt-4">
          <div className="order-menu ">
            {cartState.carts.map((cart) => (
              <div>
                <div className="d-flex justify-content-between ">
                  <div className="d-flex ">
                    <div>
                      <img
                        src={cart.menuImg}
                        style={{ height: "100px", width: "100px" }}
                      />
                    </div>

                    <div className="justify-content-around flex-column d-flex ml-3">
                      <h5 className="mt-3 font-weight-bold">{cart.menuName}</h5>

                      <div className="d-flex">
                        <button
                          className="btn qty-btn"
                          onClick={() =>
                            cart.qty < 2
                              ? deleteProductFromCart(cart.id)
                              : subOrderFromCart(cart.id)
                          }
                        >
                          <p className="mb-1">-</p>
                        </button>
                        <p className="qty pb-4">{cart.qty}</p>
                        <button
                          className="btn qty-btn"
                          onClick={() => addOrderToCart(cart.id)}
                        >
                          <p className="mb-1">+</p>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="justify-content-around flex-column d-flex ml-3">
                    <p style={{ color: "red" }} className="mt-2">
                      Rp. {cart.menuPrice * cart.qty}
                    </p>
                    <button
                      onClick={() => deleteProductFromCart(cart.id)}
                      className=" btn"
                    >
                      <img src="/img/bin.png" />
                    </button>
                  </div>
                </div>
                <div>
                  <hr style={{ borderTop: "solid" }} className="mt-4 mb-4" />
                </div>
              </div>
            ))}
          </div>
          <div style={{ width: "30px" }}></div>

          <div className="order-price ">
            <div className="order-price-content mb-3">
              <p>Subtotal</p>
              <p style={{ color: "red" }}>Rp. </p>
            </div>
            <div className="order-price-content mb-3">
              <p>Qty</p>
              <p>{totalQty}</p>
            </div>
            <div className="order-price-content mb-3 pb-1">
              <p>Ongkir</p>
              <p style={{ color: "red" }}></p>
            </div>

            <hr style={{ borderTop: "solid" }} className="mt-3  mb-4" />

            <div className="order-price-content mb-3">
              <p>Total</p>
              <p>Rp. {totalItemPrice}</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-lg mt-3"
            style={{
              backgroundColor: "#433434",
              width: "180px",
              color: "white",
            }}
          >
            See How Far?
          </button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        style={{ height: "600px" }}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Map />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Cart;
