import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// Import gallery images
import img1 from '../assets/images/gallery/IMG-20191215-WA0008.jpg';
import img2 from '../assets/images/gallery/PicsArt_10-08-07.16.44.jpg';
import img3 from '../assets/images/gallery/rahul_abhinav.jpg';
import img4 from '../assets/images/gallery/rmsa.jpg';
import img5 from '../assets/images/gallery/rmsa1.jpg';
import img6 from '../assets/images/gallery/rmsa2.jpg';
import img7 from '../assets/images/gallery/NCC.jpg';

// Gallery images with appropriate heights for the grid
const images = [
  { src: img1, alt: 'Gallery Image 1', className: 'object-cover h-48 w-full' },
  { src: img2, alt: 'Gallery Image 2', className: 'object-cover h-40 w-full' },
  { src: img3, alt: 'Rahul Abhinav', className: 'object-cover h-52 w-full' },
  { src: img4, alt: 'RMSA Image', className: 'object-cover h-44 w-full' },
  { src: img5, alt: 'RMSA Image 1', className: 'object-cover h-36 w-full' },
  { src: img6, alt: 'RMSA Image 2', className: 'object-cover h-48 w-full' },
  { src: img7, alt: 'NCC Image', className: 'object-cover h-52 w-full' },
  // Repeated to have enough images for a good scrolling effect
  { src: img1, alt: 'Gallery Image 1', className: 'object-cover h-40 w-full' },
  { src: img2, alt: 'Gallery Image 2', className: 'object-cover h-52 w-full' },
  { src: img3, alt: 'Rahul Abhinav', className: 'object-cover h-44 w-full' },
  { src: img4, alt: 'RMSA Image', className: 'object-cover h-36 w-full' },
  { src: img5, alt: 'RMSA Image 1', className: 'object-cover h-48 w-full' },
  { src: img6, alt: 'RMSA Image 2', className: 'object-cover h-40 w-full' },
  { src: img7, alt: 'NCC Image', className: 'object-cover h-52 w-full' },
];

const GallerySection = () => {
  const { darkMode } = useContext(ThemeContext);
  
  return (    <section id="gallery" className="mb-12 relative bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-3xl p-4 md:p-8 overflow-hidden max-w-full mx-auto shadow-md">
      {/* Diagonal Line Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 inline-block border-b-2 border-green-500 dark:border-green-400 pb-1 relative z-10">
        Gallery
      </h2>
      
      {/* Infinite image scroller */}
      <div className="relative z-10 overflow-hidden">
        {/* First scroller row */}
        <div className="flex animate-scroll mb-4">
          <div className="flex gap-4 animate-scroll">
            {images.map((img, index) => (              <div 
                key={`row1-${index}`} 
                className="flex-shrink-0 rounded-3xl overflow-hidden border-2 border-gray-400 dark:border-gray-600 hover:border-green-500 transition-all shadow-sm"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className={img.className}
                />
              </div>
            ))}
            {/* Duplicate images for seamless scrolling */}
            {images.map((img, index) => (              <div 
                key={`row1-dup-${index}`} 
                className="flex-shrink-0 rounded-3xl overflow-hidden border-2 border-gray-400 dark:border-gray-600 hover:border-green-500 transition-all shadow-sm"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className={img.className}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Second scroller row (opposite direction) */}
        <div className="flex animate-scroll-reverse">
          <div className="flex gap-4 animate-scroll-reverse">
            {images.slice().reverse().map((img, index) => (              <div 
                key={`row2-${index}`} 
                className="flex-shrink-0 rounded-3xl overflow-hidden border-2 border-gray-400 dark:border-gray-600 hover:border-green-500 transition-all shadow-sm"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className={img.className}
                />
              </div>
            ))}
            {/* Duplicate images for seamless scrolling */}
            {images.slice().reverse().map((img, index) => (              <div 
                key={`row2-dup-${index}`} 
                className="flex-shrink-0 rounded-3xl overflow-hidden border-2 border-gray-400 dark:border-gray-600 hover:border-green-500 transition-all shadow-sm"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className={img.className}
                />
              </div>
            ))}
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default GallerySection;