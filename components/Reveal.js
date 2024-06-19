"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Reveal = ({ children, el = "h1", className }) => {
  const Element = el;
  const words = children.split(" ");

  const wrapperRef = useRef(null);

  useGSAP(
    () => {
      if (!wrapperRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top bottom-=25%",
            end: "bottom center-=30%",
          },
        })
        .set("#word > #word_inner", {
          y: "100%",
          rotate: "0deg",
        })
        .to("#word > #word_inner", {
          y: "0%",
          rotate: "0deg",
          opacity: 1,
          ease: "power3.out",
          duration: 0.7,
          stagger: {
            amount: 0.33,
          },
        });
    },
    { scope: wrapperRef }
  );

  return (
    <Element className={`${className} leading-none`} id="wrapper">
      <span className="relative block" ref={wrapperRef}>
        {words.map((word, i) => (
          <span
            key={i}
            className="relative inline-block overflow-hidden leading-tight"
            id="word"
          >
            <span className="relative inline-block opacity-0" id="word_inner">
              {word}&nbsp;
            </span>
          </span>
        ))}
      </span>
    </Element>
  );
};

export default Reveal;
