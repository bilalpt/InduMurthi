import React from 'react';
import Data from './Data';
import './home.css';

const Homes = () => {
  return (
    <section id="home" className="relative w-full py-20 overflow-hidden bg-white">
      
      {/* Background accents */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-gradient-to-tr from-blue-100 to-blue-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-tr from-pink-100 to-pink-200 rounded-full blur-3xl opacity-30 animate-float-slow"></div>

      {/* Main Intro Row */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-8 mt-20 relative z-10">
        
        {/* Profile Image */}
        <div
          className="
            w-full max-w-sm aspect-square rounded-full
            bg-[url('/profilea.jpeg')] bg-cover bg-center shadow-lg
            mx-auto lg:mx-0
            transition-transform duration-500 hover:scale-105
          "
          style={{
            boxShadow: 'inset 0 0 0 9px rgba(255,255,255,0.3)',
            animation: 'profile_animate 8s ease-in-out infinite 1s',
          }}
        ></div>

        {/* Text & Socials */}
        <div className="flex flex-col justify-center animate-fadeUp">
          <Data />
          <p className="mt-4 text-gray-500 italic text-sm">
            “Leadership is not about being in charge, it’s about taking care of those in your charge.”
          </p>
          <p className="mt-6 text-lg font-signature text-gray-800">— Indu Murthi</p>

          {/* Social Icons Inline */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-gray-800 hover:text-blue-500 text-xl transition-colors">
              <i className="uil uil-linkedin"></i>
            </a>
            <a href="#" className="text-gray-800 hover:text-pink-500 text-xl transition-colors">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-900 text-xl transition-colors">
              <i className="uil uil-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Achievements Row */}
      <div className="max-w-7xl mx-auto mt-16 px-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <h3 className="text-3xl font-bold text-gray-800">15+</h3>
          <p className="text-gray-500">Years in Leadership</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-800">50+</h3>
          <p className="text-gray-500">Successful Projects</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-800">10+</h3>
          <p className="text-gray-500">Global Awards</p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto mt-12 px-8 text-center">
        <p className="text-gray-600 leading-relaxed">
          Indu Murthi, CEO and visionary leader, has been steering companies towards innovation and excellence for over 15 years.
          With a strong belief in creativity, technology, and teamwork, Indu has transformed ideas into impactful solutions
          recognized worldwide.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-sm animate-bounce">
        <i className="uil uil-arrow-down"></i>
      </div>
    </section>
  );
};

export default Homes;
