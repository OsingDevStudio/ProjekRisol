import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FaBars, FaUtensils } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  // cek apakah halaman home
  const isHome = location.pathname === "/";

  // navbar hanya transparan di home
  const navbarClass = isHome
    ? "bg-transparent py-4 md:py-6"
    : "bg-white shadow-md py-2 md:py-3";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FaUtensils className="text-red-500 text-2xl" />

            <Link
              to="/"
              className={`text-xl md:text-2xl font-extrabold tracking-tighter ${
                isHome ? "text-white" : "text-black"
              }`}
            >
              Risol<span className="text-red-500">Aril</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-bold text-sm">
            {/* Beranda */}
            <Link
              to="/"
              className={`transition-colors hover:text-red-500 ${
                location.pathname === "/"
                  ? "text-red-500"
                  : isHome
                  ? "text-white"
                  : "text-black"
              }`}
            >
              Beranda
            </Link>

            {/* Menu */}
            <Link
              to="/menu"
              className={`transition-colors hover:text-red-500 ${
                location.pathname === "/menu"
                  ? "text-red-500"
                  : isHome
                  ? "text-white"
                  : "text-black"
              }`}
            >
              Menu
            </Link>

            {/* Kontak */}
            <Link
              to="/kontak"
              className={`transition-colors hover:text-red-500 ${
                location.pathname === "/kontak"
                  ? "text-red-500"
                  : isHome
                  ? "text-white"
                  : "text-black"
              }`}
            >
              Kontak
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden text-2xl ${
              isHome ? "text-white" : "text-black"
            }`}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg">
          {/* Beranda */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`block font-bold ${
              location.pathname === "/"
                ? "text-red-500"
                : "text-black"
            }`}
          >
            Beranda
          </Link>

          {/* Menu */}
          <Link
            to="/menu"
            onClick={() => setMenuOpen(false)}
            className={`block font-bold ${
              location.pathname === "/menu"
                ? "text-red-500"
                : "text-black"
            }`}
          >
            Menu
          </Link>

          {/* Kontak */}
          <Link
            to="/kontak"
            onClick={() => setMenuOpen(false)}
            className={`block font-bold ${
              location.pathname === "/kontak"
                ? "text-red-500"
                : "text-black"
            }`}
          >
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;