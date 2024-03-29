"use client";

import { Button } from "@/components/ui/button";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="px-10 md:px-32 lg:px-40 h-screen md:h-[555px] flex flex-col justify-center items-center md:items-start">
        <span className="mb-5 font-mono text-base text-blue-500">
          Hi, my name is
        </span>
        <h1 className="dark:text-[#e6f1ff] light:text-[#112240] text-center text-5xl lg:text-8xl font-bold mb-1">
          Riade Boughaba
        </h1>
        <h2 className="dark:text-[#a8b2d1] light:text[#0a192f] text-2xl lg:text-7xl md:text-5xl font-bold">
          & I build web interfaces.
        </h2>
        <p className="my-5 md:my-8 w-full lg:w-2/3 text-center md:text-start text-base md:text-lg">
          A web debeloper specializing in building (and designing) exceptional
          web interfaces using NextJS.
        </p>
        <div className="flex gap-4">
          <a href="/Lebenslauf..pdf" target="_blank" rel="noreferrer">
            <Button className="rounded-none">My Resume</Button>
          </a>
          <Link
            href="https://www.linkedin.com/in/riadeboughaba"
            passHref
            target="_blank"
          >
            <Button className="rounded-none">Linkedin Profile</Button>
          </Link>
        </div>
      </div>
      <div className="hidden md:block">
        <div
          className="h-1/2 fixed flex flex-col top-[50%] left-14 
            after:absolute after:h-20 after:w-[0.5px] after:bg-blue-500 after:bottom-0 after:left-3"
        >
          <Link href="https://github.com/Riade-bg" target="_blank">
            <p className="hover:text-blue-500 transition-all cursor-pointer mb-5">
              <AiFillGithub size={26} />
            </p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/riadeboughaba"
            target="_blank"
          >
            <p className="hover:text-blue-500 transition-all cursor-pointer mb-10">
              <AiFillLinkedin size={26} />
            </p>
          </Link>
        </div>
        <div
          className="h-1/2 fixed flex flex-col top-[50%] right-0 font-mono
            after:absolute after:h-20 after:bg-blue-500 after:w-1 after:bottom-0 after:right-[100px]"
        >
          <Link href="mailto:riadeboughaba@gmail.com">
            <p className="hover:text-blue-500 text-sm transition-all cursor-pointer rotate-90">
              riadeboughaba<span className="text-blue-700 mx-1">@</span>
              gmail.com
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
