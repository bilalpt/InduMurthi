import React from 'react';
import { UilTelegramAlt } from '@iconscout/react-unicons';

const Data = () => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-4xl font-bold flex items-center gap-2 mb-2">
        Indu Murthi <span className="home__hand text-3xl">👋</span>
      </h1>
      <h3 className="relative text-lg font-normal pl-20 mb-4">
        <span className="absolute left-0 top-2 w-16 h-[1px] bg-gray-500"></span>
        Visual Designer
      </h3>
      <p className="text-gray-600 max-w-md mb-6">
        I’m a creative designer based in New York, and I’m very passionate and dedicated to my work.
      </p>
      <a href="#contact"
         className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors">
        Say Hello <UilTelegramAlt size="20" />
      </a>

      <div className="mt-10">
        <a href="#about" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors">
          <i className="uil uil-mouse-alt text-lg"></i>
          <span className="mx-1 text-sm">Scroll Down</span>
          <i className="uil uil-arrow-down text-base"></i>
        </a>
      </div>
    </div>
  );
};

export default Data;
