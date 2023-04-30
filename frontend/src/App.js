import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState } from "react";
const App = () => {
  const [userData, setUserData] = useState({});

  return (
    <>
      <BrowserRouter>
        <Navbar userData={userData} setUserData={setUserData}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products userData={userData} />} />
          <Route path="/cart" element={<Cart userData={userData} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login setUserData={setUserData} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;





