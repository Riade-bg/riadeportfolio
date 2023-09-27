import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Projects from "./page"

const Work = () => {
    const ref = useRef<HTMLDivElement>(null)
 
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0 0"]
    })
    const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
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
        <motion.div className="px-36 mt-20"
            ref={ref}
            style={{opacity: scrollYProgress,}}>
            <h1 className="flex items-end text-base 
                    justify-start w-full font-fira
                    text-2xl md:text-3xl text-gray-200">
                <span className="md:text-xl text-sky-500 font-mono mr-5">03.</span> My Work
            </h1>
            {projects.map((item) => (
                <Projects 
                    key={item.name}
                    title={item.name}
                    desc={item.desc}
                    imgSrc={item.img}
                    tags={item.tags}
                />
            ))}
        </motion.div>
    )
}

export default Work