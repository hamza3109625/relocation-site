
import React from 'react';
import AboutUs from '@/components/Home/AboutUs';
import Background from '@/components/Home/Background';
import Location from '@/components/Home/Location';
import Newsletter from '@/components/Home/Newsletter';
import Services from '@/components/Home/Services';
import Parallax from '@/components/Home/Parallex';


const isClient = typeof window !== "undefined";

const Home = () => {
  return (
    <div>
      <Background />
      <AboutUs />
      <div className='mb-12'>
      {isClient && (
        <Parallax offset={50} clampInitial clampFinal>
          <p>This content will have a parallax effect.</p>
        </Parallax>
      )}
      </div>
      <Newsletter />
      <Services />
    </div>
    
    
  );
};

export default Home;

