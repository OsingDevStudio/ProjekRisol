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

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSendWA = () => {
    if (!address.trim()) {
      alert("Harap masukkan alamat pengiriman Anda.");
      return;
    }
    const itemsText = cartItems.map(i => `• ${i.name} (${i.qty}x)`).join("\n");
    const message = `Halo Risol Aril 👋\n\n*PESANAN SAYA:*\n${itemsText}\n\n*TOTAL:* Rp ${totalPrice.toLocaleString("id-ID")}\n\n*ALAMAT:* ${address}\n*CATATAN:* ${note || "-"}`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-black text-2xl">
        Keranjang Kosong!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <main className="max-w-5xl mx-auto pt-32 pb-20 px-6 relative z-10">
        <button onClick={() => navigate("/menu")} className="flex items-center gap-2 text-gray-400 font-black mb-8 hover:text-red-500 transition-all uppercase text-xs tracking-widest">
          <FaArrowLeft /> Kembali ke Menu
        </button>

        <h1 className="text-4xl font-black text-gray-900 mb-12 flex items-center gap-4">
          <div className="bg-red-500 p-4 rounded-[20px] text-white shadow-lg shadow-red-500/30">
            <FaReceipt size={24} />
          </div>
          Konfirmasi Pesanan
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* List Pesanan */}
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
            <h3 className="font-black text-xl mb-8 text-gray-900">Ringkasan Item</h3>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img src={item.image} className="w-16 h-16 rounded-2xl object-cover" alt="" />
                    <div>
                      <p className="font-black text-gray-900 uppercase text-sm">{item.name}</p>
                      <p className="text-xs text-gray-400 font-bold">{item.qty} Porsi</p>
                    </div>
                  </div>
                  <p className="font-black text-gray-900">Rp {(item.price * item.qty).toLocaleString("id-ID")}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t-4 border-dotted border-gray-50 flex justify-between items-center">
              <span className="font-black text-gray-400 uppercase text-xs tracking-[0.2em]">Total Akhir</span>
              <span className="text-3xl font-black text-red-500">Rp {totalPrice.toLocaleString("id-ID")}</span>
            </div>
          </div>

          {/* Form Pengiriman */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100">
              <h3 className="font-black text-xl mb-8 flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" /> Lokasi Pengiriman
              </h3>
              <div className="space-y-6">
                <textarea 
                  className="w-full p-6 bg-gray-50 border-2 border-transparent focus:border-red-500 focus:bg-white rounded-[24px] outline-none transition-all font-bold text-gray-700 min-h-[150px]"
                  placeholder="Tuliskan Alamat Lengkap Anda..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input 
                  className="w-full p-6 bg-gray-50 border-2 border-transparent focus:border-red-500 focus:bg-white rounded-[24px] outline-none transition-all font-bold text-gray-700"
                  placeholder="Catatan (Contoh: Pedas dipisah)"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>

            <button 
              onClick={handleSendWA}
              className="w-full py-6 bg-green-500 hover:bg-green-600 text-white rounded-[30px] font-black text-lg flex items-center justify-center gap-4 shadow-2xl shadow-green-500/30 transition-all active:scale-95"
            >
              <FaWhatsapp size={28} /> KIRIM KE WHATSAPP
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;