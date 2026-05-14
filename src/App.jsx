import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Checkout from "./pages/Checkout";
import Kontak from "./pages/Kontak"; // 1. Import Halaman Kontak

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/kontak" element={<Kontak />} /> {/* 2. Tambahkan Route Ini */}
      </Routes>
    </Router>
  );
}

export default App;