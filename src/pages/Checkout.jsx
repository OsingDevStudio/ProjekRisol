import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaWhatsapp, FaReceipt, FaArrowLeft } from "react-icons/fa";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [], totalPrice = 0 } = location.state || {};
  
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const NOMOR_WA_TUJUAN = "6281515322580"; 

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSendWA = () => {
    if (!address.trim()) {
      alert("Harap masukkan alamat pengiriman Anda.");
      return;
    }
    
    const itemsText = cartItems.map(i => `• ${i.name} (${i.qty}x)`).join("\n");
    
    const message = `*HALO RISOL ARIL* 👋\n\n` +
                    `Ada Pesanan Baru Mas!\n\n` +
                    `*DETAIL PESANAN:*\n${itemsText}\n\n` +
                    `*TOTAL BAYAR:* Rp ${totalPrice.toLocaleString("id-ID")}\n` +
                    `----------------------------\n` +
                    `*ALAMAT PENGIRIMAN:*\n${address}\n\n` +
                    `*CATATAN:* ${note || "-"}\n\n` +
                    `Mohon segera diproses ya, terima kasih!`;

    const waUrl = `https://wa.me/${NOMOR_WA_TUJUAN}?text=${encodeURIComponent(message)}`;
    
    window.open(waUrl, "_blank");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-black text-2xl">
        Keranjang Kosong!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] relative overflow-hidden">
      {/* BACKGROUND MOTIF DOTS & MESH GRADIENT */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `radial-gradient(#EF4444 0.5px, transparent 0.5px)`, 
            backgroundSize: '24px 24px' 
          }}
        ></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-100/40 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-orange-100/30 blur-[100px] rounded-full"></div>
      </div>

      <Navbar />
      
      <main className="max-w-5xl mx-auto pt-32 pb-20 px-6 relative z-10">
        <button onClick={() => navigate("/menu")} className="flex items-center gap-2 text-gray-400 font-black mb-8 hover:text-red-500 transition-all uppercase text-[10px] tracking-widest">
          <FaArrowLeft /> Kembali ke Menu
        </button>

        {/* PERBAIKAN: text-2xl di HP, md:text-4xl di Desktop */}
        <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-10 flex items-center gap-3 md:gap-4 tracking-tighter">
          <div className="bg-red-500 p-3 md:p-4 rounded-[18px] md:rounded-[22px] text-white shadow-xl shadow-red-500/30">
            <FaReceipt className="text-lg md:text-2xl" />
          </div>
          Konfirmasi <span className="text-red-500">Pesanan</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Ringkasan Pesanan */}
          <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-[35px] md:rounded-[40px] shadow-xl shadow-gray-200/50 border border-white">
            <h3 className="font-black text-lg md:text-xl mb-6 md:mb-8 text-gray-900">Ringkasan Item</h3>
            <div className="space-y-5 md:space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3 md:gap-4">
                    <img src={item.image} className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl object-cover shadow-md" alt="" />
                    <div>
                      <p className="font-black text-gray-900 uppercase text-[10px] md:text-sm leading-tight">{item.name}</p>
                      <p className="text-[10px] md:text-xs text-gray-400 font-bold">{item.qty} Porsi</p>
                    </div>
                  </div>
                  <p className="font-black text-gray-900 text-xs md:text-base whitespace-nowrap">
                    Rp {(item.price * item.qty).toLocaleString("id-ID")}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t-2 border-dashed border-gray-100 flex justify-between items-center gap-2">
              <span className="font-black text-gray-400 uppercase text-[9px] md:text-xs tracking-[0.2em] whitespace-nowrap">
                Total Akhir
              </span>
              <span className="text-xl md:text-3xl font-black text-red-500 whitespace-nowrap">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>
          </div>

          {/* Form Alamat */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-[35px] md:rounded-[40px] shadow-xl shadow-gray-200/50 border border-white">
              <h3 className="font-black text-lg md:text-xl mb-6 md:mb-8 flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" /> Lokasi Pengiriman
              </h3>
              <div className="space-y-4 md:space-y-6">
                <textarea 
                  className="w-full p-5 md:p-6 bg-gray-50/50 border-2 border-transparent focus:border-red-500 focus:bg-white rounded-[20px] md:rounded-[24px] outline-none transition-all font-bold text-gray-700 min-h-[120px] md:min-h-[150px] shadow-inner text-sm md:text-base"
                  placeholder="Tuliskan Alamat Lengkap Anda..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input 
                  className="w-full p-5 md:p-6 bg-gray-50/50 border-2 border-transparent focus:border-red-500 focus:bg-white rounded-[20px] md:rounded-[24px] outline-none transition-all font-bold text-gray-700 shadow-inner text-sm md:text-base"
                  placeholder="Catatan (Opsional)"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>

            <button 
              onClick={handleSendWA}
              className="w-full py-5 md:py-6 bg-green-500 hover:bg-green-600 text-white rounded-[25px] md:rounded-[32px] font-black text-md md:text-lg flex items-center justify-center gap-3 md:gap-4 shadow-2xl shadow-green-500/40 transition-all active:scale-95 group"
            >
              <FaWhatsapp className="text-xl md:text-3xl group-hover:rotate-12 transition-transform" /> 
              KIRIM KE WHATSAPP
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;