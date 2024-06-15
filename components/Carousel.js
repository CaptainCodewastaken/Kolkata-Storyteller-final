import React from 'react';
import Image from 'next/image';
import heroimg from '@/public/image/heroimage.png'; // Adjust path as necessary

const Carousel = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full overflow-hidden border-8 border-white">
          <Image src={heroimg} alt="Hero Image" layout="fill" objectFit="cover" />
          <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col items-center justify-center text-white text-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 heading">
              <div className="pb-20">
                <h1 className="text-5xl font-bold headingtext font-akzidenz">KOLKATA STORYTELLER</h1>
              </div>
              <div className="p-4">
                <p className="text-2xl quotetext font-gt-sectra">Unravelling the soul of Kolkata through candid & heartfelt conversations with its people.</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-6 bg-white opacity-0"></div> {/* Padding for thicker border effect */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
