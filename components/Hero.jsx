import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="custom-img flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h2 className="text-6xl font-bold">{heading}</h2>
        <p className="text-2xl py-5">{message}</p>
        <button className="text-xl px-8 py-2 border">More</button>
      </div>
    </div>
  );
};

export default Hero;
