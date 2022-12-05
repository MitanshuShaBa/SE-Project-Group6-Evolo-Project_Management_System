import Login from "./Components/Login";
import Signup from "./Components/Signup";

import Navbar from "./Components/Navbar";
import HomeHeader from "./Components/HomeHeader";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./css/styles.css";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <React.Fragment>
                <HomeHeader />
                <Home />
                <Footer />
              </React.Fragment>
            }
          />

          <Route
            path="login"
            element={
              <>
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path="signup"
            element={
              <>
                <Signup />
                <Footer />
              </>
            }
          />
          <Route path="dashboard" element={<h1>dashboard</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
