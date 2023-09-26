import { Resume } from "../assets"
import {AppWrapper } from "../utils"

const Hero = () => {
    return(
        <>
            <span className="my-3 text-sky-300 font-poppins text-2xl">Hi, my name is</span>
            <h1 className="text-5xl lg:text-8xl md:text-6xl font-bold text-gray-300 mb-1 font-poppins">Riade Boughaba.</h1>
            <h2 className="text-2xl lg:text-7xl md:text-5xl font-bold text-gray-400 font-poppins">I build web interfaces.</h2>
            <p className="my-8 text-gray-400 font-poppins w-full md:w-2/3 text-base md:text-lg">
            I'm a junior front-end web debeloper specializing in building
            (and designing) exceptional web interfaces using ReactJS.
            </p>
            <a href={Resume} download className="px-5 py-3 text-lg text-sky-300 rounded border border-sky-300 font-work hover:border-4 transition-all">Download My Resume</a>
        </>
    )
}
export default AppWrapper(Hero, "bg-[#09192e] h-screen px-10 lg:px-30 md:px-20 flex flex-col justify-center items-start", "Home") 