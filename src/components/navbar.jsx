import {motion} from 'framer-motion'
import {HiDownload, HiMenu} from 'react-icons/hi'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import {AiOutlineClose} from 'react-icons/ai'
import { Resume } from '../assets'

const Nav = () => {
    const [menu, setMenu] = useState(false)
    return(
        <>
        <nav className="fixed w-full top-0 flex flex-1 justify-between items-center px-10 py-5 shadow-lg bg-[#09192e]/40 backdrop-blur z-20">
            <div>
                <h1 className="px-3 py-1 text-white border-2 border-white text-lg font-bold">R</h1>
            </div>
            <ul className="flex text-gray-300 text-sm font-work items-center">
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

                    <li key={index} className="hover:text-sky-500 mr-10 capitalize hidden md:flex items-center transition-all">
                        <span className="text-sky-500 mr-1">{item.index}</span>
                        <a href={`#${item.link}`}>{item.link}</a>
                    </li>
                ))}
                <li>
                    <a href={Resume} download className="hidden md:flex px-5 py-2 text-sm text-sky-300 rounded border border-sky-300 
                    font-work hover:bg-sky-400/20 transition-all items-center">
                        Resume
                        <span>
                            <HiDownload />
                        </span>
                    </a>
                </li>
                <li className="md:hidden text-white text-lg p-2 cursor-pointer rounded-md bg-sky-700/80" onClick={() => setMenu(true)}>
                    <HiMenu />
                </li>
            </ul>
        </nav>
        <AnimatePresence>
        {menu && (
            <motion.div
             initial={{opacity:0}}
             animate={{opacity:1}}
             exit={{opacity:0}}
             transition={{duration: 0.2}}
             className='fixed right-0 top-0 bg-[#09192e]/50 backdrop-blur w-screen h-screen z-30 flex justify-end'>
                    <ul className='px-5 right-0 text-gray-300 text-2xl relative w-9/12 h-full w-full bg-[#09192e] flex flex-col items-center justify-center font-work'>
                        <li className='text-2xl absolute top-2 right-7 cursor-pointer top-0 p-1 m-4 bg-sky-700/80 flex justify-end text-white rounded-md' onClick={() => setMenu(false)}>
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

                            <li key={index} className="mb-5 capitalize flex flex-col items-center transition-all" onClick={()=> setMenu(false)}>
                                <span className="text-sky-500 text-base">{item.index}</span>
                                <a href={`#${item.link}`}>{item.link}</a>
                            </li>
                        ))}
                        <li className='w-full'>
                            <button className="flex flex-1 justify-center px-5 py-3 text-sm w-4/6 mx-auto text-sky-300 rounded border border-sky-300 
                            font-work hover:bg-sky-400/20 transition-all items-center">
                                Resume <HiDownload className='ml-2' />
                                
                            </button>
                        </li>
                    </ul>
            </motion.div>
        )}
        </AnimatePresence>
        </>
    )
}

export default Nav