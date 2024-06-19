"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ImageReveal = ({ src }) => {
  const imageRef = useRef(null);
  const revealRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: revealRef.current,
          start: "top bottom-=25%",
          end: "bottom center-=30%",
        },
      });
      tl.to(revealRef.current, {
        duration: 1.5,
        width: "0%",
        ease: "Power2.easeInOut",
      }).from(imageRef.current, 1.4, {
        duration: 1.5,
        scale: 1.6,
        ease: "Power2.easeInOut",
        delay: -1.5,
      });
    },
    { scope: revealRef }
  );

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        ref={revealRef}
        className="absolute inset-0 z-10 bg-white"
        style={{ width: "100%" }}
      ></div>
      <img
        ref={imageRef}
        src={src}
        alt="Reveal"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default ImageReveal;
