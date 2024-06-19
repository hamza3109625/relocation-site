"use client";
import React from "react";
import Reveal from "../Reveal";

const AboutUs = () => {
  return (
    <section className="flex items-center justify-center py-16 ">
      <div className="max-w-6xl p-10 text-center text-black rounded-lg">
        <Reveal el="h1" className="mb-6 text-5xl font-bold">
          Unveiling the Journey
        </Reveal>
        <Reveal>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien
          faucibus et molestie ac feugiat sed lectus. Sed enim ut sem viverra
          aliquet eget. Amet mauris commodo quis imperdiet massa tincidunt nunc
          pulvinar sapien. Placerat duis ultricies lacus sed turpis. Aliquam
          ultrices sagittis orci a scelerisque. Amet dictum sit amet justo donec
          enim diam vulputate ut. Leo a diam sollicitudin tempor id eu nisl.
          Pellentesque dignissim enim sit amet venenatis. Duis ut diam quam
          nulla porttitor massa id neque aliquam. Phasellus faucibus scelerisque
          eleifend donec pretium. Malesuada nunc vel risus commodo viverra
          maecenas. Posuere lorem ipsum dolor sit amet consectetur adipiscing
          elit. Porta non pulvinar neque laoreet.
        </Reveal>
      </div>
    </section>
  );
};

export default AboutUs;
