import React from 'react';

const CertificationsSection = () => {
  const certifications = [
    {
      name: 'IIRS E-Learning',
      issuer: 'Indian Institute of Remote Sensing',
      logo: 'https://img.icons8.com/color/48/000000/certificate.png',
      details: [
        'Completed Course on "Overview of Geographical Information System"',
        'Learned about the GIS enables the user to input, manage, manipulate, analyze, and display geographically referenced data using a computerized system.'
      ]
    },
    {
      name: 'Beyond Exams',
      issuer: 'Hack2Educate',
      logo: 'https://img.icons8.com/color/48/000000/prize.png',
      details: [
        'Participated in Hack2Educate (Hackathon).',
        'Developed innovative solutions to educational challenges.'
      ]
    }
  ];

  return (
    <section id="certification" className="mb-12 relative bg-black border border-gray-400 rounded-lg p-4 md:p-8 overflow-hidden max-w-full mx-auto">
      {/* Diagonal Line Background - Similar to Header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-6 inline-block border-b-2 border-green-400 pb-1 relative z-10">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-black rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-gray-400 hover:border-green-400">
            <div className="p-5">
              <div className="flex items-center mb-3">
                <img src={cert.logo} alt={cert.name} className="w-12 h-12 object-contain mr-4" />
                <div>
                  <h3 className="font-bold text-lg text-gray-200">{cert.name}</h3>
                  <p className="text-green-400 font-medium">{cert.issuer}</p>
                </div>
              </div>
              <div className="text-right mb-3 text-gray-400 text-xs italic border-b border-gray-700 pb-2">
                CERTIFICATION
              </div>
              <div className="space-y-3">
                <ul className="list-disc pl-5 space-y-2">
                  {cert.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-300 text-sm text-justified">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-gray-900 px-5 py-3 border-t border-gray-700 flex justify-between items-center">
              <span className="text-xs text-gray-500">{`CERT ${index + 1}`}</span>
              <button className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors duration-300 flex items-center gap-1">
                View Certificate 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;