import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Mengarahkan halaman awal ke Home atau Menu */}
        <Route path="/" element={<Home />} /> 
        <Route path="/Menu" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Proteksi jika halaman tidak ditemukan */}
        <Route path="*" element={<Navigate to="/Menu" />} />
      </Routes>
    </Router>
  );
}

export default App;