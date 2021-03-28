import { createContext, useReducer } from "react";

export const OrderContext = createContext();

const initialState = {
  history: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ORDER_PENDING":
      return {
        ...state,
        history: [
          ...state.history,
          {
            id: Math.random() * 50,
            product: payload.product,
            total: payload.total,
            status: "Waiting Approve",
            date: payload.date,
            partnerId: payload.partnerId,
          },
        ],
      };
    case "ORDER_SUCCESS":
      return {
        ...state,
        history: [
          ...state.history,
          {
            id: Math.random() * 50,
            product: payload.product,
            total: payload.total,
            status: "Success",
            date: payload.date,
            partner: payload.partner,
          },
        ],
      };
    case "ORDER_CANCEL":
      const updatedOrder = state.history.map((order) =>
        order.id === payload.id
          ? {
              ...order,
              status: "Cancel",
            }
          : order
      );
      return {
        ...state,
        history: updatedOrder,
      };
    default:
      throw new Error("dispacth type doesn't provided");
  }
};

export const OrderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <OrderContext.Provider value={[state, dispatch]}>
      {children}
    </OrderContext.Provider>
  );
};
