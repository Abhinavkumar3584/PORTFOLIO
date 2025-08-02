import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import nccLogo from '../assets/images/ncc.png';

const ActivitiesSection = () => {
  const { darkMode } = useContext(ThemeContext);

  const activities = [
    {
      name: 'National Cadet Corps',
      role: 'Rank: CADET',
      period: 'Nov 2022 - April 2025',
      location: 'Delhi, India',
      logo: nccLogo,
      details: [
        'Completed Combined Annual Training Camp, 2022 and 2023, leading and managing a team of 50+ cadets',
        'Completed All India UP Trekking Camp with rank Company 2IC, commanding a team of 101 cadets',
        'Successfully passed National Cadet Corps Certificate - B with "B" grade and Certificate - C with "A" grade'
      ]
    }
  ];
  return (
    <section id="activities" className="mb-12 relative bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-3xl p-4 md:p-8 overflow-hidden max-w-full mx-auto shadow-md">
      {/* Diagonal Line Background - Similar to Header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 inline-block border-b-2 border-green-500 dark:border-green-400 pb-1 relative z-10">Extra-Curricular Activities</h2>
      <div className="space-y-6 relative z-10">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-700 hover:border-green-500 rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-5">
              <div className="flex items-center mb-3">
                <img src={activity.logo} alt={activity.name} className="w-12 h-12 object-contain mr-4" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{activity.name}</h3>
                  <p className="text-green-500 dark:text-green-400 font-medium">{activity.role}</p>
                </div>
              </div>
              <div className="text-right mb-3 text-gray-600 dark:text-gray-400 italic text-sm border-b border-gray-400 dark:border-gray-600 pb-2 font-medium">
                {activity.period} • {activity.location}
              </div>
              <div className="space-y-3">
                <ul className="list-disc pl-5 space-y-2">
                  {activity.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-200 text-sm text-justified font-medium">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="bg-gray-100 dark:bg-gray-700 px-5 py-3 border-t border-gray-300 dark:border-gray-600 flex justify-between items-center">
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">ACTIVITY</span>
              <button className="text-green-500 dark:text-green-400 text-sm font-medium hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300 flex items-center gap-1">
                More Details 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;