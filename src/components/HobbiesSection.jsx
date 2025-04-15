import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const HobbiesSection = () => {
  const { darkMode } = useContext(ThemeContext);

  const hobbies = [
    {
      name: 'Reading',
      icon: 'https://img.icons8.com/color/48/000000/book.png',
      description: 'Technology, sci-fi, personal development'
    },
    {
      name: 'Photography',
      icon: 'https://img.icons8.com/color/48/000000/camera.png',
      description: 'Moments, landscapes, creative angles'
    },
    {
      name: 'Chess',
      icon: 'https://img.icons8.com/color/48/000000/chess.png',
      description: 'Strategic thinking, problem-solving'
    },
    {
      name: 'Hiking',
      icon: 'https://img.icons8.com/color/48/000000/trekking.png',
      description: 'Nature trails, mountains, adventure'
    },
    {
      name: 'Coding',
      icon: 'https://img.icons8.com/color/48/000000/code.png',
      description: 'Web apps, small projects, automation'
    },
    {
      name: 'Music',
      icon: 'https://img.icons8.com/color/48/000000/musical-notes.png',
      description: 'Classical, rock, instrumental'
    }
  ];

  return (
    <section id="hobbies" className="mb-8 relative bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-lg p-3 md:p-5 overflow-hidden max-w-full mx-auto shadow-md">
      {/* Diagonal Line Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 inline-block border-b-2 border-green-500 dark:border-green-400 pb-1">Hobbies & Interests</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-300 dark:border-gray-700 hover:border-green-500">
              <div className="p-3 flex flex-col items-center">
                <img src={hobby.icon} alt={hobby.name} className="w-10 h-10 object-contain mb-2" />
                <h3 className="font-bold text-sm text-gray-800 dark:text-gray-100 mb-1">{hobby.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-xs text-center leading-tight">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;