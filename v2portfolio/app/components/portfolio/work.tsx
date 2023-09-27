import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

const Work = () => {
    const ref = useRef<HTMLDivElement>(null)
 
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.6 1.5"]
    })
    const projects = [
        {
            name: "Airbnb Clone",
            img: "https://placehold.co/600x400",
            desc: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
            tags:[
                "React",
                "Next.js",
                "Tailwindcss",
            ]
        },
        {
            name: "Airbnb Clone2",
            img: "https://placehold.co/600x400",
            desc: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
            tags:[
                "React",
                "Next.js",
                "Tailwindcss",
            ]
        }
    ]
    return(
        <motion.div
            ref={ref}
            style={
                {
                    opacity: scrollYProgress
                }

            }
        className="px-36 mt-20"
        >
            <h1 className="flex items-end text-base 
                    justify-start w-full font-fira
                    text-2xl md:text-3xl text-gray-200 -mb-10">
                <span className="md:text-xl text-sky-500 font-mono mr-5">03.</span> My Work
            </h1>
            {projects.map((item) => (
            <div className="flex justify-center mt-24" key={item.name}>
                <div className="w-1/2">
                    <img src={item.img} alt={item.name}/>
                </div>
                    <div className="w-1/2 flex flex-col justify-center px-10">
                        <h1 className="text-5xl font-mono font-bold">{item.name}</h1>
                        <p className="my-5 text-sm">
                            {item.desc}
                        </p>
                        <ul className="flex text-sm font-mono text-[#8892b0]">
                            {item.tags.map((tag) => (
                                <li className="mr-5" key={tag}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>
            ))}
        </motion.div>
    )
}

export default Work
>>>>>>> 7db7083146407d3c3ebc752037f239d0cbad6fc0