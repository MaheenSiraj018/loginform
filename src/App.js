import Signup from './screens/Signup.js';
import Login from './screens/Login.js';
import Home from './screens/Home.js';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' exact Component={Signup} />
      <Route path='/login' Component={Login} />
      <Route path='/Home/:name'Component={Home}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;
