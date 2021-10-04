import './App.css';
import "antd/dist/antd.css";

import './styles/general.css'
import './styles/table.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import index from './pages/index';
import NumericalDifferentiation from './pages/numericalDifferentiation';
import SimpsonsRule from './pages/simpsonsRule';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={index}/>
        <Route exact path="/simpsons_rule" component={SimpsonsRule}/>
        <Route exact path="/numerical_differentiation" component={NumericalDifferentiation}/>
      </Switch>
    </Router>
  );
}

export default App;
