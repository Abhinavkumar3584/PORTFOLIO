import React from 'react';
import ParticleBackground from './ParticleBackground';

const Header = () => {
  const expertise = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ), 
      text: 'Frontend Development',
      color: 'text-blue-400',
      borderColor: 'hover:border-blue-400',
      hoverText: 'group-hover:text-blue-400'
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M18 8H6"></path>
          <path d="M18 12H6"></path>
          <path d="M18 16H6"></path>
        </svg>
      ), 
      text: 'Data Analysis',
      color: 'text-purple-400',
      borderColor: 'hover:border-purple-400',
      hoverText: 'group-hover:text-purple-400'
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3h6v11h2v7H7v-7h2V3z"></path>
          <path d="M11 6h2"></path>
          <path d="M11 9h2"></path>
        </svg>
      ), 
      text: 'R&D',
      color: 'text-orange-400',
      borderColor: 'hover:border-orange-400',
      hoverText: 'group-hover:text-orange-400'
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 3v16H6V3"></path>
          <path d="M14 3h-4l-2 2 2 2h4l2-2-2-2z"></path>
        </svg>
      ), 
      text: 'UI/UX Design',
      color: 'text-green-400',
      borderColor: 'hover:border-green-400',
      hoverText: 'group-hover:text-green-400'
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3c1.5 0 2.5 1 3 2.5"></path>
          <path d="M12 3c-1.5 0-2.5 1-3 2.5"></path>
          <path d="M12 21c2.5 0 4.5-2 4.5-4.5S14.5 12 12 12s-4.5 2-4.5 4.5S9.5 21 12 21z"></path>
          <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12z"></path>
          <path d="M17 17l3 3"></path>
          <path d="M7 7L4 4"></path>
        </svg>
      ), 
      text: 'AI & ML',
      color: 'text-pink-400',
      borderColor: 'hover:border-pink-400',
      hoverText: 'group-hover:text-pink-400'
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 8 0 4 4 0 0 0-4-4z"></path>
          <path d="M8 16l1.7-3.4c1 .46 2.2.4 3.2-.1l1.7 3.5"></path>
          <path d="M18 19h-1.5l-1.7-3.4c-1 .46-2.2.4-3.2-.1L9.5 19H6l3-6"></path>
        </svg>
      ), 
      text: 'Innovation',
      color: 'text-yellow-400',
      borderColor: 'hover:border-yellow-400',
      hoverText: 'group-hover:text-yellow-400'
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 8v8"></path>
          <path d="M8 12h8"></path>
        </svg>
      ), 
      text: 'ML Frameworks',
      color: 'text-cyan-400',
      borderColor: 'hover:border-cyan-400',
      hoverText: 'group-hover:text-cyan-400'
    },
  ];

  return (
    <div className="relative bg-black border border-gray-400 rounded-lg p-4 md:p-8 overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Diagonal Line Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      {/* Introduction Text */}
      <div className="text-white mb-6 md:mb-10 max-w-3xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 flex flex-wrap items-center">
          <span className="mr-2">👋</span>
          Hi, I'm <span className="ml-2 text-green-400 animated-line">Abhinav Kumar</span>
        </h1>
        
        <p className="text-gray-300 leading-relaxed text-base md:text-lg">
          A passionate <span className="text-green-400">front-end developer</span> dedicated to crafting immersive digital experiences. 
          With hands-on experience in building intelligent systems and a background in IT and Mathematical Innovation from the University of Delhi.
        </p>
      </div>
      
      {/* Expertise Areas with Different Colors */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-3 relative z-10">
        {expertise.map((item, index) => (
          <div 
            key={index} 
            className={`border border-gray-400 rounded-md p-2 md:p-3 flex flex-col items-center ${item.borderColor} transition-colors duration-300 text-center group`}
          >
            <div className={`${item.color} transition-colors duration-300`}>
              {item.icon}
            </div>
            <div className={`text-xs text-gray-400 mt-2 font-medium ${item.hoverText} transition-colors duration-300`}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;