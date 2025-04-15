import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// Import images from assets folder
import cheggLogo from '../assets/images/chegg.jfif';
import beyondExamsLogo from '../assets/images/beyondexams.png';
import nccLogo from '../assets/images/ncc.png';

const ExperienceSection = () => {
  const { darkMode } = useContext(ThemeContext);

  const experiences = [
    {
      company: 'Pratiyogita Setu',
      position: 'Founder',
      date: 'Feb 2025 - Present',
      location: 'India',
      logo: 'https://img.icons8.com/color/48/000000/launched-rocket--v1.png',
      points: [
        'Conceptualized and built an AI-powered exam preparation platform to streamline and personalize learning for competitive exam aspirants',
        'Developed innovative tools like Pariksha Yogya for eligibility tracking, Pariksha Marg for dynamic syllabus roadmaps, and Pariksha Gyan AI chatbot',
        'Engineered AI solutions that deliver real-time explanations and personalized insights using NCERT content and past year questions',
        'Combined educational content with AI to democratize access to effective and affordable preparation tools'
      ]
    },
    {
      company: 'Big and Best Mart',
      position: 'Frontend Developer',
      date: 'Dec 2024 - Feb 2025',
      location: 'India',
      logo: 'https://img.icons8.com/color/48/000000/shop.png',
      points: [
        'Developed a complete e-commerce solution tailored to selling stationery and railway essentials',
        'Designed clean, user-friendly frontend interfaces and implemented secure payment gateways',
        'Integrated inventory management functionalities and optimized performance for seamless customer experience',
        'Ensured responsive design to provide consistent user experience across all devices'
      ]
    },
    {
      company: 'Cluster Innovation Centre, University of Delhi',
      position: 'AI/ML Intern',
      date: 'July 2024 - Nov 2024',
      location: 'Delhi, India',
      logo: 'https://img.icons8.com/color/48/000000/university.png',
      points: [
        'Developed an AI-powered educational chatbot using NLP technologies including Google-BERT and Sentence Transformers',
        'Leveraged vector databases like Pinecone for smart content retrieval from NCERT material and government exam datasets',
        'Built a full-stack application with Django backend and JavaScript frontend providing instant, accurate responses',
        'Optimized system for improved data accessibility and accuracy for UPSC, SSC, and other competitive exam preparation'
      ]
    },
    {
      company: 'Chegg',
      position: 'Subject Matter Expert',
      date: 'Sept 2023 - Present',
      location: 'Remote',
      logo: cheggLogo,
      points: [
        'Provided detailed, concept-driven solutions for 100+ academic problems in DSA, DBMS, Networks, and Programming',
        'Emphasized clarity and depth in answers to enhance student understanding and confidence',
        'Maintained high-quality standards while explaining complex technical concepts in accessible language',
        'Consistently received positive feedback for comprehensive explanations and problem-solving approach'
      ]
    },
    {
      company: 'BeyondExams',
      position: 'AI Developer',
      date: 'July 2022 - Nov 2022',
      location: 'Delhi, India',
      logo: beyondExamsLogo,
      points: [
        'Developed a Python-based AI classifier to identify whether YouTube videos are educational or non-educational',
        'Trained models using Scikit-learn to accurately categorize content for educational platforms',
        'Extended the project into a web application and Chrome extension for broader accessibility',
        'Created and exposed an API allowing developers to integrate the classifier into their own platforms'
      ]
    }
  ];

  return (
    <section id="experience" className="mb-12 relative bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-lg p-4 md:p-8 overflow-hidden max-w-full mx-auto shadow-md">
      {/* Diagonal Line Background - Similar to Header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 inline-block border-b-2 border-green-500 dark:border-green-400 pb-1 relative z-10">Experience</h2>
      <div className="space-y-4 relative z-10">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-gray-400 dark:border-gray-700">
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain mr-3" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{exp.company}</h3>
                    <p className="text-green-500 dark:text-green-400 font-medium">{exp.position}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 italic font-medium">{exp.date}</span>
              </div>
              <div className="w-full h-px bg-gray-400 dark:bg-gray-600 mb-3"></div>
              <div className="space-y-3 text-gray-700 dark:text-gray-200">
                <ul className="list-disc pl-5 space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-sm sm:text-base text-justified font-medium">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 px-5 py-3 border-t border-gray-300 dark:border-gray-600 flex justify-between items-center">
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{`0${index + 1}`}</span>
              <button className="text-green-500 dark:text-green-400 text-sm font-medium hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300 flex items-center gap-1">
                Learn More 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;