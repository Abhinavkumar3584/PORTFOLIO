import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState('');
  
  const navItems = [
    { label: 'HOME', href: window.innerWidth >= 768 ? '#sidebar' : '#sidebar-mobile', id: 'sidebar-mobile' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'CERTIFICATES', href: '#certification', id: 'certification' },
    { label: 'GALLERY', href: '#gallery', id: 'gallery' },
  ];

  useEffect(() => {
    // Set up intersection observer to detect which section is currently in view
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.3, // at least 30% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // When a section enters the viewport
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section[id], #sidebar-mobile').forEach((section) => {
      observer.observe(section);
    });

    // Set active section based on hash in URL when page loads
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      }
    };

    // Initial check for hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      // Clean up
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
  };

  return (
    <nav className={`fixed md:static bottom-0 left-2 right-2 z-10 py-3 md:py-3 px-4 md:px-2 mb-2 md:mb-0 
      ${darkMode 
        ? 'bg-white text-gray-800 border-gray-300' 
        : 'bg-gray-800 text-white border-gray-700'} 
      border md:border rounded-full md:rounded-lg shadow-md transition-colors duration-300`}>
      {/* Navigation for both mobile and desktop */}
      <ul className="flex justify-between flex-nowrap overflow-x-auto gap-1 md:gap-2">
        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;
          return (
            <li key={index} className="flex-shrink-0">
              <a 
                href={item.href} 
                onClick={() => handleNavClick(item.id)}
                className={`relative block px-1.5 md:px-2 p-2 
                  ${isActive 
                    ? 'text-green-500 dark:text-green-400 font-bold' 
                    : darkMode ? 'text-gray-800' : 'text-gray-200'} 
                  ${darkMode 
                    ? 'hover:bg-gray-100' 
                    : 'hover:bg-gray-700'} 
                  rounded-md transition-colors duration-200 text-xs md:text-base whitespace-nowrap overflow-hidden`}
              >
                {item.label}
                
                {/* Enhanced underline with flashlight effect */}
                {isActive && (
                  <>
                    {/* Base underline */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 dark:bg-green-400 rounded-full"></span>
                    
                    {/* Flashlight effect */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 flashlight-effect"></span>
                  </>
                )}
              </a>
            </li>
          );
        })}
        
        {/* Dark/Light Mode Toggle Button */}
        <li className="flex-shrink-0">
          <button 
            onClick={toggleTheme}
            className={`block px-1.5 md:px-2 py-1 
              ${darkMode 
                ? 'text-gray-800 hover:bg-gray-100' 
                : 'text-gray-200 hover:bg-gray-700'} 
              rounded-md transition-colors duration-200 font-medium text-xs md:text-base whitespace-nowrap`}
            aria-label="Toggle dark mode"
          >
            <div className="flex items-center justify-center">
              <span className="sr-only">{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;