import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  isLogin: true,
  user: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogin: true,
      };
    case "VALID_USER":
      return {
        ...state,
        user: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
