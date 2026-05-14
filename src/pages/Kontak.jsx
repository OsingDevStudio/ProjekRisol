import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";

const Kontak = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const NOMOR_WA = "6281515322580";

  return (
    <div className="min-h-screen bg-[#F8F9FA] relative overflow-hidden">
      {/* BACKGROUND MOTIF (Konsisten dengan Checkout) */}
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

      <main className="max-w-6xl mx-auto pt-32 pb-20 px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter">
            Hubungi <span className="text-red-500">Kami</span>
          </h1>
          <p className="text-gray-500 font-bold uppercase text-xs tracking-[0.3em]">
            Risol Premium Aril - Lezat, Renyah, Berkualitas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Lokasi */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-[40px] shadow-xl shadow-gray-200/50 border border-white flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-red-500 rounded-[22px] flex items-center justify-center text-white mb-6 shadow-lg shadow-red-500/30">
              <FaMapMarkerAlt size={28} />
            </div>
            <h3 className="font-black text-xl mb-3 text-gray-900">Lokasi Kami</h3>
            <p className="text-gray-500 font-bold text-sm leading-relaxed">
              surabaya nyel bos
            </p>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-[40px] shadow-xl shadow-gray-200/50 border border-white flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-green-500 rounded-[22px] flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/30">
              <FaWhatsapp size={28} />
            </div>
            <h3 className="font-black text-xl mb-3 text-gray-900">WhatsApp</h3>
            <p className="text-gray-500 font-bold text-sm mb-4">+62 815-1532-2580</p>
            <a 
              href={`https://wa.me/${NOMOR_WA}`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 text-green-600 font-black text-xs uppercase tracking-widest hover:gap-4 transition-all"
            >
              Chat Sekarang <FaArrowRight />
            </a>
          </div>

          {/* Card 3: Operasional */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-[40px] shadow-xl shadow-gray-200/50 border border-white flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 bg-orange-500 rounded-[22px] flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-500/30">
              <FaClock size={28} />
            </div>
            <h3 className="font-black text-xl mb-3 text-gray-900">Jam Operasional</h3>
            <p className="text-gray-500 font-bold text-sm">
              Setiap Hari<br />
              <span className="text-gray-900">08:00 - 20:00 WIB</span>
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white p-4 rounded-[45px] shadow-2xl shadow-gray-200/50 border border-white overflow-hidden h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.297126032283!2d106.8195613!3d-6.2227413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTMnMjEuOCJTIDEwNsKwNDknMTAuNCJF!5e0!3m2!1sid!2sid!4v1625500000000!5m2!1sid!2sid" 
            className="w-full h-full rounded-[35px]"
            allowFullScreen="" 
            loading="lazy"
            title="Google Maps Risol Aril"
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Kontak;