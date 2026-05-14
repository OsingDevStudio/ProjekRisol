import React from "react";
import { Link } from "react-router-dom"; // WAJIB DIIMPORT
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bck.png"
            alt="Background Risol Aril"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 md:px-6 py-2 rounded-full mb-6 border border-white/20">
            <span className="text-xs md:text-sm font-bold text-orange-300 tracking-widest uppercase">
              ✨ Risol Premium Surabaya ✨
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
            Selamat Datang di <br />
            <span className="text-white">Risol</span>{" "}
            <span className="text-red-500">Aril</span>
          </h1>

          <p className="text-base md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium drop-shadow-lg leading-relaxed">
            Nikmati sensasi risol premium dengan isian melimpah dan kulit yang
            super renyah di setiap gigitan.
          </p>

          <div className="flex justify-center">
            {/* GANTI <a> MENJADI <Link> DAN href MENJADI to */}
            <Link
              to="/menu"
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Lihat Menu <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;