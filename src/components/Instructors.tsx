"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Somesh from "../assets/Somesh.jpg";
import Aayush from "../assets/Aayush.jpeg";
const instructors = [
  {
    id: 1,
    name: "Somesh Dwivedi",
    designation: "Full Stack Developer",
    image: Somesh,
  },
  {
    id: 2,
    name: "Aayush Kumar",
    designation: "Full Stack Developer",
    image: Aayush,
  },
];

const Instructors = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Web Team
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Our team members who aided in the creation of this website
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
};

export default Instructors;
