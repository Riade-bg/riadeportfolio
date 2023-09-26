"use client";

import {  motion  } from 'framer-motion'

const About = () => {
    return(
        <motion.div className="w-full flex justify-center px-10" id="About"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        >
            <div className="w-[550px] p-10">
                <h1 className="flex items-end text-base 
                    justify-start w-full font-fira
                    text-2xl md:text-3xl text-gray-200 mb-10">
                    <span className="md:text-xl text-sky-500 font-mono mr-5">01.</span> About Me
                </h1>
                <div className="text-[#a8b2d1] text-base">
                    <p className="text-center md:text-start mb-6 leading-relaxed font-poppins">
                        Hello! My name is Riade and I enjoy creating things that live on the internet. My interest in front-end web development started back in 2012 when I decided to try editing custom templates — turns out inspecting a custom reblog button taught me a lot about HTML & CSS!
                        Fast-forward to today, and I've had the privilege of working as a <span className="text-sky-500 font-bold">freelance developer and a developer at student-organization in my university as front-end web developer. </span>  My main focus these days is building accessible, inclusive front-end interfaces and digital experiences for a variety of clients.
                    </p>
                    <p className="text-center md:text-start mb-6 leading-relaxed font-poppins">
                        Here are technologies I've been working with recently:
                    </p>
                </div>
                <div className='flex justify-between'>
                    <ul className="font-mono text-sm text-[#8892b0]">
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
                    <ul className="font-mono text-sm text-[#8892b0]">
                        <li className='before:content-["▹"] mb-3 before:text-sky-500 before:w-10 before:h-24 before:mr-3'>
                            Tailwind
                        </li>
                        <li className='before:content-["▹"] mb-3 before:text-sky-500 before:w-10 before:h-24 before:mr-3'>
                            API
                        </li>
                        <li className='before:content-["▹"] before:text-sky-500 before:w-10 before:h-24 before:mr-3'>
                            Server Side Rendering (Backend)
                        </li>
                    </ul>
                </div>
            </div>
                <div className="w-1/3 p-1 top-1/2 flex">
                    <img src={"https://placehold.co/400x400"} alt={"Profile"}/>
                </div>

                {/* <div className='col-span-6 md:col-span-3 text-sky-500 font-work text-sm w-full h-full flex justify-center items-start flex-wrap'>
                        {[
                            {name: "React", img: ReactImg}, 
                            {name: "Tailwind", img: TailwindImg}, 
                            {name: "Git", img: GitImg}, 
                            {name: "Figma", img: FigmaImg}, 
                            {name: "NodeJs", img: NodeImg}, 
                            {name: "Framer", img: FramerImg}, 
                            ].map((item, index) => (
                            <div className="flex flex-col justify-center items-center text-base mr-5 p-4 drop-shadow" key={index}>
                                <img className='w-14 h-14 rounded-full' src={item.img} alt="" />
                                <h4>
                                    {item.name}
                                </h4>
                            </div>    
                        ))}
                </div> */}
         </motion.div>
    )
}

export default About