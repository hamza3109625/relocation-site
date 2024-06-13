

// 'use client'
// import Image from 'next/image'
// import { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
// import React from 'react';
// import Navbar from '../Navbar';

// const Background = () => {
//   const firstText = useRef(null);
//   const secondText = useRef(null);
//   const slider = useRef(null);
//   let xPercent = 0;
//   let direction = -1;
//   let animationFrameId;

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.to(slider.current, {
//       scrollTrigger: {
//         trigger: document.documentElement,
//         scrub: 0.25,
//         start: 'top top',
//         end: 'bottom top',
//         onUpdate: (e) => direction = e.direction * -1
//       },
//       x: '-500px',
//     });

//     const animate = () => {
//       // Check if xPercent reaches the bounds
//       if (xPercent <= -100) {
//         direction = 1; // Change direction to move text back to the right
//       } else if (xPercent >= 0) {
//         direction = -1; // Change direction to move text back to the left
//       }

//       // Update xPercent based on direction
//       xPercent += 0.1 * direction;

//       // Set the position of text elements
//       gsap.set(firstText.current, { xPercent: xPercent });
//       gsap.set(secondText.current, { xPercent: xPercent });

//       // Continue animation
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);

//     // Cleanup function
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return (
//     <main className="relative flex h-screen mb-screen overflow-hidden">
//       <Image 
//         src="/images/background.jpg"
//         fill
//         alt="background"
//         className="object-cover"
//       />

//       <div className='absolute top-0 left-0 w-full z-10'>
//         <Navbar />
//       </div>
      
//       <div className="absolute top-[calc(100vh-350px)] w-full">
//         <div ref={slider} className="relative whitespace-nowrap">
//           <p ref={firstText} className="relative m-0 text-white text-[230px] font-medium pr-[50px]">Relocation</p>
//           <p ref={secondText} className="absolute left-full top-0 m-0 text-white text-[230px] font-medium pr-[50px]">Relocation</p>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Background;

'use client'
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import React from 'react';
import Navbar from '../Navbar';

const Background = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;
  let animationFrameId;

  useEffect(() => {
    const loadGsap = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.25,
          start: 'top top',
          end: 'bottom top',
          onUpdate: (e) => direction = e.direction * -1
        },
        x: '-500px',
      });

      const animate = () => {
        // Check if xPercent reaches the bounds
        if (xPercent <= -100) {
          direction = 1; // Change direction to move text back to the right
        } else if (xPercent >= 0) {
          direction = -1; // Change direction to move text back to the left
        }

        // Update xPercent based on direction
        xPercent += 0.1 * direction;

        // Set the position of text elements
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });

        // Continue animation
        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    loadGsap();

    // Cleanup function
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <main className="relative flex h-screen mb-screen overflow-hidden">
      <Image 
        src="/images/background.jpg"
        fill
        alt="background"
        className="object-cover"
      />

      <div className='absolute top-0 left-0 w-full z-10'>
        <Navbar />
      </div>
      
      <div className="absolute top-[calc(100vh-350px)] w-full">
        <div ref={slider} className="relative whitespace-nowrap">
          <p ref={firstText} className="relative m-0 text-white text-[230px] font-medium pr-[50px]">Relocation</p>
          <p ref={secondText} className="absolute left-full top-0 m-0 text-white text-[230px] font-medium pr-[50px]">Relocation</p>
        </div>
      </div>
    </main>
  );
}

export default Background;
