import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const AchievementsSection = () => {
  const { darkMode } = useContext(ThemeContext);

  const achievements = [
    {
      title: 'Military School Achievement',
      icon: 'https://img.icons8.com/color/48/000000/military-medal.png',
      description: 'Cleared All India Rashtriya Military School Entrance Exam and Sainik School Entrance Exam.'
    },
    {
      title: 'University Selection',
      icon: 'https://img.icons8.com/color/48/000000/graduation-cap.png',
      description: 'Selected for B.Tech (Information Technology and Mathematical Innovation) at Cluster Innovation Centre, University of Delhi, among 50 seats.'
    },
    {
      title: 'Hackathon Achievement',
      icon: 'https://img.icons8.com/color/48/000000/trophy.png',
      description: 'Secured fourth position in hackathon organized by Beyond Exams.'
    },
    {
      title: 'Event Management',
      icon: 'https://img.icons8.com/color/48/000000/conference.png',
      description: 'Core team member of college hackathon (Convoke 5.0) organizing team, managing logistics and event planning.'
    }
  ];

  return (
    <section id="achievements" className="mb-8 relative bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-3xl p-3 md:p-5 overflow-hidden max-w-full mx-auto shadow-md">
      {/* Diagonal Line Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4 inline-block border-b-2 border-green-500 dark:border-green-400 pb-1">Achievements and Position of Responsibility</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 border border-gray-300 dark:border-gray-700 hover:border-green-500">
              <div className="p-4 flex items-start gap-3">
                <img src={achievement.icon} alt={achievement.title} className="w-10 h-10 object-contain flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-sm text-gray-800 dark:text-gray-100 mb-2">{achievement.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;