import { Link } from "react-router-dom";

import {
  FaUtensils,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FaUtensils className="text-red-500 text-3xl" />

              <h2 className="text-3xl font-extrabold tracking-tight">
                Risol<span className="text-red-500">Aril</span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
              Menyediakan berbagai varian risol premium dengan bahan
              berkualitas tinggi untuk Anda.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Menu</h3>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/menu"
                  className="text-gray-300 text-lg hover:text-red-500 transition"
                >
                  Risol Anggur
                </Link>
              </li>

              <li>
                <Link
                  to="/menu"
                  className="text-gray-300 text-lg hover:text-red-500 transition"
                >
                  Risol Original
                </Link>
              </li>

              <li>
                <Link
                  to="/menu"
                  className="text-gray-300 text-lg hover:text-red-500 transition"
                >
                  Risol Tiramisu
                </Link>
              </li>

              <li>
                <Link
                  to="/menu"
                  className="text-gray-300 text-lg hover:text-red-500 transition"
                >
                  Risol Keju
                </Link>
              </li>

              <li>
                <Link
                  to="/menu"
                  className="text-gray-300 text-lg hover:text-red-500 transition"
                >
                  Risol Matcha
                </Link>
              </li>

              <li>
                <Link
                  to="/menu"
                  className="text-gray-300 text-lg hover:text-red-500 transition"
                >
                  Risol Strawberry
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Kontak Kami</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-red-500 text-xl" />

                <span className="text-gray-300 text-lg">
                  +62 815-1532-2580
                </span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-red-500 text-xl" />

                <span className="text-gray-300 text-lg">
                  Surabaya, Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Risol Aril. Semua Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;