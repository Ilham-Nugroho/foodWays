import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(UserContext);
  const { loading } = state;

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <h1>spinner</h1>
        ) : state.isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect to="" />
        )
      }
    />
  );
};

export default PrivateRoute;
