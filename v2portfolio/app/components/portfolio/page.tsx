"use client";

import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import React from "react";
import { useRouter } from "@/node_modules/next/navigation";

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
  const router = useRouter();
  return (
    <div
      className="grid grid-cols-12 relative md:none last:mb-0 mb-10"
      key={title}
    >
      <div
        className="hidden relative md:block col-span-12 md:col-span-7
        hover:before:bg-transparent before:transition before:h-full before:w-full before:content-[''] before:bg-blue-500/40 before:absolute before:z-10"
      >
        <img
          className="w-full"
          src={
            "https://v4.brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif"
          }
          alt={title}
        />
      </div>
      <style jsx>
        {`
        @media (max-width: 768px) {
            .on-the-fly-behavior:before {
              content: ' ';
              display: block;
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              opacity: 0.2;
              background-image: url('${imgUrl}'); ;
              background-color: black;
              background-repeat: no-repeat;
              background-position: 50% 0;
              background-size: cover;
            }
          }
            `}
      </style>
      <div
        className={`on-the-fly-behavior h-[500px] md:h-full p-10 md:p-0 col-span-12 md:col-span-5 flex flex-col items-start md:items-end justify-center`}
      >
        <h1 className="text-2xl mt-10 md:mt-0 font-mono font-bold">{title}</h1>
        <p className="text-start md:text-end my-5 text-base dark:text-[#a8b2d1] md:bg-[#0a192f] shadow-lg md:px-5 py-2 md:-ml-40 z-20">
          {desc}
        </p>
        <ul className="flex flex-wrap text-sm font-mono dark:text-[#e6f1ff]">
          {tags.map(tag => (
            <li className="mr-4 md:mx-4 mb-2" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex md:m-4 dark:text-[#e6f1ff] cursor-pointer hover:text-blue-500">
          <FiExternalLink
            className={"mr-4"}
            onClick={() => router.push(link)}
            size={24}
          />
          <AiFillGithub
            className={""}
            onClick={() => router.push(github)}
            size={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
