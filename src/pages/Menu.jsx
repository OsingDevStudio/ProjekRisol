import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import { FaPlus, FaMinus, FaStar, FaShoppingBasket } from "react-icons/fa";

const menuData = [
  { id: 1, name: "Risol Anggur", price: 15000, image: "/images/anggur.png", rating: 4.9, desc: "Manis dan creamy." },
  { id: 2, name: "Risol Ayam Suir", price: 18000, image: "/images/ayam suir.png", rating: 4.8, desc: "Gurih ayam premium." },
  { id: 3, name: "Risol Coklat Tiramisu", price: 17000, image: "/images/coklat tiramisu.png", rating: 4.9, desc: "Coklat lumer tiramisu." },
  { id: 4, name: "Risol Keju", price: 18000, image: "/images/keju.png", rating: 4.9, desc: "Keju lumer melimpah." },
  { id: 5, name: "Risol Matcha", price: 20000, image: "/images/matcha.jpg", rating: 4.9, desc: "Matcha autentik nagih." },
  { id: 6, name: "Risol Strawberry", price: 20000, image: "/images/strawbery.png", rating: 5.0, desc: "Stroberi segar manis." },
];

const Menu = () => {
  const navigate = useNavigate(); 
  const [cart, setCart] = useState({});
  const [tempQty, setTempQty] = useState({});

  const handleTempQty = (id, delta) => {
    setTempQty((prev) => ({ 
      ...prev, 
      [id]: Math.max(0, (prev[id] || 0) + delta) 
    }));
  };

  const addToCart = (item) => {
    const qty = tempQty[item.id] || 0;
    setCart((prev) => ({ 
      ...prev, 
      [item.id]: qty 
    }));
  };

  // Menghitung total item dan total harga
  const totalItems = Object.values(cart).reduce((acc, curr) => acc + curr, 0);
  const totalPrice = menuData.reduce((acc, item) => acc + (item.price * (cart[item.id] || 0)), 0);

  const handleGoToCheckout = () => {
    const cartItems = menuData
      .filter(item => cart[item.id] > 0)
      .map(item => ({ ...item, qty: cart[item.id] }));
    navigate("/checkout", { state: { cartItems, totalPrice } });
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] relative overflow-x-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
      </div>

      <Navbar />

      <main className="relative z-10 pt-28 pb-40">
        <section className="pb-8 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter">
            Menu <span className="text-red-500">Premium</span>
          </h1>
          <p className="text-gray-400 font-bold mt-1 uppercase tracking-widest text-[10px]">Risol Kualitas Terbaik</p>
        </section>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuData.map((item) => {
            const isAdded = cart[item.id] > 0 && cart[item.id] === tempQty[item.id];
            
            return (
              <div key={item.id} className="group bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-3">
                <div className="relative h-44 rounded-[22px] overflow-hidden mb-4">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <FaStar className="text-yellow-400 text-[10px]" />
                    <span className="font-black text-[10px] text-gray-800">{item.rating}</span>
                  </div>
                </div>

                <div className="text-center px-1">
                  <h3 className="text-md font-black text-gray-900 uppercase tracking-tight leading-tight">{item.name}</h3>
                  <p className="text-gray-400 text-[11px] my-2 leading-relaxed h-8 line-clamp-2 font-medium">{item.desc}</p>
                  <h2 className="text-lg font-black text-red-500 mb-4">Rp {item.price.toLocaleString("id-ID")}</h2>
                  
                  <div className="flex items-center justify-center gap-4 mb-4 bg-gray-50/80 p-1.5 rounded-xl border border-gray-100">
                    <button onClick={() => handleTempQty(item.id, -1)} className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-all font-bold text-sm">-</button>
                    <span className="font-black text-md text-gray-800 min-w-[20px]">{tempQty[item.id] || 0}</span>
                    <button onClick={() => handleTempQty(item.id, 1)} className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all font-bold text-sm">+</button>
                  </div>

                  <button 
                    onClick={() => addToCart(item)}
                    disabled={!tempQty[item.id] && !cart[item.id]}
                    className={`w-full py-2.5 rounded-xl font-black text-[11px] tracking-wider transition-all duration-300 ${
                      isAdded 
                      ? "bg-green-500 text-white" 
                      : tempQty[item.id] > 0 
                      ? "bg-gray-900 text-white hover:bg-red-600" 
                      : "bg-gray-100 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    {isAdded ? "TERSIMPAN" : "TAMBAH KE KERANJANG"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* FLOATING BAR DENGAN JUMLAH TOTAL ITEM */}
      {totalItems > 0 && (
        <div className="fixed bottom-8 left-0 right-0 z-[100] flex justify-center px-4">
          <div className="bg-gray-900/95 backdrop-blur-2xl text-white p-2 pl-6 rounded-[28px] shadow-2xl flex items-center gap-6 border border-white/10 animate-in slide-in-from-bottom-10 duration-500">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="bg-red-500 p-3 rounded-xl">
                  <FaShoppingBasket size={20} />
                </div>
                {/* Badge jumlah item di atas icon basket */}
                <span className="absolute -top-2 -right-2 bg-white text-red-500 text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-gray-900">
                  {totalItems}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-none mb-1">
                  {totalItems} Risol Terpilih
                </span>
                <span className="text-xl font-black text-white">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
            <button 
              onClick={handleGoToCheckout} 
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-[22px] font-black text-xs transition-all active:scale-95 shadow-lg shadow-red-500/20"
            >
              ORDER SEKARANG
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Menu;