import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border border-gray-800 rounded-xl p-4 shadow-md text-center">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Abhinav Kumar. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="mailto:abhikumar3584@gmail.com" className="text-green-400 hover:text-green-300 transition-colors">
            <i className="fas fa-envelope"></i> abhikumar3584@gmail.com
          </a>
          <a href="tel:+917500024959" className="text-green-400 hover:text-green-300 transition-colors">
            <i className="fas fa-phone"></i> +91-7500024959
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;