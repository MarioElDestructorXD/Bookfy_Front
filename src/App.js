import React from "react";
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBarMain from './layouts/navBar'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <NavBarMain/> }>
          <Route index element = { <Home/> }/>
          <Route path="about" element = { <About/> }/>
          <Route path="contact" element = { <Contact/> }/>

          <Route path="*" element={ <Navigate replace to = "/"/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
