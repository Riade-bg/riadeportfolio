"use client";

import { Button } from "@/components/ui/button";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
const Header = () => {
    return(
      <>
        <div className='px-10 md:px-40 h-screen md:h-[655px] flex flex-col justify-center items-start'>
            <span className="mb-5 font-mono text-base text-blue-500">Hi, my name is</span>
            <h1 className="text-5xl lg:text-8xl md:text-6xl font-bold mb-1">Riade Boughaba</h1>
            <h2 className="text-2xl lg:text-7xl md:text-5xl font-bold">& I build web interfaces.</h2>
            <p className="my-8 w-full md:w-2/3 text-base md:text-lg">
            I'm a junior front-end web debeloper specializing in building
            (and designing) exceptional web interfaces using ReactJS.
            </p>
            <div className='flex gap-4'>
                <Button className="rounded-none">
                    My Resume
                </Button>
                <Button className="rounded-none">
                    Linkedin Profile
                </Button>
            </div>
        </div>
        <div className="h-1/2 fixed flex flex-col top-[50%] left-14 
        after:absolute after:h-20 after:w-[0.5px] after:bg-white after:bottom-0 after:left-3">
            <p className="hover:text-blue-500 transition-all cursor-pointer mb-5">
                <AiFillGithub size={26} />
            </p>
            <p className="hover:text-blue-500 transition-all cursor-pointer mb-10">
                <AiFillLinkedin size={26} />
            </p>
        </div>
        <div className="h-1/2 fixed flex flex-col top-[50%] right-0 font-mono
        after:absolute after:h-20 after:w-[0.5px] after:bg-white after:bottom-0 after:right-28">
            <p className="hover:text-blue-500 text-sm transition-all cursor-pointer rotate-90">
                riadeboughaba<span className="text-blue-700 mx-1">@</span>gmail.com
            </p>
        </div>
      </>
    )
}

export default Header