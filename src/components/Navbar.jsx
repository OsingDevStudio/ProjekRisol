import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaUtensils, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const handleMenuClick = (category) => {
    setDropdownOpen(false);
    setMenuOpen(false);
    // Mengirim state filter ke halaman menu
    navigate("/menu", { state: { filter: category } });
  };

  const navbarClass = isHome
    ? "bg-transparent py-4 md:py-6"
    : "bg-white shadow-md py-2 md:py-3";

  const textClass = isHome ? "text-white" : "text-black";

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${navbarClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FaUtensils className="text-red-500 text-2xl" />
            <Link to="/" className={`text-xl md:text-2xl font-extrabold tracking-tighter ${textClass}`}>
              Risol<span className="text-red-500">Aril</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 font-bold text-sm">
            <Link to="/" className={`transition-colors hover:text-red-500 ${location.pathname === "/" ? "text-red-500" : textClass}`}>
              Beranda
            </Link>

            {/* Dropdown Menu */}
            <div className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button 
                className={`flex items-center gap-1 transition-colors hover:text-red-500 py-2 ${location.pathname === "/menu" ? "text-red-500" : textClass}`}
              >
                Menu <FaChevronDown className={`text-[10px] transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Box */}
              <div className={`absolute top-full left-0 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <button onClick={() => handleMenuClick("makanan")} className="w-full text-left px-6 py-3 text-black hover:bg-red-50 hover:text-red-500 transition-colors border-b border-gray-50">Makanan</button>
                <button onClick={() => handleMenuClick("minuman")} className="w-full text-left px-6 py-3 text-black hover:bg-red-50 hover:text-red-500 transition-colors">Minuman</button>
              </div>
            </div>

            <Link to="/kontak" className={`transition-colors hover:text-red-500 ${location.pathname === "/kontak" ? "text-red-500" : textClass}`}>
              Kontak
            </Link>
          </div>

          {/* Mobile Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden text-2xl ${textClass}`}>
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 shadow-lg">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block font-bold text-black">Beranda</Link>
          <div className="pt-2 border-t border-gray-50">
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Kategori</p>
            <button onClick={() => handleMenuClick("makanan")} className="block w-full text-left font-bold text-black py-2">Makanan</button>
            <button onClick={() => handleMenuClick("minuman")} className="block w-full text-left font-bold text-black py-2">Minuman</button>
          </div>
          <Link to="/kontak" onClick={() => setMenuOpen(false)} className="block font-bold text-black pt-2 border-t border-gray-50">Kontak</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;