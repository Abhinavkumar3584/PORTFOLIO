import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <footer className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-md text-center">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-600 dark:text-gray-200">
            &copy; {new Date().getFullYear()} Abhinav Kumar. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="mailto:abhikumar3584@gmail.com" className="text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors">
            <i className="fas fa-envelope"></i> abhikumar3584@gmail.com
          </a>
          <a href="tel:+917500024959" className="text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors">
            <i className="fas fa-phone"></i> +91-7500024959
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;