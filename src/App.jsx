import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/placeOrder/placeOrder";
import Footer from "./Component/Footer/Footer";
import Loginpopup from "./Component/LoginPopup/Loginpopup";

function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/> :<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
