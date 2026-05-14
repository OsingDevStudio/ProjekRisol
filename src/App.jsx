import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Mengarahkan halaman awal ke Home */}
        <Route path="/" element={<Home />} /> 
        
        {/* Gunakan huruf kecil '/menu' agar konsisten dan aman di server */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
        
        {/* Proteksi jika halaman tidak ditemukan, arahkan ke menu */}
        <Route path="*" element={<Navigate to="/menu" />} />
      </Routes>
    </Router>
  );
}

export default App;