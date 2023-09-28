"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0 0"]
  });

  return (
    <motion.div
      id="about"
      ref={ref}
      style={{ opacity: scrollYProgress }}
      className="w-full flex flex-col md:flex-row justify-center items-center md:px-10 pt-20"
    >
      <div className="w-full md:w-[550px] p-10 light:text-[#0a192f]">
        <h1
          className="flex items-end md:text-start
                        justify-start w-full font-mono
                        text-3xl dark:text-blue-500 light:text-[#0a192f] mb-10"
        >
          01. About Me
        </h1>
        <div className="light:text-[#0a192f] text-base">
          <p className="text-start mb-6 leading-relaxed font-poppins">
            Hello! My name is Riade and I enjoy creating things that live on the
            internet. My interest in front-end web development started back in
            2012 when I decided to try editing custom templates — turns out
            inspecting a custom reblog button taught me a lot about HTML & CSS!
            Fast-forward to today, and I've had the privilege of working as a{" "}
            <span className="text-sky-500 font-bold">
              freelance developer and a developer at student-organization in my
              university as front-end web developer.{" "}
            </span>{" "}
            My main focus these days is building accessible, inclusive front-end
            interfaces and digital experiences for a variety of clients.
          </p>
          <p className="text-start mb-6 leading-relaxed font-poppins">
            Here are technologies I've been working with recently:
          </p>
        </div>
        <div className="flex justify-between">
          <ul className="font-mono text-sm light:text-[#0a192f]">
            <li className='before:content-["▹"] mb-3 before:text-sky-500 before:w-10 before:h-24 before:mr-3'>
              JavaScript
            </li>
            <li className='before:content-["▹"] mb-3 before:text-sky-500 before:w-10 before:h-24 before:mr-3'>
              React
            </li>
            <li className='before:content-["▹"] before:text-sky-500 before:w-10 before:h-24 before:mr-3'>
              Next.js
            </li>
          </ul>
          <ul className="font-mono text-sm light:text-[#0a192f]">
            <li className='before:content-["▹"] mb-3 before:text-sky-500 before:w-10 before:h-24 before:mr-3'>
              Tailwind
            </li>
            <li className='before:content-["▹"] mb-3 before:text-sky-500 before:w-10 before:h-24 before:mr-3'>
              API
            </li>
            <li className='before:content-["▹"] before:text-sky-500 before:w-10 before:h-24 before:mr-3'>
              Backend
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/3 p-1 top-1/2 flex">
        <img src={"https://placehold.co/400x400"} alt={"Profile"} />
      </div>
    </motion.div>
  );
};

export default About;
