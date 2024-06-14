import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import vicmem from '@/public/image/victoriamemorial.jpg';
import fw from '@/public/image/fortwilliam.jpg';
import hb from '@/public/image/howrahbridge.jpg';

const images = [
  { src: hb, alt: 'Howrah Bridge' },
  { src: vicmem, alt: 'Victoria Memorial' },
  { src: fw, alt: 'Fort William' }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[500px] bg-gray-200 flex items-center justify-center">
      <button onClick={prevImage} className="absolute left-4 sm:left-8 md:left-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-300 transition duration-300 ease-in-out z-10">
        <FaArrowLeft size={20} className="text-black" />
      </button>
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="cover"
          className="shadow-md"
        />
      </div>
      <button onClick={nextImage} className="absolute right-4 sm:right-8 md:right-12 bg-white rounded-full p-2 shadow-md hover:bg-gray-300 transition duration-300 ease-in-out z-10">
        <FaArrowRight size={20} className="text-black" />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-gray-400'} transition-colors duration-300 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
