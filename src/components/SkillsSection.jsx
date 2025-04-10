import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', icon: 'https://img.icons8.com/color/48/000000/html-5.png', color: 'text-orange-500', borderColor: 'border-orange-500' },
    { name: 'CSS', icon: 'https://img.icons8.com/color/48/000000/css3.png', color: 'text-blue-500', borderColor: 'border-blue-500' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png', color: 'text-yellow-500', borderColor: 'border-yellow-500' },
    { name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png', color: 'text-blue-700', borderColor: 'border-blue-700' },
    { name: 'Java', icon: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png', color: 'text-red-700', borderColor: 'border-red-700' },
    { name: 'C/C++', icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png', color: 'text-blue-800', borderColor: 'border-blue-800' },
    { name: 'React.js', icon: 'https://img.icons8.com/color/48/000000/react-native.png', color: 'text-blue-400', borderColor: 'border-blue-400' },
    { name: 'Django', icon: 'https://img.icons8.com/color/48/000000/django.png', color: 'text-green-700', borderColor: 'border-green-700' },
    { name: 'OpenCV', icon: 'https://img.icons8.com/color/48/000000/opencv.png', color: 'text-green-600', borderColor: 'border-green-600' },
    { name: 'Scikit-learn', icon: 'https://img.icons8.com/color/48/000000/machine-learning.png', color: 'text-orange-600', borderColor: 'border-orange-600' },
    { name: 'Git', icon: 'https://img.icons8.com/color/48/000000/git.png', color: 'text-orange-600', borderColor: 'border-orange-600' },
    { name: 'SQL', icon: 'https://img.icons8.com/color/48/000000/sql.png', color: 'text-blue-500', borderColor: 'border-blue-500' },
    { name: 'Pinecone', icon: 'https://img.icons8.com/color/48/000000/database.png', color: 'text-cyan-600', borderColor: 'border-cyan-600' },
    { name: 'Linux', icon: 'https://img.icons8.com/color/48/000000/linux.png', color: 'text-yellow-700', borderColor: 'border-yellow-700' },
    { name: 'Matlab', icon: 'https://img.icons8.com/color/48/000000/matlab.png', color: 'text-red-500', borderColor: 'border-red-500' },
  ];

  return (
    <section id="skills" className="mb-12 relative bg-black border border-gray-400 rounded-lg p-4 md:p-8 overflow-hidden max-w-full mx-auto">
      {/* Diagonal Line Background - Similar to Header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-6 inline-block border-b-2 border-green-400 pb-1 relative z-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 relative z-10">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className={`border ${skill.borderColor} rounded-md p-3 flex items-center gap-3 hover:border-green-500 transition-colors duration-300 group bg-black`}
          >
            <img 
              src={skill.icon} 
              alt={skill.name} 
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" 
            />
            <span className={`font-medium ${skill.color} group-hover:font-bold transition-all duration-300 text-sm`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;