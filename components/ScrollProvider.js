"use client";
import React from "react";
import { ReactLenis, useLenis } from "lenis/react";

const ScrollProvider = ({ children }) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return <ReactLenis root>{children}</ReactLenis>;
};

export default ScrollProvider;
