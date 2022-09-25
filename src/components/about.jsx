import { ReactImg, FigmaImg, GitImg, TailwindImg, NodeImg, FramerImg } from '../assets'
import { MotionWrapper, AppWrapper } from '../utils'
const About = () => {
    return(
        <div className="w-full">
            <h1 className="flex flex-col md:flex-row items-center justify-center md:justify-start w-full font-poppins text-2xl md:text-4xl text-gray-200 font-bold mb-10">
                <span className="md:text-3xl text-sky-500 font-work">01.</span> About 
            </h1>
            <div className='grid grid-cols-6 gap-4'>
                <div className="col-span-6 md:col-span-3 text-[#8893ae] text-base">
                    <p className="text-center md:text-start mb-6 leading-relaxed font-poppins">
                        Hello! My name is Riade and I enjoy creating things that live on the internet. My interest in front-end web development started back in 2012 when I decided to try editing custom templates — turns out inspecting a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <p className="text-center md:text-start mb-6 leading-relaxed font-poppins">
                        Fast-forward to today, and I've had the privilege of working as a <span className="text-sky-500 font-bold">freelance developer and a developer at student-organization in my university as front-end web developer. </span>  My main focus these days is building accessible, inclusive front-end interfaces and digital experiences for a variety of clients.
                    </p>
                    <p className="text-center md:text-start mb-6 leading-relaxed font-poppins">
                        Here are technologies I've been working with recently:
                    </p>
                </div>

                <div className='col-span-6 md:col-span-3 text-sky-500 font-work text-sm w-full h-full flex justify-center items-start flex-wrap'>
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
                </div>
            </div>
        </div>
    )
}

export default AppWrapper(MotionWrapper(About) , "flex items-center px-10 lg:px-30 md:px-20 bg-[#09192e] h-auto md:h-screen", "About")