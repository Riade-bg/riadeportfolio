"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { HiDownload, HiMenu } from "react-icons/hi";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();
  const { setTheme } = useTheme();
  return (
    <>
      <nav className="z-10 w-full top-0 flex flex-1 justify-between items-center px-24 py-5 shadow fixed backdrop-blur">
        <div className="border-blue-500 transition-ll border-2">
          <h1
            onClick={() => router.push("/")}
            className="px-3 py-1 transition hover:text-blue-500 
                    text-lg font-bold cursor-pointer"
          >
            R
          </h1>
        </div>
        <ul className="flex dark:text-gray-300 text-sm font-mono items-center">
          {[
            {
              index: "01.",
              link: "About"
            },
            {
              index: "02.",
              link: "Work"
            },
            {
              index: "03.",
              link: "Contact"
            }
          ].map((item, index) => (
            <li
              key={index}
              onClick={() => router.push(`#${item.link}`)}
              className="cursor-pointer hover:text-blue-500 mr-10 capitalize hidden md:flex items-center transition-all"
            >
              <span className="text-blue-500 mr-1">{item.index}</span>
              <p>{item.link}</p>
            </li>
          ))}
          <li>
            <Button
              variant={"outline"}
              className="hidden md:flex px-5 py-2 text-sm text-blue-500 rounded-none border border-blue-500 
                            font-work hover:bg-blue-500/20 transition-all items-center"
            >
              Resume
              <span className="ml-2">
                <HiDownload />
              </span>
            </Button>
          </li>
          <li>
            <div className="bg-red-100 flex items-center ml-3">
              {darkMode && (
                <Button
                  variant="secondary"
                  className="text-black border rounded-none"
                  size="icon"
                  onClick={() => {
                    setTheme("light"), setDarkMode(false);
                  }}
                >
                  <BsSun className="text-white h-[1.2rem] w-[1.2rem] transition-all" />
                </Button>
              )}
              {!darkMode && (
                <Button
                  variant="secondary"
                  className="rounded-none"
                  size="icon"
                  onClick={() => {
                    setTheme("dark");
                    setDarkMode(true);
                  }}
                >
                  <MdOutlineDarkMode className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
                </Button>
              )}
            </div>
          </li>
          <li
            className="md:hidden p-2 cursor-pointer ml-2"
            onClick={() => setMenu(true)}
          >
            <HiMenu className="light:text-black" size={30} />
          </li>
        </ul>
      </nav>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed right-0 top-0 bg-[#09192e]/50 backdrop-blur w-screen h-screen z-30 flex justify-end"
          >
            <ul className="px-5 right-0 text-gray-300 text-2xl relative w-9/12 h-full w-full bg-[#09192e] flex flex-col items-center justify-center font-work">
              <li
                className="text-2xl absolute top-2 right-7 cursor-pointer top-0 p-1 m-4 bg-blue-700/80 flex justify-end text-white rounded-md"
                onClick={() => setMenu(false)}
              >
                <AiOutlineClose />
              </li>
              {[
                {
                  index: "01.",
                  link: "About"
                },
                {
                  index: "02.",
                  link: "Work"
                },
                {
                  index: "03.",
                  link: "Contact"
                }
              ].map((item, index) => (
                <li
                  key={index}
                  className="mb-5 capitalize flex flex-col items-center transition-all"
                  onClick={() => setMenu(false)}
                >
                  <span className="text-blue-500 text-base">{item.index}</span>
                  <a href={`#${item.link}`}>{item.link}</a>
                </li>
              ))}
              <li className="w-full">
                <a
                  href={"/"}
                  download
                  className="flex flex-1 justify-center px-5 py-3 text-sm w-4/6 mx-auto text-blue-300 rounded border border-blue-300 
                                                font-work hover:bg-blue-400/20 transition-all items-center"
                >
                  Resume <HiDownload className="ml-2" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
