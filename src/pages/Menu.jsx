import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaWhatsapp,
  FaPlus,
  FaMinus,
  FaStar,
} from "react-icons/fa";

const menuData = [
  {
    id: 1,
    name: "Risol Anggur",
    price: 15000,
    image: "/images/anggur.png",
    rating: 4.9,
    desc: "Perpaduan rasa manis dan creamy yang unik.",
  },
  {
    id: 2,
    name: "Risol Ayam Suir",
    price: 18000,
    image: "/images/ayam suir.png",
    rating: 4.8,
    desc: "Isian ayam suir melimpah dengan rasa gurih premium.",
  },
  {
    id: 3,
    name: "Risol Coklat Tiramisu",
    price: 17000,
    image: "/images/coklat tiramisu.png",
    rating: 4.9,
    desc: "Coklat creamy dengan sentuhan tiramisu lembut.",
  },
];

const Menu = () => {
  const [qty, setQty] = useState({});

  const increaseQty = (id) => {
    setQty((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQty((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const getQty = (id) => qty[id] || 1;

  const orderWhatsApp = (item) => {
    const quantity = getQty(item.id);

    const message = `Halo Risol Aril 👋

Saya ingin memesan:

📌 ${item.name}
📦 Jumlah: ${quantity}
💰 Total: Rp ${(item.price * quantity).toLocaleString("id-ID")}

Terima kasih 🙌`;

    const phone = "6281234567890";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative overflow-hidden pt-24 pb-10 px-6 bg-white">
        {/* Pattern Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:44px_44px]"></div>

        {/* Blur Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-40"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Menu Premium
          </h1>

          <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Pilihan risol premium dengan rasa unik dan isian melimpah.
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="px-6 pb-20 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {menuData.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 max-w-[320px] mx-auto"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[210px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Rating */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                  <FaStar className="text-yellow-400 text-sm" />

                  <span className="font-bold text-sm">
                    {item.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-extrabold text-gray-900 mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-4 text-sm">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between mb-5">
                  {/* Price */}
                  <div>
                    <p className="text-xs text-gray-400 mb-1">
                      Harga
                    </p>

                    <h2 className="text-xl font-extrabold text-red-500">
                      Rp {item.price.toLocaleString("id-ID")}
                    </h2>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-2 bg-gray-100 px-2 py-2 rounded-xl">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-8 h-8 rounded-lg bg-white shadow flex items-center justify-center hover:bg-red-500 hover:text-white transition"
                    >
                      <FaMinus size={10} />
                    </button>

                    <span className="font-bold text-base min-w-[20px] text-center">
                      {getQty(item.id)}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="w-8 h-8 rounded-lg bg-white shadow flex items-center justify-center hover:bg-red-500 hover:text-white transition"
                    >
                      <FaPlus size={10} />
                    </button>
                  </div>
                </div>

                {/* Button */}
                <button
                  onClick={() => orderWhatsApp(item)}
                  className="w-full bg-black hover:bg-red-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <FaWhatsapp size={18} />
                  Pesan Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Menu;