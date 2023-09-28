import { motion } from "framer-motion";
import React from "react";
interface ProjectsProps {
  title?: string;
  desc?: string;
  link?: string;
  github?: string;
  imgSrc: string;
  tags: string[];
}

const Projects: React.FC<ProjectsProps> = ({
  title,
  desc,
  link,
  github,
  imgSrc,
  tags
}) => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center last:mb-0 mb-10"
      key={title}
    >
      <div className="w-full md:w-1/2">
        <img className="w-full" src={imgSrc} alt={title} />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center md:px-10">
        <h1 className="text-4xl md:text-5xl mt-10 md:mt-0 font-mono font-bold">
          {title}
        </h1>
        <p className="my-5 text-sm">{desc}</p>
        <ul className="flex flex-wrap text-sm font-mono dark:text-[#e6f1ff]">
          {tags.map(tag => (
            <li className="mr-2 mb-2 px-4 py-2 bg-blue-500/30" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
