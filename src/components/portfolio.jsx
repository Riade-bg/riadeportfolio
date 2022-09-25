import {FiExternalLink, FiCode} from 'react-icons/fi'
import { Foodmood, Amely, Yotube, PortfolioImg } from '../assets'
import {motion} from 'framer-motion'
import { MotionWrapper, AppWrapper } from '../utils'

const Portfolio = () =>{
    return(
        <>
            <h1 className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full font-poppins text-2xl md:text-4xl text-gray-200 font-bold mb-10">
                <span className="text-3xl text-sky-500 font-work">02.</span> Portfolio 
            </h1>
            <div className="grid grid-cols-4 gap-4 mb-10">
                <div className="flex items-center rounded shadow col-span-4 lg:col-span-2 relative overflow-hidden">
                    <motion.span 
                        whileHover={{opacity: 0, transition: {duration: 0.3}}}
                        className='absolute min-h-full min-w-full bg-sky-500/30 z-10'>
                    </motion.span>
                    <img src={Foodmood} alt="FoodMood" className='w-full' />
                </div>
                <div className="col-span-4 lg:col-span-2">
                    <h6 className='text-sky-500 font-bold text-sm font-poppins uppercase w-full text-start'>React project</h6>
                    <h1 className="text-white font-bold text-4xl font-work text-start my-5">Food Mood</h1>
                    <p className="text-[#8893ae] bg-[#10233e] font-poppins text-base p-5 leading-relaxed">
                    A food recipe index provides many different dishes recipes from +10 cuisines worldwide where you can browse and search for any recipe, all provided by a particular API.
                    </p>
                    <ul className='flex items-center justify-start my-5 flex-wrap'>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            ReactJs
                        </li>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            API
                        </li>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            Tailwindcss
                        </li>
                    </ul>
                    <div className="flex justify-start items-center mb-4">
                        <a href='https://foodmoodrecipe.netlify.app/' rel="noreferrer" target={"_blank"}
                           className="bg-sky-700 rounded-md flex items-center px-3 py-1 text-white font-work">
                            <FiExternalLink className='mr-2'/>
                            Website
                        </a>
                        <a href='https://github.com/Riade-bg/foodmood' target={"_blank"} rel="noreferrer" 
                           className="ml-2 bg-sky-700 rounded-md flex items-center px-3 py-1 text-white font-work">
                            <FiCode className='mr-2'/>
                            Code
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-10">
                <div className="col-span-4 lg:col-span-2 order-last lg:order-first">
                    <h6 className='text-sky-500 font-bold text-sm font-poppins uppercase w-full'>React project</h6>
                    <h1 className="text-white font-bold text-4xl font-work my-5">Amely</h1>
                    <p className="text-[#8893ae] bg-[#10233e] font-poppins text-base p-5 leading-relaxed">
                    A modern agency website build with best practices to convince potential clients of this agency's service by providing a complete showcase of different services offered by the agency
                    </p>
                    <ul className='flex items-center my-5'>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            ReactJs
                        </li>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            Framer
                        </li>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            Tailwindcss
                        </li>
                    </ul>
                    <div className="flex items-center mb-4">
                        <a href="https://amelywebsite.netlify.app/" target={"_blank"} rel="noreferrer" 
                           className="bg-sky-700 rounded-md flex items-center px-3 py-1 text-white font-work">
                            <FiExternalLink className='mr-2'/>
                            Website
                        </a>
                        <a href='https://github.com/Riade-bg/amely' target={"_blank"} rel="noreferrer" 
                           className="ml-2 bg-sky-700 rounded-md flex items-center px-3 py-1 text-white font-work">
                            <FiCode className='mr-2'/>
                            Code
                        </a>
                    </div>
                </div>
                <div className="flex items-center rounded shadow col-span-4 lg:col-span-2 relative overflow-hidden order-first lg:order-last">
                    <motion.span 
                    whileHover={{opacity: 0, transition: {duration: 0.3}}}
                    className='absolute min-h-full min-w-full bg-sky-500/30 z-10'>
                    </motion.span>
                    <img src={Amely} alt="" className='w-full' />
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-10">
            <div className="flex items-center rounded shadow col-span-4 lg:col-span-2 relative overflow-hidden">
                    <motion.span 
                        whileHover={{opacity: 0, transition: {duration: 0.3}}}
                        className='absolute min-h-full min-w-full bg-sky-500/30 z-10'>
                    </motion.span>
                    <img src={Yotube} alt="" className='' />
                </div>
                <div className="col-span-4 lg:col-span-2">
                    <h6 className='text-sky-500 font-bold text-sm font-poppins uppercase w-full text-start'>React project</h6>
                    <h1 className="text-white font-bold text-4xl font-work text-start my-5">Youtube Clone</h1>
                    <p className="text-[#8893ae] bg-[#10233e] font-poppins text-base p-5 leading-relaxed">
                    A complete YouTube clone where you can browse any YouTube channel or watch any YouTube video and
                    Also, search for any video directly from the YouTube database.
                    </p>
                    <ul className='flex items-center justify-start my-5'>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            ReactJs
                        </li>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            Framer
                        </li>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            Tailwindcss
                        </li>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            API
                        </li>
                    </ul>
                    <div className="flex justify-start items-center mb-4">
                        <a href='https://youtubev2clone.netlify.app/' rel="noreferrer" target={"_blank"} 
                           className="bg-sky-700 rounded-md flex items-center px-3 py-1 text-white font-work">
                           <FiExternalLink className='mr-2'/>
                           Website
                        </a>
                        <a href='https://github.com/Riade-bg/youtubeclone'  target={"_blank"} rel="noreferrer" 
                           className="ml-2 bg-sky-700 rounded-md flex items-center px-3 py-1 text-white font-work">
                           <FiCode className='mr-2'/>
                           Code
                        </a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 lg:col-span-2 order-last lg:order-first">
                    <h6 className='text-sky-500 font-bold text-sm font-poppins uppercase w-full'>React project</h6>
                    <h1 className="text-white font-bold text-4xl font-work my-5">Riade Portfolio</h1>
                    <p className="text-[#8893ae] bg-[#10233e] font-poppins text-base p-5 leading-relaxed">
                    A modern web developer portfolio coded with the latest web technologies and integrated with Sanity 
                    CMS back-end where you can modify website content without touching the code.
                    </p>
                    <ul className='flex items-center my-5'>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            ReactJs
                        </li>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            Framer
                        </li>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            Tailwindcss
                        </li>
                        <li className='text-sm mr-5 text-[#8893ae] font-work'>
                            Sanity
                        </li>
                    </ul>
                    <div className="flex items-center mb-4">
                        <a href="https://riade.netlify.app/" target={"_blank"} rel="noreferrer"  className="bg-sky-700 rounded-md flex items-center px-3 py-1 text-white font-work">
                            <FiExternalLink className='mr-2'/>
                            Website
                        </a>
                        <a href='https://github.com/Riade-bg/riadeportfoliov1' target={"_blank"} rel="noreferrer"  
                           className="ml-2 bg-sky-700 rounded-md flex items-center px-3 py-1 text-white font-work">
                           <FiCode className='mr-2'/>
                           Code
                        </a>
                    </div>
                </div>
                <div className="flex items-center rounded shadow col-span-4 lg:col-span-2 relative overflow-hidden order-first lg:order-last">
                    <motion.span 
                    whileHover={{backgroundColor: "none", transition: {duration: 0.3}}}
                    className='absolute min-h-full min-w-full bg-sky-500/30 z-10'>
                    </motion.span>
                    <img src={PortfolioImg} alt="Riade Portfolio" className='w-full' />
                </div>
            </div>
        </>
    )
}

export default AppWrapper(MotionWrapper(Portfolio) , "bg-[#09192e] pt-20 h-auto px-5 md:px-24 ", "Work")