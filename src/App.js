import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css';

import Login from './pages/login';
import Register from './pages/register';

import Navbar from './components/navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>

      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
