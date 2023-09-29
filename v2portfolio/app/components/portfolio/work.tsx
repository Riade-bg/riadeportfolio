import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Projects from "./page";
import { client } from "@/lib/sanity";

async function getProjects() {
  const query = `*[_type == 'project']{
                        title,
                            description,
                            link,
                            github,
                            "imageUrl": image.asset->url,
                            tags,
                            _id}`;

  const data = await client.fetch(query);
  return data;
}

interface Data {
  title: string;
  description: string;
  link: string;
  github: string;
  _id: string;
  imageUrl: string;
  tags: string[];
}

const Work = async () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0 0"]
  });
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const data: Data[] = await getProjects();

  return (
    <motion.div
      id="work"
      className="px-5 md:px-36 mt-20 pt-10"
      ref={ref}
      style={{ opacity: scrollYProgress }}
    >
      <h1
        className="flex items-end md:text-start
                        justify-start w-full font-mono
                        text-3xl dark:text-blue-500 light:text-[#0a192f] mb-10"
      >
        03. My Work
      </h1>
      {data.map(item => (
        <Projects
          key={item._id}
          title={item.title}
          link={item.link}
          github={item.github}
          desc={item.description}
          imgUrl={item.imageUrl}
          tags={item.tags}
        />
      ))}
    </motion.div>
  );
};

export default Work;
