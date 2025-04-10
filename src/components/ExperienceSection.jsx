import React from 'react';
// Import images from assets folder
import cheggLogo from '../assets/images/chegg.jfif';
import beyondExamsLogo from '../assets/images/beyondexams.png';
import nccLogo from '../assets/images/ncc.png';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'Pratiyogita Setu',
      position: 'Founder',
      date: 'Feb 2025 - Present',
      location: 'India',
      logo: 'https://img.icons8.com/color/48/000000/launched-rocket--v1.png',
      points: [
        'Created an AI-powered exam prep platform with personalized study resources for competitive exams',
        'Developed Pariksha Yogya for tracking exam eligibility and attempt limits',
        'Built Pariksha Marg, a structured roadmap for efficient syllabus learning',
        'Launched Pariksha Gyan, an AI chatbot providing explanations and practice questions'
      ]
    },
    {
      company: 'Big and Best Mart',
      position: 'Frontend Developer',
      date: 'Dec 2024 - Feb 2025',
      location: 'India',
      logo: 'https://img.icons8.com/color/48/000000/shop.png',
      points: [
        'Built e-commerce platform for stationery and railway essentials with user-friendly interface',
        'Integrated secure payment systems and inventory management features',
        'Optimized website performance for seamless customer experience'
      ]
    },
    {
      company: 'Cluster Innovation Centre, University of Delhi',
      position: 'AI and ML, Chatbot Development',
      date: 'July 2024 - Nov 2024',
      location: 'Delhi, India',
      logo: 'https://img.icons8.com/color/48/000000/university.png',
      points: [
        'Developed an educational AI chatbot using NLP models (BERT, Sentence Transformers) for accurate answers',
        'Built full-stack web application with Django backend and JavaScript frontend',
        'Optimized algorithms for seamless retrieval of educational content from NCERT books and exam questions'
      ]
    },
    {
      company: 'Chegg',
      position: 'Subject Matter Expert',
      date: 'Sept 2023 - Present',
      location: 'Remote',
      logo: cheggLogo,
      points: [
        'Solved 100+ complex problems in Data Structures, Algorithms, Database Systems, and Networking',
        'Provided detailed explanations to help students master technical concepts'
      ]
    },
    {
      company: 'BeyondExams',
      position: 'AI YouTube Video Classifier',
      date: 'July 2022 - Nov 2022',
      location: 'Delhi, India',
      logo: beyondExamsLogo,
      points: [
        'Built AI classification model using Python and Scikit-learn to identify educational content',
        'Developed user-friendly website and Chrome extension for content classification',
        'Created API for developers to integrate video classification into their applications'
      ]
    }
  ];

  return (
    <section id="experience" className="mb-12 relative bg-black border border-gray-400 rounded-lg p-4 md:p-8 overflow-hidden max-w-full mx-auto">
      {/* Diagonal Line Background - Similar to Header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-6 inline-block border-b-2 border-green-400 pb-1 relative z-10">Experience</h2>
      <div className="space-y-4 relative z-10">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-gray-400">
            <div className="p-5">
              <div className="flex items-center mb-3">
                <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain mr-3" />
                <div>
                  <h3 className="font-bold text-lg text-gray-200">{exp.company}</h3>
                  <p className="text-green-400 font-medium">{exp.position}</p>
                 
                </div>
              </div>
              <div className="text-right mb-3 text-gray-400 italic text-sm border-b border-gray-700 pb-2">
                {exp.position} • {exp.date}
              </div>
              <div className="space-y-3 text-gray-300">
                <ul className="list-disc pl-5 space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-sm sm:text-base text-justified">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-900 px-5 py-3 border-t border-gray-700 flex justify-between items-center">
              <span className="text-xs text-gray-500">{`0${index + 1}`}</span>
              <button className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors duration-300 flex items-center gap-1">
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