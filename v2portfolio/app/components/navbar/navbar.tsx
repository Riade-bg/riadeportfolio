"use client";

import { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSun} from 'react-icons/bs'
import {MdOutlineDarkMode} from 'react-icons/md'

import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';


const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const router = useRouter()
    const { setTheme } = useTheme()
    return (
        <>
            <nav className="w-full top-0 flex flex-1 justify-between items-center px-10 py-5 shadow fixed backdrop-blur">
                <div>
                    <h1 onClick={() => router.push("/")} className="px-3 py-1 transition  
                    border-4 hover:border-sky-500 hover:text-sky-500 
                    text-lg font-bold cursor-pointer">
                        R
                    </h1>
                </div>
                <ul className="flex text-gray-300 text-sm font-work items-center">
                    {[
                        {
                            index: "01.",
                            link: "About",
                        },
                        {
                            index: "02.",
                            link: "Work",
                        },
                        {
                            index: "03.",
                            link: "Contact",
                        },
                    ].map((item, index) => (
                        <li
                            key={index}
                            onClick={() => router.push(`#${item.link}`)}
                            className="cursor-pointer font-fira hover:text-[#64ffda] mr-10 capitalize hidden md:flex items-center transition-all"
                        >
                            <span className="text-[#64ffda] mr-1">
                                {item.index}
                            </span>
                            <p>{item.link}</p>
                        </li>
                    ))}
                    <li>
                        <a
                            href={"/"}
                            download
                            className="hidden md:flex px-5 py-2 text-sm text-[#64ffda] rounded-none border border-[#64ffda] 
                            font-work hover:bg-sky-400/20 transition-all items-center"
                        >
                            Resume
                            {/* <span>
                                <HiDownload />
                            </span> */}
                        </a>
                    </li>
                    <li>
                    <Button variant="outline" className='ml-3 text-black' size="icon" onClick={() => setTheme("light")}>
                        <BsSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    </Button>
                    <Button variant="outline" className='ml-3' size="icon" onClick={() => setTheme("dark")}>
                        <MdOutlineDarkMode className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                    </li>
                    <li
                        className="md:hidden text-white text-lg p-2 cursor-pointer rounded-md bg-sky-700/80"
                        onClick={() => setMenu(true)}
                    >
                        {/* <HiMenu /> */}
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
                                className="text-2xl absolute top-2 right-7 cursor-pointer top-0 p-1 m-4 bg-sky-700/80 flex justify-end text-white rounded-md"
                                onClick={() => setMenu(false)}
                            >
                                <AiOutlineClose />
                            </li>
                            {[
                                {
                                    index: "01.",
                                    link: "About",
                                },
                                {
                                    index: "02.",
                                    link: "Work",
                                },
                                {
                                    index: "03.",
                                    link: "Contact",
                                },
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className="mb-5 capitalize flex flex-col items-center transition-all"
                                    onClick={() => setMenu(false)}
                                >
                                    <span className="text-sky-500 text-base">
                                        {item.index}
                                    </span>
                                    <a href={`#${item.link}`}>{item.link}</a>
                                </li>
                            ))}
                            <li className="w-full">
                                <a
                                    href={"/"}
                                    download
                                    className="flex flex-1 justify-center px-5 py-3 text-sm w-4/6 mx-auto text-sky-300 rounded border border-sky-300 
                                                font-work hover:bg-sky-400/20 transition-all items-center"
                                >
                                    {/* Resume <HiDownload className="ml-2" /> */}
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
