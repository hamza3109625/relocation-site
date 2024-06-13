import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedText = ({ text }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: i * 0.31, // Adjust the delay as needed
          duration: 0.75,
          ease: 'easeOut',
        },
      }));
    }
  }, [controls, inView]);

  return (
    <div ref={ref}>
      <motion.div initial={{ y: 50, opacity: 0 }} animate={controls}>
        <h2>
          {text.split('').map((char, index) => (
            <motion.span key={index} custom={index}>
              {char}
            </motion.span>
          ))}
        </h2>
      </motion.div>
    </div>
  );
};

export default AnimatedText;
