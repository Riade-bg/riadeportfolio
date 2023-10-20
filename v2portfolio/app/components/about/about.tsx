"use client";

import Image from "next/image";

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
            Greetings! I'm Riade, and I'm passionate about crafting digital
            experiences on the web. My journey into the world of front-end web
            development commenced in 2015 when I delved into custom template
            editing. Surprisingly, dissecting a bespoke blog template provided
            me with invaluable insights into HTML and CSS. Fast-forward to the
            present, and I've been fortunate to build a career in this exciting
            field. My main focus these days is building accessible, inclusive
            front-end interfaces and digital experiences for a variety of
            clients.
          </p>
          <p className="text-start mb-6 leading-relaxed font-poppins">
            Here are technologies I've been working with recently:
          </p>
        </div>
        <div className="flex justify-start">
          <ul className="font-mono text-sm light:text-[#0a192f] mr-10">
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
      <div className="w-full md:w-1/3 p-1 top-1/2 flex justify-center">
        <Image
          src="/Bild.jpg"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </div>
    </motion.div>
  );
};

export default About;
