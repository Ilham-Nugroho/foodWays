import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  // isLogin: false,
  carts: [],
  partnerId: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogin: true,
      };
    case "ADD_CART":
      const findProductById = state.carts.find(
        (cart) => cart.id === payload.id
      );

      if (findProductById) {
        const updatedCarts = state.carts.map((cart) =>
          cart.id === payload.id
            ? {
                ...cart,
                qty: cart.qty + 1,
              }
            : cart
        );

        return {
          ...state,
          carts: updatedCarts,
          partnerId: payload.profileId,
        };
      }

      if (state.partnerId != null && state.partnerId != payload.profileId) {
        alert("You can just order from one restaurant at the time");
        return state;
      }

      return {
        ...state,
        carts: [
          ...state.carts,
          {
            ...payload,
            qty: 1,
          },
        ],
        partnerId: payload.profileId,
      };

    case "SUB_CART":
      const updatedCarts = state.carts.map((cart) =>
        cart.id === payload.id
          ? {
              ...cart,
              qty: cart.qty <= 1 ? cart.qty : cart.qty - 1,
            }
          : cart
      );

      return {
        ...state,
        carts: updatedCarts,
      };

    case "REMOVE_CART":
      const filteredCarts = state.carts.filter(
        (cart) => cart.id !== payload.id
      );

      return {
        ...state,
        carts: filteredCarts,
      };

    case "SAVE_TO_STORAGE":
      localStorage.setItem("user_cart", JSON.stringify(state, null, 2));
      break;

    case "SUBMIT_CART":
      return {
        ...state,
        carts: [],
        partnerId: null,
      };
    default:
      throw new Error();
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
};
