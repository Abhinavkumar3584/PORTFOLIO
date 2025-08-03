import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  // Add CSS to remove selection effects
  const noSelectStyle = {
    WebkitTapHighlightColor: 'transparent',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    KhtmlUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    outline: 'none'
  };
  
  const navItems = [
    { label: 'HOME', href: window.innerWidth >= 768 ? '#sidebar' : '#sidebar-mobile', id: 'sidebar-mobile' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'EDUCATION', href: '#education', id: 'education' },
    { label: 'CERTIFICATES', href: '#certification', id: 'certification' },
    { label: 'ACTIVITIES', href: '#activities', id: 'activities' },
    { label: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements' },
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

    // Handle window resize to set mobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check for hash
    handleHashChange();

    // Listen for hash changes and resize events
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    if (isMobile) {
      setIsMobileMenuOpen(false); // Close menu when an item is clicked on mobile
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Styles for the menu button
  const menuButtonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 50,
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    transform: isMobileMenuOpen ? 'rotate(90deg)' : 'rotate(0)',
    backgroundColor: darkMode ? 'white' : '#1f2937',
    color: darkMode ? '#1f2937' : 'white',
  };

  // Mobile menu overlay styles
  const overlayStyle = {
    position: 'fixed',
    bottom: isMobileMenuOpen ? '0' : '-100%',
    left: '0',
    right: '0',
    padding: '20px',
    paddingBottom: '80px', // Space for the menu button
    zIndex: 40,
    backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.95)' : 'rgba(31, 41, 55, 0.95)',
    backdropFilter: 'blur(5px)',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '70vh',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    boxShadow: '0 -5px 20px rgba(0, 0, 0, 0.1)',
  };

  return (    <>      {/* Desktop Navigation */}      
    <nav className={`sticky top-0 md:static bottom-0 left-2 right-2 z-10 py-3 md:py-3 px-4 md:px-2 mb-2 md:mb-0 
        ${darkMode ? 'bg-white text-gray-800 border-gray-300' : 'bg-gray-800 text-white border-gray-700'} 
        border md:border rounded-3xl md:rounded-3xl shadow-md transition-all duration-300
        ${isMobile ? 'hidden' : 'flex'}`}
        style={{...noSelectStyle, transform: 'translateZ(0)'}}>
        <ul className="flex justify-between flex-nowrap overflow-x-auto gap-1 md:gap-2 w-full">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <li key={index} className="flex-shrink-0">
                <a 
                  href={item.href} 
                  onClick={() => handleNavClick(item.id)}                  className={`relative block px-1.5 md:px-2 p-2 
                    ${isActive 
                      ? 'text-green-500 dark:text-green-400 font-bold' 
                      : darkMode ? 'text-gray-800' : 'text-gray-200'} 
                    ${darkMode 
                      ? 'hover:bg-gray-100' 
                      : 'hover:bg-gray-700'} 
                    rounded-3xl transition-colors duration-200 text-xs md:text-base whitespace-nowrap overflow-hidden`}
                  style={noSelectStyle}
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
          
          {/* Dark/Light Mode Toggle Button for Desktop */}
          <li className="flex-shrink-0">
            <button 
              onClick={toggleTheme}              className={`block px-1.5 md:px-2 py-1 
                ${darkMode 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-gray-200 hover:bg-gray-700'} 
                rounded-3xl transition-colors duration-200 font-medium text-xs md:text-base whitespace-nowrap`}
              aria-label="Toggle dark mode"
              style={noSelectStyle}
            >
              <div className="flex items-center justify-center">
                <span className="sr-only">{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </div>
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      {isMobile && (
        <button 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          style={menuButtonStyle}
          className="transition-transform duration-300 ease-in-out"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div style={overlayStyle}>
          <div className="grid grid-cols-2 gap-4 w-full overflow-y-auto px-2 py-4">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <a 
                  key={index}
                  href={item.href} 
                  onClick={() => handleNavClick(item.id)}
                  className={`relative flex items-center justify-center p-3 
                    ${isActive 
                      ? 'text-green-500 dark:text-green-400 font-bold' 
                      : darkMode ? 'text-gray-800' : 'text-gray-200'} 
                    ${darkMode 
                      ? 'bg-gray-100 hover:bg-gray-200' 
                      : 'bg-gray-700 hover:bg-gray-600'} 
                    rounded-xl transition-all duration-200 text-sm font-medium
                    ${isActive ? 'scale-105 shadow-md' : 'scale-100'}`}
                  style={noSelectStyle}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          
          {/* Theme Toggle Button for Mobile Menu */}
          <button 
            onClick={toggleTheme}
            className={`mt-4 mx-auto flex items-center justify-center px-4 py-3 rounded-full shadow-md
              ${darkMode 
                ? 'bg-gray-800 text-white' 
                : 'bg-white text-gray-800'} 
              transition-colors duration-200`}
            aria-label="Toggle dark mode"
            style={noSelectStyle}
          >
            <span className="mr-2 font-medium">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;