import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import SignIn from './Components/Welcome/SignIn';
import Register from './Components/Welcome/Register';
import Welcome from './Components/Welcome/Welcom';


const App =()=>{
  
  return( 
   
  <Router >
    <Route path="/signIn" component={SignIn} />
    <Route path="/Register" component={Register} />
    <Route path="/Welcome" component={Welcome} />
  </Router>
 
  );
  }


export default App;
  
  