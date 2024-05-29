'use client'
import React, { useState, useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useSpring } from "framer-motion";

const Parallax = ({ children, offset = 50, clampInitial, clampFinal }) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset);
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(
    scrollY,
    [initial, final],
    [clampInitial ? 0 : offset, clampFinal ? 0 : -offset]
  );
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  return (
    <div style={{ height: "2000px" }}> {/* Add some height to enable scrolling */}
      <h1>Parallax Example</h1>
      <div style={{ height: "600px", backgroundColor: "#f0f0f0" }}>
        <motion.div ref={ref} style={{ y }}>
          {children}
        </motion.div>
      </div>
      <div style={{ height: "1000px" }}> {/* Spacer for scrolling */}
        <p style={{ textAlign: "center", fontSize: "18px", marginTop: "50px" }}>
          Scroll more content to see the parallax effect in action!
        </p>
      </div>
    </div>
  );
};

export default Parallax;
