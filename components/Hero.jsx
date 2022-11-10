import { useRouter } from "next/router";
import React from "react";
import { Fade } from "react-reveal";

const Hero = ({ heading, message }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/#about");
  };
  return (
    <div className="custom-img flex items-center justify-center h-screen bg-fixed bg-center bg-cover">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] ">
        <Fade left>
          <h2 className="text-6xl font-bold">{heading}</h2>
          <p className="text-2xl py-5">{message}</p>
        </Fade>
        <button
          onClick={handleClick}
          className="text-xl px-8 py-2 border hover:text-black hover:bg-white ease-in duration-300"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default Hero;
