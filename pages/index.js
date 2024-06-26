

import React from 'react';
import { motion } from 'framer-motion';
import AboutUs from '@/components/Home/AboutUs';
import Background from '@/components/Home/Background';
import Location from '@/components/Home/Location';
import Newsletter from '@/components/Home/Newsletter';
import Services from '@/components/Home/Services';
import transition from '@/animations/transition';
import Footer from '@/components/Footer';
import FAQ from '@/components/Home/FAQ';

const Home = () => {
  return (
    <div>
      <Background />
      <AboutUs />
      <Services />
        <Location />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default transition(Home);

