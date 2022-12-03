import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './css/styles.css';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Login />
      <Routes>
        <Route path="/">
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="login" element={<login />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
