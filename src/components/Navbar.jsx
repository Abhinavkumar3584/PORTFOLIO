import React from 'react';

const Navbar = () => {
  const navItems = [
    { label: 'HOME', href: window.innerWidth >= 768 ? '#sidebar' : '#sidebar-mobile' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CERTIFICATES', href: '#certification' },
    { label: 'GALLERY', href: '#gallery' },
  ];

  return (
    <nav className="fixed md:static bottom-0 left-2 right-2 z-10 py-3 md:py-3 px-4 md:px-2 mb-2 md:mb-0 bg-white border-t border-gray-300 md:border-t-0 md:border rounded-full md:rounded-lg shadow-md">
      {/* Navigation for both mobile and desktop */}
      <ul className="flex justify-between flex-nowrap overflow-x-auto gap-1 md:gap-2">
        {navItems.map((item, index) => (
          <li key={index} className="flex-shrink-0">
            <a 
              href={item.href} 
              className="block px-1.5 md:px-2 py-1 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-200 font-medium text-xs md:text-base whitespace-nowrap border border-gray-200"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;