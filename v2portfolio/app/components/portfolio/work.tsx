import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Projects from "./page";
import { client } from "@/lib/sanity";

async function getProjects() {
  const query = `*[_type == 'project']{
                        title,
                            description,
                            link,
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
  console.log(data);

  return (
    <motion.div
      className="px-36 mt-20"
      ref={ref}
      style={{ opacity: scrollYProgress }}
    >
      <h1
        className="flex items-end text-base light:text-[#0a192f]
                    justify-start w-full font-fira mb-10
                    md:text-3xl"
      >
        <span className="md:text-xl text-sky-500 font-mono mr-5">03.</span> My
        Work
      </h1>
      {data.map(item => (
        <Projects
          key={item._id}
          title={item.title}
          desc={item.description}
          imgSrc={item.imageUrl}
          tags={item.tags}
        />
      ))}
    </motion.div>
  );
};

export default Work;
