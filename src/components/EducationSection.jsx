import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const EducationSection = () => {
  const { darkMode } = useContext(ThemeContext);

  const education = [
    {
      degree: 'B.Tech (IT & Mathematical Innovation)',
      institution: 'Cluster Innovation Centre, University of Delhi',
      period: '2021 - Present(2025)',
      logo: 'https://img.icons8.com/color/48/000000/graduation-cap.png',
      details: [
        'CGPA: 8.0/10',
        'Selected among top 50 students for this specialized program',
        'Core team member for Convoke 5.0 Hackathon (Logistics & Planning)'
      ]
    },
    {
      degree: 'Intermediate',
      institution: 'Maa Bhargwati International School, Bulandshahr',
      period: '2021',
      logo: 'https://img.icons8.com/color/48/000000/school.png',
      details: [
        'Completed intermediate education with distinction',
        'Focused on science and mathematics'
      ]
    },
    {
      degree: 'Secondary',
      institution: 'Rashtriya Military School, Ajmer',
      period: '2019',
      logo: 'https://img.icons8.com/color/48/000000/military-medal.png',
      details: [
        'Qualified for military school through competitive examination',
        'Developed discipline, leadership skills and team-building capabilities'
      ]
    }
  ];

  return (
    <section id="education" className="mb-12 relative bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-lg p-4 md:p-8 overflow-hidden max-w-full mx-auto shadow-md">
      {/* Diagonal Line Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 inline-block border-b-2 border-green-500 dark:border-green-400 pb-1">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-gray-400 dark:border-gray-700 hover:border-green-500">
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <img src={edu.logo} alt={edu.institution} className="w-12 h-12 object-contain mr-4" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{edu.degree}</h3>
                    <p className="text-green-500 dark:text-green-400 font-medium">{edu.institution}</p>
                  </div>
                </div>
                <div className="text-right mb-3 text-gray-600 dark:text-gray-400 text-xs italic border-b border-gray-300 dark:border-gray-600 pb-2 font-medium">
                  {edu.period}
                </div>
                <div className="space-y-3">
                  <ul className="list-disc pl-5 space-y-2">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-200 text-sm text-justified font-medium">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 px-5 py-3 border-t border-gray-300 dark:border-gray-600 flex justify-between items-center">
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">EDUCATION</span>
                <button className="text-green-500 dark:text-green-400 text-sm font-medium hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300 flex items-center gap-1">
                  More Details 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;