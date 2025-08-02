import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const CertificationsSection = () => {
  const { darkMode } = useContext(ThemeContext);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  
  // Function to handle opening certificate popup
  const openCertificate = (cert) => {
    setSelectedCertificate(cert);
  };
  
  // Function to close the certificate popup
  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  const certifications = [
    {
      name: 'Grassroot Leadership Camp Volunteer (Jaipur)',
      issuer: 'Sewa International',
      date: '21 June - 22 June, 2025',
      logo: 'https://img.icons8.com/color/48/000000/leadership.png',
      details: [
        'Participated in Grassroot Leadership Camp',
        'Volunteer activities in Jaipur',
        'Community service and leadership development'
      ],
      image: require('../assets/images/certificates/Abhinav Kumar.jpeg')
    },
    {
      name: 'Combined Annual Training Camp - (2023, 2024)',  
      issuer: 'National Cadet Corps',
      date: '15 - 24 July, 2024',
      logo: 'https://img.icons8.com/color/48/000000/military.png',
      details: [
        'Completed Combined Annual Training Camp',
        'Military training and discipline',
        'Leadership and teamwork development'
      ],
      image: require('../assets/images/certificates/Abhinav Kumar.jpeg')
    },
    {
      name: 'All India UP Trekking Camp',
      issuer: 'National Cadet Corps', 
      date: '10 Nov - 17 Nov, 2024',
      logo: 'https://img.icons8.com/color/48/000000/trekking.png',
      details: [
        'Completed All India UP Trekking Camp',
        'Adventure training and endurance',
        'Mountain safety and survival skills'
      ],
      image: require('../assets/images/certificates/Abhinav Kumar.jpeg')
    },
    {
      name: 'Hack2Educate Hackathon Participant',
      issuer: 'Beyond Exams',
      date: '11 Nov - 13 Nov, 2022',
      logo: 'https://img.icons8.com/color/48/000000/prize.png',
      details: [
        'Participated in Hack2Educate Hackathon',
        'Developed innovative educational solutions',
        'Secured fourth position among participants'
      ],
      image: require('../assets/images/certificates/Abhinav Kumar.jpeg')
    },
    {
      name: 'Geographic Information System Overview',
      issuer: 'IIRS E-Learning',
      date: '3 Oct - 27 Oct, 2022',
      logo: 'https://img.icons8.com/color/48/000000/certificate.png',
      details: [
        'Completed Geographic Information System Overview course',
        'Learned GIS fundamentals and applications',
        'Remote sensing and spatial analysis techniques'
      ],
      image: require('../assets/images/certificates/Abhinav Kumar.jpeg')
    }
  ];
  return (
    <section id="certification" className="mb-12 relative bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-3xl p-4 md:p-8 overflow-hidden max-w-full mx-auto shadow-md">
      {/* Diagonal Line Background - Similar to Header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      {/* Certifications Section */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 inline-block border-b-2 border-green-500 dark:border-green-400 pb-1">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-gray-400 dark:border-gray-700 hover:border-green-500">
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <img src={cert.logo} alt={cert.name} className="w-12 h-12 object-contain mr-4" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{cert.name}</h3>
                    <p className="text-green-500 dark:text-green-400 font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <div className="text-right mb-3 text-gray-600 dark:text-gray-400 text-xs italic border-b border-gray-300 dark:border-gray-600 pb-2 font-medium">
                  {cert.date}
                </div>
                <div className="space-y-3">
                  <ul className="list-disc pl-5 space-y-2">
                    {cert.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-200 text-sm text-justified font-medium">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 px-5 py-3 border-t border-gray-300 dark:border-gray-600 flex justify-between items-center">
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{`CERT ${index + 1}`}</span>
                <button 
                  onClick={() => openCertificate(cert)} 
                  className="text-green-500 dark:text-green-400 text-sm font-medium hover:text-green-600 dark:hover:text-green-300 transition-colors duration-300 flex items-center gap-1"
                >
                  View Certificate 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Certificate Popup Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeCertificate}>
          <div className="relative bg-white dark:bg-gray-800 p-2 rounded-3xl max-w-2xl w-[90%] max-h-[80vh] overflow-auto flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {selectedCertificate.image ? (
              <img 
                src={selectedCertificate.image} 
                alt={`${selectedCertificate.name} Certificate`} 
                className="max-w-full max-h-[75vh] object-contain"
              />
            ) : (
              <div className="p-8 text-center text-gray-700 dark:text-gray-300">
                Certificate image not available
              </div>
            )}
            <button 
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors duration-300"
              onClick={closeCertificate}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;