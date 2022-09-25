import { MotionWrapper, AppWrapper } from "../utils"

const Contact = () => {
    return(
        <>
           <div className="w-full flex flex-col  justify-center items-center">
                <h6 className="font-poppins text-lg text-sky-500 font-bold">
                        <span className="font-work">03.</span> Contact
                </h6>
                <h1 className="mt-10 text-white font-bold font-poppins text-5xl">
                    Get In Touch
                </h1>
                <p className="text-[#8893ae] text-lg w-full md:w-1/2 text-center my-5 px-10">
                    Whether you have a question or just want to say hi, my inbox is always open. I'll try my best to get back to you as soon as possible!
                </p>
                <a href="mailto:riadeboughaba@gmail.com" className="px-5 py-3 text-base text-sky-300 rounded border border-sky-300 font-work hover:bg-sky-400/20 transition-all">Send E-mail</a>
            </div>
            <p className="w-full mt-24 text-center font-work text-white text-sm py-5">
                Build by Riade Boughaba
            </p>
        </>
    )
}

export default  AppWrapper(MotionWrapper(Contact), "bg-[#09192e] flex flex-col justify-center h-screen pt-20 relative", "Contact")