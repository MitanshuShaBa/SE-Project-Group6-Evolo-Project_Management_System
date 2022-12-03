import Login from "./Components/Login";
import Navbar from './Components/Navbar'
import HomeHeader from './Components/HomeHeader'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './css/styles.css';
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      
      <Login />
      <Routes>
        <Route path="/">
          <Route index element={<React.Fragment><HomeHeader/><Home /></React.Fragment>} />

          <Route path="login" element={<Login />} /> 
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
