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
    <div className="flex justify-center last:mb-0 mb-10" key={title}>
      <motion.div className="w-1/2 after:bg-green-400 after:z-10">
        <img src={imgSrc} alt={title} />
      </motion.div>
      <div className="w-1/2 flex flex-col justify-center px-10">
        <h1 className="text-5xl font-mono font-bold">{title}</h1>
        <p className="my-5 text-sm">{desc}</p>
        <ul className="flex text-sm font-mono text-[#8892b0]">
          {tags.map(tag => (
            <li className="mr-5 bg-blue-500/20 px-5 py-2" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
