import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      name: 'Need DU',
      description: 'Web platform for Delhi University students',
      logo: 'https://img.icons8.com/color/48/000000/university.png',
      technologies: 'HTML, CSS, JavaScript, SQL, React',
      details: [
        'Developed a web platform enabling students to sell, purchase, and exchange products conveniently.',
        'Integrated features to access previous year papers, facilitating academic preparation.',
        'Designed functionality to locate nearby accommodations, enhancing student convenience.'
      ]
    },
    {
      name: 'KnowYourSyllabus',
      description: 'Government exam syllabus platform',
      logo: 'https://img.icons8.com/color/48/000000/book-stack.png',
      technologies: 'HTML, CSS, JavaScript, React',
      details: [
        'Developed a web platform to present government exam syllabi in a mind-map format.',
        'Implemented React and Node.js for dynamic and efficient data rendering.',
        'Enhanced user experience with interactive navigation and visual organization of content.'
      ]
    },
    {
      name: 'Analysis of Agritech Startups in India',
      description: 'Research on agricultural technology startups',
      logo: 'https://img.icons8.com/color/48/000000/tractor.png',
      technologies: 'Data analysis tools (e.g., Python, Excel)',
      details: [
        'Conducted an in-depth analysis of Agritech startups, identifying growth trends and challenges.',
        'Examined the advantages of technology integration in the agricultural sector.',
        'Presented findings through detailed visualizations and actionable insights.'
      ]
    },
    {
      name: 'Cloud Resource Manager Software',
      description: 'Monitoring system for personal servers',
      logo: 'https://img.icons8.com/color/48/000000/cloud-computing.png',
      technologies: 'React.js, Node.js',
      details: [
        'Engineered a global monitoring system for personal servers, with a Django backend for system resource data collection.',
        'Frontend created with React.js for real-time data visualization and user interaction.',
        'Integrated Node.js for user authentication and MongoDB for secure data storage.'
      ]
    },
    {
      name: 'Women Diabetes Prediction',
      description: 'Machine learning model for diabetes prediction',
      logo: 'https://img.icons8.com/color/48/000000/health-graph.png',
      technologies: 'Python, Machine Learning',
      details: [
        'Created a project on Women Diabetes Prediction using Machine Learning.',
        'Applied data preprocessing techniques and feature engineering to improve model accuracy.',
        'Implemented various classification algorithms to identify the best model for prediction.'
      ]
    },
    {
      name: 'NCERT Chatbot',
      description: 'AI-powered educational assistant',
      logo: 'https://img.icons8.com/color/48/000000/chatbot.png',
      technologies: 'Python, Langchain, OpenAI',
      details: [
        'Developed a NCERT Chatbot that helps UPSC aspirants find information from NCERT books from class 6th to 12th.',
        'Leveraged Langchain and OpenAI models to create an intelligent question-answering system.',
        'Optimized response quality and retrieval speed for a seamless user experience.'
      ]
    }
  ];

  return (
    <section id="projects" className="mb-12 relative bg-black border border-gray-400 rounded-lg p-4 md:p-8 overflow-hidden max-w-full mx-auto">
      {/* Diagonal Line Background - Similar to Header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-6 inline-block border-b-2 border-green-400 pb-1 relative z-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {projects.map((project, index) => (
          <div key={index} className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-gray-400 hover:border-green-400">
            <div className="p-5">
              <div className="flex items-center mb-3">
                <img src={project.logo} alt={project.name} className="w-10 h-10 mr-3" />
                <h3 className="font-bold text-lg text-gray-200">{project.name}</h3>
              </div>
              <div className="text-right mb-3 text-green-400 font-medium border-b border-gray-700 pb-2">
                {project.description}
              </div>
              <p className="text-xs text-gray-400 italic mb-3 text-right">Tech Stack: {project.technologies}</p>
              <div className="space-y-3">
                <ul className="list-disc pl-5 space-y-2">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-300 text-sm text-justified">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-900 px-5 py-3 border-t border-gray-700 flex justify-between items-center">
              <span className="text-xs text-gray-500">{`PROJECT ${index + 1}`}</span>
              <button className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors duration-300 flex items-center gap-1">
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