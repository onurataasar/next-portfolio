import Image from "next/image";
import React, { useState } from "react";
import { aboutMy } from "../data/data";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = aboutMy.length;

  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const handlePrev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(aboutMy) || length <= 0) {
    return null;
  }
  return (
    <div id="about" className=" py-12">
      <h1 className="text-3xl font-bold pb-8">About</h1>{" "}
      {aboutMy.map((slide, index) => {
        return (
          <div
            key={index}
            className={`relative flex justify-center items-center shadow-2xl `}
            style={{
              backgroundImage: `url(${slide.background})`,
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/80 z-[2]" />
            <div
              className={
                index === current
                  ? `opacity-[1] p-36 z-[2] ease-in duration-1000`
                  : `opacity-0 `
              }
            >
              <FaArrowCircleLeft
                onClick={handlePrev}
                size={30}
                className="absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2]"
              />
              {index === current && (
                <div className="flex flex-row gap-4 items-center">
                  <span className="text-lg ">{slide.text}</span>
                </div>
              )}
              <FaArrowCircleRight
                onClick={handleNext}
                size={30}
                className="absolute top-[50%] right-[30px] text-black/70 cursor-pointer select-none z-[2]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
