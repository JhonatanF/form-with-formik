import './App.css';
import rocketImg from './assets/rocket.png';
import { Signup } from './components/Signup';
import { Navbar } from './components/Navbar';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { About } from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Navbar />
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/cadastro">
        <Navbar />
        <div className="container mt-3">
        <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
          <div className="col-md-7 my-auto">
            <img className="img-fluid w-100" src={rocketImg} alt=""/>
          </div>
        </div>
        </div>
        </Route>
      </Switch>
      <Switch>
        <Route path="/sobre">
        <Navbar />
          <About />
        </Route>
      </Switch>
      <Switch>
        <Route path="/login">
        <div className="container mt-3">
        <div className="row">
        <div className="col-md-5">
          <Login />
        </div>
          <div className="col-md-7 my-auto">
            <img className="img-fluid w-100" src={rocketImg} alt=""/>
          </div>
        </div>
        </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
