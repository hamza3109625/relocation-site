'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration
      easing: 'ease-out', // Easing option
      once: false, // Set to false to animate every time the element comes into view
    });
  }, []);

  return (
    <section className="bg-gradient-to-r from-orange-200 to-orange-300 flex justify-center items-center py-16">
      <div
        className="text-white p-10 rounded-lg max-w-6xl text-center"
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-bold mb-5 leading-loose">About Us</h1>
        <p className="text-base leading-relaxed leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus. Sed enim ut sem viverra aliquet eget. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Placerat duis ultricies lacus sed turpis. Aliquam ultrices sagittis orci a scelerisque. Amet dictum sit amet justo donec enim diam vulputate ut. Leo a diam sollicitudin tempor id eu nisl. Pellentesque dignissim enim sit amet venenatis. Duis ut diam quam nulla porttitor massa id neque aliquam. Phasellus faucibus scelerisque eleifend donec pretium. Malesuada nunc vel risus commodo viverra maecenas. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Porta non pulvinar neque laoreet.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
