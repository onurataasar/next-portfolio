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
    <div id="about" className="px-48">
      <h1 className="text-3xl font-bold">About</h1>
      <div className="relative flex justify-center p-[17rem]">
        {aboutMy.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? `opacity-[1] ease-in duration-1000`
                  : `opacity-0`
              }
            >
              <FaArrowCircleLeft
                onClick={handlePrev}
                size={30}
                className="absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2]"
              />
              {index === current && (
                <div className="flex flex-row gap-4 items-center">
                  <p className="text-lg ">{slide.text}</p>
                  <Image
                    src={slide.icon}
                    alt="/"
                    width={50}
                    height={50}
                    layout="fixed"
                  />
                </div>
              )}
              <FaArrowCircleRight
                onClick={handleNext}
                size={30}
                className="absolute top-[50%] right-[30px] text-black/70 cursor-pointer select-none z-[2]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
