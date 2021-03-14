import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import { UserContextProvider } from "./context/userContext";

import HomeIn from "./pages/Home";
import Menu from "./pages/Menu";
import Detail from "./pages/Detail";
import User from "./pages/User";
import EditProfile from "./pages/Edit-Profile";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <div className="">
          <Switch>
            <Route exact path="/" component={HomeIn} />
            <PrivateRoute exact path="/menu/:id" component={Detail} />
            <PrivateRoute exact path="/menu" component={Menu} />
            <PrivateRoute exact path="/user" component={User} />
            <PrivateRoute exact path="/user/edit" component={EditProfile} />
          </Switch>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
