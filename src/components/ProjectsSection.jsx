import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ProjectsSection = () => {
  const { darkMode } = useContext(ThemeContext);

  const projects = [
    {
      title: 'Need DU: Web platform for Delhi University students',
      description: 'Tools: HTML, CSS, JavaScript, SQL, React',
      image: 'https://img.icons8.com/ios-filled/50/000000/university.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'SQL', 'React'],
      link: 'https://github.com/Abhinavkumar3584/Need-DU',
      points: [
        'Created a web platform enabling Delhi University students to connect',
        'Integrated features to access College exam PYQ, buy/sell items, and find nearby accommodations to their colleges'
      ]
    },
    {
      title: 'Analysis of Agritech Startups in India',
      description: 'Tools: Data analysis tools (e.g., Python, Excel)',
      image: 'https://img.icons8.com/ios-filled/50/000000/tractor.png',
      tags: ['Python', 'Excel', 'Data Analysis'],
      link: '#',
      points: [
        'Conducted in-depth analysis of Agritech startups, identifying growth trends and challenges - urban and rural',
        'Examined the advantages of technology integration in the agricultural sector, Pros and cons'
      ]
    },
    {
      title: 'Cloud Resource Manager Software',
      description: 'Tools: React.js, Node.js',
      image: 'https://img.icons8.com/ios-filled/50/000000/cloud-computing.png',
      tags: ['React.js', 'Node.js', 'Django', 'MongoDB'],
      link: '#',
      points: [
        'Engineered a monitoring system for personal servers, with a Django backend for system resource data collection',
        'Designed Figma screens and frontend created with React.js for real-time data visualization and user interaction and Integrated Node.js for user authentication and MongoDB for storage'
      ]
    }
  ];
  return (
    <section id="projects" className="mb-12 relative bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-3xl p-4 md:p-8 overflow-hidden max-w-full mx-auto shadow-md">
      {/* Diagonal Line Background - Similar to Header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 inline-block border-b-2 border-green-500 dark:border-green-400 pb-1 relative z-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {projects.map((project, index) => (          <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-gray-400 dark:border-gray-700 hover:border-green-500">
            <div className="p-5">
              <div className="flex items-center mb-3">
                <img src={project.image} alt={project.title} className="w-10 h-10 mr-3" />
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{project.title}</h3>
              </div>
              <div className="text-right mb-3 text-green-500 dark:text-green-400 font-medium border-b border-gray-300 dark:border-gray-600 pb-2">
                {project.description}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 italic mb-3 text-right font-medium">Tech Stack: {project.tags.join(', ')}</p>
              <div className="space-y-3">
                <ul className="list-disc pl-5 space-y-2">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-200 text-sm font-medium text-justified">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 px-5 py-3 border-t border-gray-300 dark:border-gray-600 flex justify-between items-center">
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{`PROJECT ${index + 1}`}</span>
              <button className="text-green-500 dark:text-green-400 text-sm font-medium hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300 flex items-center gap-1">
                View Project 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;