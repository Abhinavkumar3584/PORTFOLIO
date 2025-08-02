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
      website: 'https://psetu.com/',
      description: 'Launched an AI-powered exam prep platform for competitive exam aspirants. Developed Pariksha Yogya, an eligibility and attempt tracker to help students understand their exam qualifications. Designed Pariksha Marg, a structured syllabus roadmap for systematic and effective learning. Built Pariksha Gyan, an AI chatbot that provides real-time explanations, topic-wise PYQs, and Q&A insights.',
      achievements: [
        'Launched an AI-powered exam prep platform for competitive exam aspirants',
        'Developed Pariksha Yogya, an eligibility and attempt tracker',
        'Designed Pariksha Marg, a structured syllabus roadmap',
        'Built Pariksha Gyan, an AI chatbot for real-time explanations'
      ]
    },
    {
      company: 'CHEGG',
      position: 'Subject Matter Expert',
      date: 'Sept 2023 - Present',
      location: 'Remote',
      logo: cheggLogo,
      website: 'https://www.chegg.com/',
      description: 'Solved complex problems related to Data Structures and Algorithms, Computer Networking, and Programming. Successfully addressed 100+ questions, provided detailed explanations and solutions, maintaining 95% accuracy.',
      achievements: [
        'Solved complex problems related to DSA, Computer Networking, and Programming',
        'Successfully addressed 100+ questions with detailed explanations',
        'Maintained 95% accuracy in solutions'
      ]
    },
    {
      company: 'Gloomweb Solutions',
      position: 'Frontend Developer Intern',
      date: 'Apr 2025 – Jun 2025',
      location: 'Remote (Client: Canada)',
      logo: 'https://img.icons8.com/color/48/000000/code.png',
      website: 'https://gloomweb.com',
      description: 'Translated Figma designs into responsive and accessible web UI using HTML, CSS, Tailwind CSS, and JavaScript. Collaborated team in an Agile product development environment to deliver scalable and production-ready front-ends, maintain clean, well-documented code, and ensure seamless back-end integration.',
      achievements: [
        'Translated Figma designs into responsive and accessible web UI',
        'Used HTML, CSS, Tailwind CSS, and JavaScript for development',
        'Collaborated in Agile product development environment',
        'Delivered scalable and production-ready front-ends'
      ]
    },
    {
      company: 'Big and Best Mart',
      position: 'Frontend Developer',
      date: 'Dec 2024 - Feb 2025',
      location: 'India',
      logo: 'https://img.icons8.com/color/48/000000/shop.png',
      description: 'Developed an e-commerce platform for selling stationery and daily essentials. Designed and implemented a user-friendly interface for seamless online shopping. Focused on optimizing website performance and ensuring a smooth customer experience.',
      achievements: [
        'Developed an e-commerce platform for stationery and daily essentials',
        'Designed user-friendly interface for seamless online shopping',
        'Optimized website performance for smooth customer experience'
      ]
    },
    {
      company: 'CLUSTER INNOVATION CENTRE, UNIVERSITY OF DELHI',
      position: 'AI and ML, Chatbot Development',
      date: 'July 2024 - Nov 2024',
      location: 'Delhi, India',
      logo: 'https://img.icons8.com/color/48/000000/university.png',
      website: 'https://cic.du.ac.in/',
      description: 'Developed an AI chatbot using NLP models (Google-BERT, Sentence Transformers) and Pinecone for vector database to deliver precise answers from NCERT content for competitive exam (UPSC, SSC, etc). Built Django Web App enabling users to query questions and receive accurate responses efficiently. Optimized data pre-processing and query matching algorithms to enhance retrieval speed and accuracy.',
      achievements: [
        'Developed AI chatbot using Google-BERT and Sentence Transformers',
        'Used Pinecone for vector database implementation',
        'Built Django Web App for efficient query processing',
        'Optimized algorithms to enhance retrieval speed and accuracy'
      ]
    },
    {
      company: 'Sewa International',
      position: 'Website & Digital Outreach Volunteer',
      date: 'May 2024 – Jul 2024',
      location: 'Hybrid, India',
      logo: 'https://img.icons8.com/color/48/000000/community.png',
      website: 'https://sewausa.org',
      description: 'Managed and maintained website on Wild Apricot, Update pages aligned with upcoming events and Programs. Improved website SEO health score from 45 to 75. Engaged in Grassroots Leadership Camp, co-organized SEWA FELLOWSHIP, and guided 120+ candidates.',
      achievements: [
        'Managed and maintained website on Wild Apricot',
        'Improved website SEO health score from 45 to 75',
        'Co-organized SEWA FELLOWSHIP',
        'Guided 120+ candidates'
      ]
    },
    {
      company: 'BEYONDEXAMS',
      position: 'AI Youtube video Classifier',
      date: 'July 2022 - Nov 2022',
      location: 'Delhi, India',
      logo: beyondExamsLogo,
      website: 'https://beyondexams.org/',
      description: 'Built an AI model using Python and Scikit-learn to classify YouTube videos as educational or non-educational. Developed a user-friendly website and initiated a Chrome extension for seamless video classification.',
      achievements: [
        'Built AI model using Python and Scikit-learn',
        'Classified YouTube videos as educational or non-educational',
        'Developed user-friendly website',
        'Initiated Chrome extension for seamless classification'
      ]
    }
  ];
  return (
    <section id="experience" className="mb-12 relative bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-3xl p-4 md:p-8 overflow-hidden max-w-full mx-auto shadow-md">
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
          <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-gray-400 dark:border-gray-700">
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain mr-3" />
                  <div>
                    <h3 className="font-bold text-base md:text-lg text-gray-800 dark:text-gray-100">{exp.company}</h3>
                    <p className="text-green-500 dark:text-green-400 font-medium text-sm md:text-base">{exp.position}</p>
                  </div>
                </div>
                <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400 italic font-medium">{exp.date}</span>
              </div>
              <div className="w-full h-px bg-gray-400 dark:bg-gray-600 mb-3"></div>
              <div className="space-y-3 text-gray-700 dark:text-gray-200">
                {exp.achievements && (
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 dark:text-gray-300">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 px-5 py-3 border-t border-gray-300 dark:border-gray-600 flex justify-between items-center">
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{`0${index + 1}`}</span>
              {exp.website && (
                <a 
                  href={exp.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-500 dark:text-green-400 text-sm font-medium hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300 flex items-center gap-1"
                >
                  Visit Website
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;