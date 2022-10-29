import Image from "next/image";
import React, { useState } from "react";
import { aboutMy } from "../data/data";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Divider from "./Divider";
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
    <div id="about" className="">
      <div className="pt-28 pb-28">
        <h1 className="section-title">About</h1>{" "}
        {aboutMy.map((slide, index) => {
          return (
            <div
              key={index}
              className={`relative  flex justify-center items-center  mx-8 shadow-2xl `}
              style={{
                backgroundImage: `url(${slide.background})`,
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/90 z-[2]" />
              <div
                className={
                  index === current
                    ? `opacity-[1] sm:p-36 p-16 z-[2] min-h-[70vh] flex ease-in duration-1000`
                    : `opacity-0 `
                }
              >
                <FaArrowCircleLeft
                  onClick={handlePrev}
                  size={30}
                  className="absolute top-[50%] left-[10px] text-black/70 cursor-pointer select-none z-[2]"
                />
                {index === current && (
                  <div className="flex flex-row gap-4 items-center">
                    <span className="text-lg ">{slide.text}</span>
                  </div>
                )}
                <FaArrowCircleRight
                  onClick={handleNext}
                  size={30}
                  className="absolute top-[50%] right-[10px] text-black/70 cursor-pointer select-none z-[2]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
