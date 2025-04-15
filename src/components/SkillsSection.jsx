import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SkillsSection = () => {
  const { darkMode } = useContext(ThemeContext);

  const skills = [
    // Programming Languages
    { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png', color: 'text-blue-700', borderColor: 'border-blue-700', category: 'language' },
    { name: 'Java', icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png', color: 'text-red-700', borderColor: 'border-red-700', category: 'language' },
    { name: 'C/C++', icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png', color: 'text-blue-800', borderColor: 'border-blue-800', category: 'language' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png', color: 'text-yellow-500', borderColor: 'border-yellow-500', category: 'language' },
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/000000/html-5.png', color: 'text-orange-500', borderColor: 'border-orange-500', category: 'language' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/000000/css3.png', color: 'text-blue-500', borderColor: 'border-blue-500', category: 'language' },
    { name: 'Matlab', icon: 'https://img.icons8.com/fluency/48/000000/matlab.png', color: 'text-red-600', borderColor: 'border-red-600', category: 'language' },
    
    // Frameworks & Libraries
    { name: 'React.js', icon: 'https://img.icons8.com/color/48/000000/react-native.png', color: 'text-blue-400', borderColor: 'border-blue-400', category: 'framework' },
    { name: 'Django', icon: 'https://img.icons8.com/color/48/000000/django.png', color: 'text-green-700', borderColor: 'border-green-700', category: 'framework' },
    { name: 'OpenCV', icon: 'https://img.icons8.com/color/48/000000/opencv.png', color: 'text-green-500', borderColor: 'border-green-500', category: 'framework' },
    { name: 'Scikit-learn', icon: 'https://img.icons8.com/color/48/000000/machine-learning.png', color: 'text-orange-500', borderColor: 'border-orange-500', category: 'framework' },
    
    // Tools & Technologies
    { name: 'Git', icon: 'https://img.icons8.com/color/48/000000/git.png', color: 'text-orange-600', borderColor: 'border-orange-600', category: 'tool' },
    { name: 'VS Code', icon: 'https://img.icons8.com/color/48/000000/visual-studio-code-2019.png', color: 'text-blue-500', borderColor: 'border-blue-500', category: 'tool' },
    { name: 'Figma', icon: 'https://img.icons8.com/color/48/000000/figma.png', color: 'text-purple-600', borderColor: 'border-purple-600', category: 'tool' },
    { name: 'Canva', icon: 'https://img.icons8.com/color/48/000000/canva.png', color: 'text-blue-500', borderColor: 'border-blue-500', category: 'tool' },
    
    // Database & Cloud
    { name: 'SQL', icon: 'https://img.icons8.com/color/48/000000/sql.png', color: 'text-blue-500', borderColor: 'border-blue-500', category: 'database' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png', color: 'text-green-600', borderColor: 'border-green-600', category: 'database' },
    { name: 'Pinecone', icon: 'https://img.icons8.com/color/48/000000/database.png', color: 'text-cyan-600', borderColor: 'border-cyan-600', category: 'database' },
    { name: 'Firebase', icon: 'https://img.icons8.com/color/48/000000/firebase.png', color: 'text-yellow-600', borderColor: 'border-yellow-600', category: 'database' },
    
    // Platforms
    { name: 'Windows', icon: 'https://img.icons8.com/color/48/000000/windows-logo.png', color: 'text-blue-500', borderColor: 'border-blue-500', category: 'platform' },
    { name: 'Linux', icon: 'https://img.icons8.com/color/48/000000/linux.png', color: 'text-yellow-700', borderColor: 'border-yellow-700', category: 'platform' },
  ];

  // Group skills by category
  const languages = skills.filter(skill => skill.category === 'language');
  const frameworks = skills.filter(skill => skill.category === 'framework');
  const tools = skills.filter(skill => skill.category === 'tool');
  const databases = skills.filter(skill => skill.category === 'database');
  const platforms = skills.filter(skill => skill.category === 'platform');

  return (
    <section id="skills" className="mb-12 relative bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-lg p-4 md:p-8 overflow-hidden max-w-full mx-auto shadow-md">
      {/* Diagonal Line Background - Similar to Header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 inline-block border-b-2 border-green-500 dark:border-green-400 pb-1 relative z-10">Skills</h2>
      
      {/* Programming Languages */}
      <div className="mb-6 relative z-10">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 border-l-4 border-green-500 pl-2">Programming Languages</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {languages.map((skill, index) => (
            <div 
              key={index} 
              className={`border-2 ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 transition-colors duration-300 group bg-white dark:bg-gray-800 shadow-sm`}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className={`font-semibold ${skill.color} group-hover:font-bold transition-all duration-300 text-sm`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks & Libraries */}
      <div className="mb-6 relative z-10">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 border-l-4 border-blue-500 pl-2">Frameworks & Libraries</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {frameworks.map((skill, index) => (
            <div 
              key={index} 
              className={`border-2 ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 transition-colors duration-300 group bg-white dark:bg-gray-800 shadow-sm`}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className={`font-semibold ${skill.color} group-hover:font-bold transition-all duration-300 text-sm`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="mb-6 relative z-10">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 border-l-4 border-purple-500 pl-2">Tools & Technologies</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {tools.map((skill, index) => (
            <div 
              key={index} 
              className={`border-2 ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 transition-colors duration-300 group bg-white dark:bg-gray-800 shadow-sm`}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className={`font-semibold ${skill.color} group-hover:font-bold transition-all duration-300 text-sm`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Database & Cloud */}
      <div className="mb-6 relative z-10">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 border-l-4 border-yellow-500 pl-2">Database & Cloud</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {databases.map((skill, index) => (
            <div 
              key={index} 
              className={`border-2 ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 transition-colors duration-300 group bg-white dark:bg-gray-800 shadow-sm`}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className={`font-semibold ${skill.color} group-hover:font-bold transition-all duration-300 text-sm`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Platforms */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 border-l-4 border-red-500 pl-2">Platforms</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {platforms.map((skill, index) => (
            <div 
              key={index} 
              className={`border-2 ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 transition-colors duration-300 group bg-white dark:bg-gray-800 shadow-sm`}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className={`font-semibold ${skill.color} group-hover:font-bold transition-all duration-300 text-sm`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;