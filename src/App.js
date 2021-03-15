import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { UserContextProvider } from "./context/userContext";
import { CartContextProvider } from "./context/cartContext";

import HomeIn from "./pages/Home";
import Menu from "./pages/Menu";
import Detail from "./pages/Detail";
import User from "./pages/User";
import EditUser from "./pages/User-Edit";
import Partner from "./pages/Partner";
import EditPartner from "./pages/Partner-Edit";
import AddMenu from "./pages/AddMenu";
import Cart from "./pages/Cart";
import Map from "./components/mapBox";

import PrivateRoute from "./components/PrivateRoute";
import { createContext } from "react";

function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Router>
          <div className="">
            <Switch>
              <Route exact path="/" component={HomeIn} />
              <Route exact path="/map" component={Map} />
              <PrivateRoute exact path="/menu/:id" component={Detail} />
              <PrivateRoute exact path="/menu" component={Menu} />
              <PrivateRoute exact path="/user" component={User} />
              <PrivateRoute exact path="/user/edit" component={EditUser} />
              <PrivateRoute exact path="/partner" component={Partner} />
              <PrivateRoute exact path="/cart" component={Cart} />
              <PrivateRoute
                exact
                path="/partner/edit"
                component={EditPartner}
              />
              <PrivateRoute exact path="/add-menu" component={AddMenu} />
            </Switch>
          </div>
        </Router>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
