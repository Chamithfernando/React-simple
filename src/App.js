import './App.css';
import Login from './Componets/Login/Login';
import MainComponent from './Componets/MainComponent';
import SignUp from './Componets/Signup/SignUp';

import {  } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Componets/Navigator/Nav';

function App() {
  return (
    <div className="App">
    <Nav/>
      
   <Router>
    <Switch>
      
      <Route path="/login"><Login/></Route>
      <Route path="/sign"><SignUp/></Route>
    </Switch>
   </Router>

     
      
      
    </div>
  );
}

export default App;
