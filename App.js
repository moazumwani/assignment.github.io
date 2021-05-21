import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from './components/Home'
import Details from './components/Details';
import Nav from './components/Nav';

function App() {
  return (
    <div >

      <Router>
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Details" component={Details} />
        </Switch>
      </Router>




    </div>
  );
}

export default App;
