import React from 'react';
import abhi from '../assets/images/abhi.jpg';
import beyondexams from '../assets/images/beyondexams.png';
import chegg from '../assets/images/chegg.jfif';
import ncc from '../assets/images/ncc.png';

// Duplicating images to create a more populated gallery
const images = [
  { src: abhi, alt: 'Profile Photo', className: 'object-cover h-48 w-full' },
  { src: beyondexams, alt: 'Beyond Exams', className: 'object-contain h-32 w-full' },
  { src: chegg, alt: 'Chegg', className: 'object-contain h-40 w-full' },
  { src: ncc, alt: 'NCC', className: 'object-cover h-36 w-full' },
  { src: abhi, alt: 'Profile Photo', className: 'object-cover h-52 w-full' },
  { src: beyondexams, alt: 'Beyond Exams', className: 'object-contain h-36 w-full' },
  { src: chegg, alt: 'Chegg', className: 'object-contain h-44 w-full' },
  { src: ncc, alt: 'NCC', className: 'object-cover h-40 w-full' },
  { src: abhi, alt: 'Profile Photo', className: 'object-cover h-48 w-full' },
  { src: beyondexams, alt: 'Beyond Exams', className: 'object-contain h-38 w-full' },
  { src: chegg, alt: 'Chegg', className: 'object-contain h-42 w-full' },
  { src: ncc, alt: 'NCC', className: 'object-cover h-36 w-full' },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="mb-12 relative bg-black border border-gray-400 rounded-lg p-4 md:p-8 overflow-hidden max-w-full mx-auto">
      {/* Diagonal Line Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-full h-[200%] w-[200%] rotate-45 translate-x-1/2 -translate-y-1/4">
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-20"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45 mb-40"></div>
          <div className="w-full h-1 bg-purple-500/10 transform -rotate-45"></div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-6 inline-block border-b-2 border-green-400 pb-1 relative z-10">
        Gallery
      </h2>
      
      {/* Infinite image scroller */}
      <div className="relative z-10 overflow-hidden">
        {/* First scroller row */}
        <div className="flex animate-scroll mb-4">
          <div className="flex gap-4 animate-scroll">
            {images.map((img, index) => (
              <div 
                key={`row1-${index}`} 
                className="flex-shrink-0 rounded-lg overflow-hidden border border-gray-700 hover:border-green-400 transition-all"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className={img.className}
                />
              </div>
            ))}
            {/* Duplicate images for seamless scrolling */}
            {images.map((img, index) => (
              <div 
                key={`row1-dup-${index}`} 
                className="flex-shrink-0 rounded-lg overflow-hidden border border-gray-700 hover:border-green-400 transition-all"
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
            {images.slice().reverse().map((img, index) => (
              <div 
                key={`row2-${index}`} 
                className="flex-shrink-0 rounded-lg overflow-hidden border border-gray-700 hover:border-green-400 transition-all"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className={img.className}
                />
              </div>
            ))}
            {/* Duplicate images for seamless scrolling */}
            {images.slice().reverse().map((img, index) => (
              <div 
                key={`row2-dup-${index}`} 
                className="flex-shrink-0 rounded-lg overflow-hidden border border-gray-700 hover:border-green-400 transition-all"
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