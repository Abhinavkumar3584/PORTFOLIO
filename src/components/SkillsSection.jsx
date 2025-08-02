import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SkillsSection = () => {
  const { darkMode } = useContext(ThemeContext);

  const skills = [
    // Programming Languages
    { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png', color: 'text-blue-600 dark:text-blue-400', borderColor: 'border-blue-600 dark:border-blue-400', category: 'language' },
    { name: 'C/C++', icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png', color: 'text-blue-700 dark:text-blue-300', borderColor: 'border-blue-700 dark:border-blue-300', category: 'language' },
    { name: 'Java', icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png', color: 'text-red-600 dark:text-red-400', borderColor: 'border-red-600 dark:border-red-400', category: 'language' },
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/000000/html-5.png', color: 'text-orange-600 dark:text-orange-400', borderColor: 'border-orange-600 dark:border-orange-400', category: 'language' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/000000/css3.png', color: 'text-blue-600 dark:text-blue-400', borderColor: 'border-blue-600 dark:border-blue-400', category: 'language' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png', color: 'text-yellow-600 dark:text-yellow-400', borderColor: 'border-yellow-600 dark:border-yellow-400', category: 'language' },
    
    // Developer Tools
    { name: 'Visual Studio Code', icon: 'https://img.icons8.com/color/48/000000/visual-studio-code-2019.png', color: 'text-blue-600 dark:text-blue-400', borderColor: 'border-blue-600 dark:border-blue-400', category: 'tool' },
    { name: 'Git', icon: 'https://img.icons8.com/color/48/000000/git.png', color: 'text-orange-600 dark:text-orange-400', borderColor: 'border-orange-600 dark:border-orange-400', category: 'tool' },
    { name: 'GitHub', icon: 'https://img.icons8.com/color/48/000000/github.png', color: 'text-gray-700 dark:text-gray-300', borderColor: 'border-gray-700 dark:border-gray-300', category: 'tool' },
    
    // Frameworks & Libraries
    { name: 'React.js', icon: 'https://img.icons8.com/color/48/000000/react-native.png', color: 'text-blue-500 dark:text-blue-400', borderColor: 'border-blue-500 dark:border-blue-400', category: 'framework' },
    { name: 'Django', icon: 'https://img.icons8.com/color/48/000000/django.png', color: 'text-green-600 dark:text-green-400', borderColor: 'border-green-600 dark:border-green-400', category: 'framework' },
    { name: 'OpenCV', icon: 'https://img.icons8.com/color/48/000000/opencv.png', color: 'text-green-600 dark:text-green-400', borderColor: 'border-green-600 dark:border-green-400', category: 'framework' },
    { name: 'Scikit-learn', icon: 'https://img.icons8.com/color/48/000000/machine-learning.png', color: 'text-orange-600 dark:text-orange-400', borderColor: 'border-orange-600 dark:border-orange-400', category: 'framework' },
    
    // Cloud & Databases
    { name: 'SQL', icon: 'https://img.icons8.com/color/48/000000/sql.png', color: 'text-blue-600 dark:text-blue-400', borderColor: 'border-blue-600 dark:border-blue-400', category: 'database' },
    { name: 'Pinecone', icon: 'https://img.icons8.com/color/48/000000/database.png', color: 'text-cyan-600 dark:text-cyan-400', borderColor: 'border-cyan-600 dark:border-cyan-400', category: 'database' },
    
    // Operating Systems
    { name: 'Windows', icon: 'https://img.icons8.com/color/48/000000/windows-logo.png', color: 'text-blue-600 dark:text-blue-400', borderColor: 'border-blue-600 dark:border-blue-400', category: 'platform' },
    { name: 'Linux', icon: 'https://img.icons8.com/color/48/000000/linux.png', color: 'text-yellow-600 dark:text-yellow-400', borderColor: 'border-yellow-600 dark:border-yellow-400', category: 'platform' },
    
    // Graphics & UI/UX designing tools
    { name: 'Canva', icon: 'https://img.icons8.com/color/48/000000/canva.png', color: 'text-blue-600 dark:text-blue-400', borderColor: 'border-blue-600 dark:border-blue-400', category: 'design' },
    { name: 'Figma', icon: 'https://img.icons8.com/color/48/000000/figma.png', color: 'text-purple-600 dark:text-purple-400', borderColor: 'border-purple-600 dark:border-purple-400', category: 'design' },
    
    // AI & Automation Tools
    { name: 'GitHub Copilot', icon: 'https://img.icons8.com/color/48/000000/github.png', color: 'text-gray-700 dark:text-gray-300', borderColor: 'border-gray-700 dark:border-gray-300', category: 'ai' },
    { name: 'ChatGPT', icon: 'https://img.icons8.com/color/48/000000/chatgpt.png', color: 'text-green-600 dark:text-green-400', borderColor: 'border-green-600 dark:border-green-400', category: 'ai' },
    { name: 'Gemini', icon: 'https://img.icons8.com/color/48/000000/google-logo.png', color: 'text-blue-600 dark:text-blue-400', borderColor: 'border-blue-600 dark:border-blue-400', category: 'ai' },
    
    // CMS & Web Tools
    { name: 'WordPress', icon: 'https://img.icons8.com/color/48/000000/wordpress.png', color: 'text-blue-600 dark:text-blue-400', borderColor: 'border-blue-600 dark:border-blue-400', category: 'cms' },
    { name: 'Zoho', icon: 'https://img.icons8.com/color/48/000000/zoho.png', color: 'text-red-600 dark:text-red-400', borderColor: 'border-red-600 dark:border-red-400', category: 'cms' },
    { name: 'Wild Apricot', icon: 'https://img.icons8.com/color/48/000000/website.png', color: 'text-orange-600 dark:text-orange-400', borderColor: 'border-orange-600 dark:border-orange-400', category: 'cms' },
    { name: 'SEO', icon: 'https://img.icons8.com/color/48/000000/search.png', color: 'text-green-600 dark:text-green-400', borderColor: 'border-green-600 dark:border-green-400', category: 'cms' }
  ];

  // Group skills by category
  const languages = skills.filter(skill => skill.category === 'language');
  const tools = skills.filter(skill => skill.category === 'tool');
  const frameworks = skills.filter(skill => skill.category === 'framework');
  const databases = skills.filter(skill => skill.category === 'database');
  const platforms = skills.filter(skill => skill.category === 'platform');
  const design = skills.filter(skill => skill.category === 'design');
  const ai = skills.filter(skill => skill.category === 'ai');
  const cms = skills.filter(skill => skill.category === 'cms');

  return (
    <section id="skills" className="mb-12 relative bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-3xl p-4 md:p-8 overflow-hidden max-w-full mx-auto shadow-md">
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
              className={`border-2 ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 dark:hover:border-green-400 transition-colors duration-300 group bg-white dark:bg-gray-800 shadow-sm hover:shadow-md`}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className={`font-semibold ${skill.color} group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-300 text-sm`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Tools */}
      <div className="mb-6 relative z-10">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 border-l-4 border-purple-500 pl-2">Developer Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {tools.map((skill, index) => (
            <div 
              key={index} 
              className={`border-2 ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 dark:hover:border-green-400 transition-colors duration-300 group bg-white dark:bg-gray-800 shadow-sm hover:shadow-md`}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className={`font-semibold ${skill.color} group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-300 text-sm`}>
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
              className={`border-2 ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 dark:hover:border-green-400 transition-colors duration-300 group bg-white dark:bg-gray-800 shadow-sm hover:shadow-md`}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className={`font-semibold ${skill.color} group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-300 text-sm`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cloud & Databases */}
      <div className="mb-6 relative z-10">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 border-l-4 border-yellow-500 pl-2">Cloud & Databases</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {databases.map((skill, index) => (
            <div 
              key={index} 
              className={`border-2 ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 dark:hover:border-green-400 transition-colors duration-300 group bg-white dark:bg-gray-800 shadow-sm hover:shadow-md`}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className={`font-semibold ${skill.color} group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-300 text-sm`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Operating Systems */}
      <div className="mb-6 relative z-10">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 border-l-4 border-red-500 pl-2">Operating Systems</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {platforms.map((skill, index) => (
            <div 
              key={index} 
              className={`border-2 ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 dark:hover:border-green-400 transition-colors duration-300 group bg-white dark:bg-gray-800 shadow-sm hover:shadow-md`}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className={`font-semibold ${skill.color} group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-300 text-sm`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Graphics & UI/UX designing tools */}
      <div className="mb-6 relative z-10">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 border-l-4 border-pink-500 pl-2">Graphics & UI/UX Designing Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {design.map((skill, index) => (
            <div 
              key={index} 
              className={`border-2 ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 dark:hover:border-green-400 transition-colors duration-300 group bg-white dark:bg-gray-800 shadow-sm hover:shadow-md`}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className={`font-semibold ${skill.color} group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-300 text-sm`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI & Automation Tools */}
      <div className="mb-6 relative z-10">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 border-l-4 border-indigo-500 pl-2">AI & Automation Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {ai.map((skill, index) => (
            <div 
              key={index} 
              className={`border-2 ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 dark:hover:border-green-400 transition-colors duration-300 group bg-white dark:bg-gray-800 shadow-sm hover:shadow-md`}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className={`font-semibold ${skill.color} group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-300 text-sm`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CMS & Web Tools */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3 border-l-4 border-cyan-500 pl-2">CMS & Web Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {cms.map((skill, index) => (
            <div 
              key={index} 
              className={`border-2 ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 dark:hover:border-green-400 transition-colors duration-300 group bg-white dark:bg-gray-800 shadow-sm hover:shadow-md`}
            >
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
              />
              <span className={`font-semibold ${skill.color} group-hover:text-green-600 dark:group-hover:text-green-400 transition-all duration-300 text-sm`}>
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