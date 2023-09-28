import { motion } from "framer-motion";
import React from "react";
interface ProjectsProps {
  title?: string;
  desc?: string;
  link?: string;
  github?: string;
  imgUrl?: string;
  tags: string[];
}

const Projects: React.FC<ProjectsProps> = ({
  title,
  desc,
  link,
  github,
  imgUrl,
  tags
}) => {
  return (
    <div className="grid grid-cols-12 last:mb-0 mb-10" key={title}>
      <div className="relative col-span-7 hover:before:bg-transparent before:transition before:h-full before:w-full before:content-[''] before:bg-blue-500/40 before:absolute before:z-10">
        <img
          className="w-full"
          src={
            "https://v4.brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif"
          }
          alt={title}
        />
      </div>
      <div className={"col-span-5 flex flex-col items-end justify-center"}>
        <h1 className="text-2xl mt-10 md:mt-0 font-mono font-bold">{title}</h1>
        <p className="text-end my-5 text-base text-[#a8b2d1] bg-[#0a192f] shadow-lg px-5 py-2 -ml-40 z-20">
          {desc}
        </p>
        <ul className="flex flex-wrap text-sm font-mono dark:text-[#e6f1ff]">
          {tags.map(tag => (
            <li className="mx-8 mb-2" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
