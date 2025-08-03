import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import profileImage from '../assets/images/abhi.jpg';

const Sidebar = () => {
  const { darkMode } = useContext(ThemeContext);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-full h-full" fill="currentColor">
          <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
        </svg>
      ),
      url: 'https://www.linkedin.com/in/abhinav-kumar-0ba731239/',
      color: 'text-blue-500'
    },
    {
      name: 'GitHub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-full h-full" fill="currentColor">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
      ),
      url: 'https://github.com/Abhinavkumar3584',
      color: 'text-purple-400'
    },
    {
      name: 'Twitter',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full h-full" fill="currentColor">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      ),
      url: 'https://x.com/ABHINAV11555548',
      color: 'text-cyan-400'
    }
  ];

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: '+91-7500024959',
      link: 'tel:+91-7500024959'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: 'abhikumar3584@gmail.com',
      link: 'mailto:abhikumar3584@gmail.com'
    }
  ];

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/Abhinav_Kumar_Resume.pdf'; // File in public folder
    link.download = 'Abhinav_Kumar_Resume.pdf';
    link.setAttribute('download', 'Abhinav_Kumar_Resume.pdf'); // Force download
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-3xl backdrop-blur-md p-7 md:sticky md:top-4 h-auto w-full">
      {/* Mobile layout (horizontal with right side stacked) */}
      <div className="flex md:hidden items-center">
        {/* Left side: Profile Image */}
        <div className="flex-shrink-0 mr-2">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-green-500 dark:border-green-400 p-1">
            <img 
              src={profileImage} 
              alt="Abhinav Kumar" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        {/* Right side: Column with Open to Work badge, Social Media Icons and Resume Button */}
        <div className="flex-grow flex flex-col justify-evenly h-40 py-2">
          {/* Open to Work Badge with Animation */}
          <div className="flex justify-center">
            <div className="relative px-3 py-1 rounded-3xl text-white text-sm font-medium bg-gradient-to-r from-purple-500 via-green-500 to-blue-600 bg-size-200 animate-gradient-x">
              <div className="absolute inset-0 rounded-full bg-white opacity-20"></div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-white mr-2 animate-ping"></div>
                <span>Open to Work</span>
              </div>
            </div>
          </div>
          
          {/* Social Media Icons - Centered vertically */}
          <div className="flex justify-center gap-3">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 flex items-center justify-center rounded-3xl border border-gray-300 dark:border-gray-600 ${social.color} hover:text-green-500 hover:border-green-500 transition-all duration-300`}
                aria-label={social.name}
              >
                <div className="w-5 h-5">{social.icon}</div>
              </a>
            ))}
          </div>
          
          {/* Resume Download Button */}
          <button 
            onClick={handleDownload}
            className="py-2 bg-green-500 hover:bg-green-600 rounded-3xl text-white font-medium transition-colors duration-300 flex items-center justify-center gap-1 text-sm"
          >
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </button>
        </div>
      </div>
      
      {/* Desktop layout (vertical) */}
      <div className="hidden md:block">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">          
          <div className="w-60 h-60 rounded-full overflow-hidden border-2 border-green-500 dark:border-green-400 p-1">
            <img 
              src={profileImage} 
              alt="Abhinav Kumar" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        {/* Name */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Abhinav Kumar</h2>
          <p className="text-green-500 dark:text-green-400 text-sm">Frontend Developer</p>
        </div>
        
        {/* Open to Work Badge with Animation */}
        <div className="flex justify-center mb-4">          <div className="relative px-4 py-1 rounded-3xl text-white text-sm font-medium bg-gradient-to-r from-purple-500 via-green-500 to-blue-600 bg-size-200 animate-gradient-x">
            <div className="absolute inset-0 rounded-3xl bg-white opacity-20"></div>
            <div className="flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white mr-2 animate-ping"></div>
              <span>Open to Work</span>
            </div>
          </div>
        </div>
        
        {/* Social Media Links - UPDATED SIZES */}
        <div className="flex justify-center gap-3 mb-6">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 flex items-center justify-center rounded-3xl border border-gray-300 dark:border-gray-600 ${social.color} hover:text-green-500 hover:border-green-500 transition-all duration-300`}
              aria-label={social.name}
            >
              <div className="w-4 h-4">{social.icon}</div>
            </a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mb-6 space-y-2">
          <h3 className="text-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Contact</h3>
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors duration-300"
            >
              <span className="text-green-500">{contact.icon}</span>
              <span>{contact.text}</span>
            </a>
          ))}
        </div>
        
        {/* Resume Download Button */}
        <button 
          onClick={handleDownload}
          className="w-full py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white font-medium transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Resume
        </button>
      </div>
    </div>
  );
};

export default Sidebar;