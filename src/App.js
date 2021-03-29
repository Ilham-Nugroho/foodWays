import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { UserContextProvider, UserContext } from "./context/userContext";
import { CartContextProvider, CartContext } from "./context/cartContext";

import HomeIn from "./pages/Home";
import Menu from "./pages/Menu/Menu";
import Detail from "./pages/Menu/Detail";
import AddMenu from "./pages/Menu/AddMenu";

import User from "./pages/Profile/User";
import EditUser from "./pages/Profile/User-Edit";
import Partner from "./pages/Profile/Partner";
import EditPartner from "./pages/Profile/Partner-Edit";
import Transaction from "./pages/Profile/Transaction";

import Cart from "./pages/Cart";

import PrivateRoute from "./components/PrivateRoute";
import { setAuthToken, API } from "./config/api";

// init token pada axios tiap aplikasi direfresh
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
//setelah dapat token, lalu:
function App() {
  const [state, dispatch] = useContext(UserContext);
  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      console.log(response.status);
      if (response.status === 401) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.profile;
      payload.token = localStorage.token;

      dispatch({
        type: "LOGIN_SUCCESS",
        payload,
        //payload diperoleh dari Login
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "AUTH_ERROR",
      });
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <CartContextProvider>
        <Router>
          <div className="">
            <Switch>
              <Route exact path="/" component={HomeIn} />
              <Route exact path="/transaction" component={Transaction} />

              <PrivateRoute exact path="/menu/:id" component={Detail} />
              <PrivateRoute exact path="/:id/menu" component={Menu} />
              <PrivateRoute exact path="/user/:id" component={User} />
              <PrivateRoute exact path="/user/:id/edit" component={EditUser} />
              <PrivateRoute exact path="/partner/:id" component={Partner} />
              <PrivateRoute exact path="/cart" component={Cart} />
              <PrivateRoute
                exact
                path="/partner/:id/edit"
                component={EditPartner}
              />
              <PrivateRoute exact path="/:id/add-menu" component={AddMenu} />
            </Switch>
          </div>
        </Router>
      </CartContextProvider>
    </QueryClientProvider>
  );
}

export default App;
