import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Navbar from "../components/navbar-in";

const Cart = () => {
  const [state, dispatch] = useContext(CartContext);

  const addOrderToCart = (id) => {
    dispatch({
      type: "ADD_CART",
      payload: {
        id,
      },
    });
  };

  const subOrderFromCart = (id) => {
    dispatch({
      type: "SUB_CART",
      payload: {
        id,
      },
    });
  };

  const deleteProductFromCart = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: {
        id,
      },
    });
  };

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
          <button className="location-btn btn btn-md">
            Select On Map
            <img src="/img/map-icon.png" />
          </button>
        </div>

        <h4 className="mt-4">Review Your Order </h4>
        <hr style={{ borderTop: "solid" }} />
        <div className="d-flex justify-content-between mt-4">
          <div className="order-menu ">
            {state.carts.map((cart) => (
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
              <p>{state.carts.length}</p>
            </div>
            <div className="order-price-content mb-3 pb-1">
              <p>Ongkir</p>
              <p style={{ color: "red" }}>10000</p>
            </div>

            <hr style={{ borderTop: "solid" }} className="mt-3  mb-4" />

            <div className="order-price-content mb-3">
              <p>Total</p>
              <p>Biaya Total</p>
            </div>
          </div>
        </div>
        <button>See How Far?</button>
      </div>
    </div>
  );
};

export default Cart;
