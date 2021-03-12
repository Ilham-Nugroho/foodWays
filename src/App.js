import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu";

import Navbar from "./components/navbar-in";
import ProfileUser from "./pages/Profile-user";

function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/profile" component={ProfileUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
