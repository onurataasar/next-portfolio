import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="card-container relative  sm:self-auto self-stretch sm:min-w-[30rem] min-w-[24rem] shadow-2xl">
      <div
        className="card z-[1] absolute top-0 bottom-0 right-0 left-0 bg-black/90 hidden flex-col gap-6
      justify-center items-center min-w-fit"
      >
        <h1 className="font-bold text-4xl">{props.name}</h1>
        <p className="text-center font-thin w-3/4">
          Lorem ipsum, dolor sit ament. Project short information.
        </p>
        <div className="flex flex-row gap-5">
          {/*           <button className="rounded-lg bg-green-800 hover:bg-green-600 px-8 py-1">
            Details
          </button> */}
          <a
            href={props.github}
            rel="noreferrer"
            target="_blank"
            className="rounded-lg bg-green-800 text-2xl hover:bg-green-600 flex py-1 justify-center items-center px-12 "
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="z-0">
        <Image
          alt="project-logo"
          src={props.logo}
          layout="responsive"
          width={400}
          height={400}
        />
      </div>
      {/*       <div className=" rounded overflow-hidden border w-full text-black bg-white mx-3 md:mx-0 lg:mx-0">
        <div className="w-full flex justify-between p-3">
          <div className="flex">
            <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
              <Image
                alt="project-logo"
                src={props.logo}
                width={400}
                height={400}
              />
            </div>
            <span className="pt-1 ml-2 font-bold text-sm">{props.name}</span>
          </div>
          <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
            <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
          </span>
        </div>
        <Image alt="project-logo" src={props.logo} width={400} height={400} />

        <div className="px-3 pb-2">
          <div class="pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
          <div className="pt-1">
            <div className="mb-2 text-sm">
              <span className="font-medium mr-2">braydoncoyer</span> Lord of the
              Rings is my favorite film-series. One day make my way to New
              Zealand to visit the Hobbiton set!
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProjectCard;
