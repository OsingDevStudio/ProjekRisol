import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; 
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import { FaPlus, FaMinus, FaStar, FaShoppingBasket } from "react-icons/fa";

const menuData = [
  { id: 1, name: "Risol Anggur", price: 15000, image: "/images/anggur.png", rating: 4.9, desc: "Manis dan creamy.", category: "makanan" },
  { id: 2, name: "Risol Ayam Suir", price: 18000, image: "/images/ayam suir.png", rating: 4.8, desc: "Gurih ayam premium.", category: "makanan" },
  { id: 3, name: "Risol Coklat Tiramisu", price: 17000, image: "/images/coklat tiramisu.png", rating: 4.9, desc: "Coklat lumer tiramisu.", category: "makanan" },
  { id: 4, name: "Risol Keju", price: 18000, image: "/images/keju.png", rating: 4.9, desc: "Keju lumer melimpah.", category: "makanan" },
  { id: 5, name: "Risol Matcha", price: 20000, image: "/images/matcha.jpg", rating: 4.9, desc: "Matcha autentik nagih.", category: "makanan" },
  { id: 6, name: "Risol Strawberry", price: 20000, image: "/images/strawbery.png", rating: 5.0, desc: "Stroberi segar manis.", category: "makanan" },
  // MENU MINUMAN
  { id: 7, name: "Es Teh Manis", price: 5000, image: "/images/es teh.png", rating: 4.8, desc: "Segar dan manis.", category: "minuman" },
  { id: 8, name: "Es Jeruk Peras", price: 8000, image: "/images/es jeruk.png", rating: 4.9, desc: "Jeruk asli pilihan.", category: "minuman" },
  { id: 9, name: "Es Matcha", price: 10000, image: "/images/es matcha.png", rating: 4.9, desc: "matcha pilihan.", category: "minuman" },
];

const Menu = () => {
  const navigate = useNavigate(); 
  const location = useLocation();
  const [cart, setCart] = useState({});
  const [tempQty, setTempQty] = useState({});
  const [filter, setFilter] = useState("semua");

  useEffect(() => {
    if (location.state?.filter) {
      setFilter(location.state.filter);
    }
    window.scrollTo(0, 0);
  }, [location.state]);

  const handleTempQty = (id, delta) => {
    setTempQty((prev) => ({ 
      ...prev, 
      [id]: Math.max(0, (prev[id] || 0) + delta) 
    }));
  };

  const addToCart = (item) => {
    const qty = tempQty[item.id] || 0;
    setCart((prev) => ({ ...prev, [item.id]: qty }));
  };

  const filteredData = filter === "semua" 
    ? menuData 
    : menuData.filter(item => item.category === filter);

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
      {/* BACKGROUND MOTIF KOTAK-KOTAK (GRID) */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
        style={{ 
          backgroundImage: `
            linear-gradient(#000 1.5px, transparent 1.5px), 
            linear-gradient(90deg, #000 1.5px, transparent 1.5px)
          `, 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <Navbar />

      <main className="relative z-10 pt-32 pb-40">
        <section className="pb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter capitalize">
            Menu <span className="text-red-500">{filter === 'semua' ? 'Premium' : filter}</span>
          </h1>
          
          {/* Tombol Filter Kategori */}
          <div className="flex justify-center gap-3 mt-8">
            {["semua", "makanan", "minuman"].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)} 
                className={`px-8 py-3 rounded-2xl font-black text-[10px] tracking-[0.2em] uppercase transition-all duration-300 ${
                  filter === cat 
                  ? 'bg-red-500 text-white shadow-xl shadow-red-500/40 scale-105' 
                  : 'bg-white text-gray-400 border border-gray-100 hover:border-red-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredData.map((item) => {
            const isAdded = cart[item.id] > 0 && cart[item.id] === tempQty[item.id];
            return (
              <div key={item.id} className="group bg-white rounded-[40px] border border-white shadow-sm hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 p-4">
                <div className="relative h-52 rounded-[30px] overflow-hidden mb-6 shadow-inner bg-gray-50">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="font-black text-xs text-gray-800">{item.rating}</span>
                  </div>
                </div>

                <div className="text-center px-2">
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight">{item.name}</h3>
                  <p className="text-gray-400 text-xs my-3 font-medium h-8 line-clamp-2 leading-relaxed">{item.desc}</p>
                  <h2 className="text-xl font-black text-red-500 mb-6">Rp {item.price.toLocaleString("id-ID")}</h2>
                  
                  <div className="flex items-center justify-center gap-5 mb-6 bg-gray-50/50 p-2 rounded-[20px] border border-gray-100/50">
                    <button onClick={() => handleTempQty(item.id, -1)} className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center font-bold hover:bg-red-500 hover:text-white transition-all">-</button>
                    <span className="font-black text-xl text-gray-800 w-8">{tempQty[item.id] || 0}</span>
                    <button onClick={() => handleTempQty(item.id, 1)} className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center font-bold hover:bg-green-500 hover:text-white transition-all">+</button>
                  </div>

                  <button 
                    onClick={() => addToCart(item)}
                    disabled={!tempQty[item.id] && !cart[item.id]}
                    className={`w-full py-5 rounded-[22px] font-black text-[10px] tracking-[0.2em] transition-all duration-300 ${
                      isAdded 
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/30" 
                      : tempQty[item.id] > 0 
                      ? "bg-gray-900 text-white hover:bg-red-600 shadow-xl" 
                      : "bg-gray-100 text-gray-300"
                    }`}
                  >
                    {isAdded ? "BERHASIL DISIMPAN" : "TAMBAH KE PESANAN"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Floating Checkout Bar */}
      {totalItems > 0 && (
        <div className="fixed bottom-10 left-0 right-0 z-[110] flex justify-center px-4">
          <div className="bg-gray-900/95 backdrop-blur-2xl text-white p-3 pl-10 rounded-[40px] shadow-2xl flex items-center gap-12 border border-white/10">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">{totalItems} Item terpilih</span>
              <span className="text-2xl font-black text-white">Rp {totalPrice.toLocaleString("id-ID")}</span>
            </div>
            <button 
              onClick={handleGoToCheckout} 
              className="bg-red-500 hover:bg-red-600 text-white px-12 py-5 rounded-[32px] font-black text-xs tracking-[0.2em] transition-all active:scale-95 shadow-xl shadow-red-500/20"
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