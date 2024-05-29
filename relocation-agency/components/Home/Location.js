'use client'
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Location = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-out', 
      once: false, 
    });
  }, []);

  return (
    <section>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div>
        
        {/* <div className='text-center pt-20 py-12 text-7xl font-semibold' data-aos="fade-up">
          <h1>Locations</h1>
        </div> */}
        <div className='flex flex-wrap py-16 space-x-5'>
          {locations.map((location, index) => (
            <Link href={`/locations/${location.name.toLowerCase()}`} key={index} className='flex-1 min-w-[200px]'>
              <div
                className='shadow-lg rounded overflow-hidden relative group h-80' // Set a fixed height
                data-aos="fade-up"
                data-aos-delay={index * 100} // Adding delay for staircase effect
              >
                <img className="w-full h-full object-cover" src={location.img} alt={location.name} />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-white text-2xl mb-2">{location.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

const locations = [
  {
    name: 'Sri Lanka',
    img: '/images/srilanka.jpg'
  },
  {
    name: 'China',
    img: '/images/china.jpg'
  },
  {
    name: 'Taiwan',
    img: '/images/taiwan.jpg'
  },
  {
    name: 'India',
    img: '/images/india.webp'
  },
  {
    name: 'Malaysia',
    img: '/images/malaysia.jpg'
  }
];

export default Location;
