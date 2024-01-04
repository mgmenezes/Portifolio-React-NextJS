"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 20, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.0, // 2 = 200%, 1.5 = 150%, etc..
  speed: 500, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: false, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-cyan-400">
              Hello, I'm{" "}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Moisés de Menezes",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Front-End Developer",
                1000,
                "and like play games",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis neque nostrum totam porro ratione, voluptatibus
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-600  hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-600 hover:bg-slate-800 text-white mt-3">
              <span className=" block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <Tilt options={defaultOptions} className="h-500 w-500">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                width={300}
                height={300}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="hero-image"
                src="/heroImage.svg"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
