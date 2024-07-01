import React from "react";
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from './components/login';
import Contact from './components/contact';
import Home from './components/home';
import NavBarMain from './layouts/landingPage/navBar'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <NavBarMain/> }>
          <Route index element = { <Home/> }/>
          <Route path="login" element = { <Login/> }/>
          <Route path="contact" element = { <Contact/> }/>

          <Route path="*" element={ <Navigate replace to = "/"/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
