import React from 'react';

const Social = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <a href="https://www.instagram.com/yourusername" target="_blank" rel="noreferrer" 
         className="text-gray-800 hover:text-gray-600 text-xl transition-colors">
        <i className="uil uil-instagram"></i>
      </a>
      <a href="https://dribbble.com/yourusername" target="_blank" rel="noreferrer" 
         className="text-gray-800 hover:text-gray-600 text-xl transition-colors">
        <i className="uil uil-dribbble"></i>
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" 
         className="text-gray-800 hover:text-gray-600 text-xl transition-colors">
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
