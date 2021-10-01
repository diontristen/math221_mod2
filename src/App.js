import './App.css';
import "antd/dist/antd.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import index from './pages/index';
import Simpson13 from './pages/simpson13';
import Simpson38 from './pages/simpson38';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={index}/>
        <Route exact path="/simpsons_1_3" component={Simpson13}/>
        <Route exact path="/simpsons_3_8" component={Simpson38}/>
      </Switch>
    </Router>
  );
}

export default App;
