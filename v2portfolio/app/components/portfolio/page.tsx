"use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { client } from "@/lib/sanity";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { AiFillGithub } from "react-icons/ai";
// import { FiExternalLink } from "react-icons/fi";

// async function getProjects() {
//   interface Data {
//     title: string;
//     description: string;
//     link: string;
//     github: string;
//     _id: string;
//     imageUrl: string;
//     tags: string[];
//   }

//   const query = `*[_type == 'project']{
//                         title,
//                             description,
//                             link,
//                             github,
//                             "imageUrl": image.asset->url,
//                             tags,
//                             _id}`;

//   const data = await client.fetch(query);
//   return data;
// }

// export default async function Work() {
//   const data: Data[] = await getProjects();

//   const ref = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "0 0"]
//   });

//   return (
//     <motion.div
//       id="work"
//       className="px-5 md:px-36 mt-20 pt-10"
//       ref={ref}
//       style={{ opacity: scrollYProgress }}
//     >
//       <h1
//         className="flex items-end md:text-start
//                         justify-start w-full font-mono
//                         text-3xl dark:text-blue-500 light:text-[#0a192f] mb-10"
//       >
//         02. My Work
//       </h1>
//       {data.map(item => (
//         // <Projects
//         //   key={item._id}
//         //   title={item.title}
//         //   link={item.link}
//         //   github={item.github}
//         //   desc={item.description}
//         //   imgUrl={item.imageUrl}
//         //   tags={item.tags}
//         // />
//         <div
//           className="grid grid-cols-12 relative md:none last:mb-0 mb-10"
//           key={item._id}
//         >
//           <div
//             className="hidden relative md:block col-span-12 md:col-span-7
//         hover:before:bg-transparent before:transition before:h-full before:w-full before:content-[''] before:bg-blue-500/40 before:absolute before:z-10"
//           >
//             <img className="w-full" src={item.imageUrl} alt={item.title} />
//           </div>
//           <style jsx>
//             {`
//         @media (max-width: 768px) {
//             .on-the-fly-behavior:before {
//               content: ' ';
//               display: block;
//               position: absolute;
//               left: 0;
//               top: 0;
//               width: 100%;
//               height: 100%;
//               opacity: 0.2;
//               background-image: url('${item.imageUrl}'); ;
//               background-color: black;
//               background-repeat: no-repeat;
//               background-position: 50% 0;
//               background-size: cover;
//             }
//           }
//             `}
//           </style>

//           <div
//             className={`on-the-fly-behavior h-[500px] md:h-full p-10 md:p-0 col-span-12 md:col-span-5 flex flex-col items-start md:items-end justify-center`}
//           >
//             <h1 className="text-2xl mt-10 md:mt-0 font-mono font-bold">
//               {item.title}
//             </h1>
//             <p className="text-start md:text-end my-5 text-base bg-white text-[#a8b2d1] dark:bg-[#0a192f] shadow-lg px-5 py-2 md:-ml-40 md:z-20">
//               {item.description}
//             </p>
//             <ul className="flex flex-wrap text-sm font-mono dark:text-[#e6f1ff]">
//               {item.tags.map(tag => (
//                 <li className="mr-4 md:mx-4 mb-2" key={tag}>
//                   {tag}
//                 </li>
//               ))}
//             </ul>
//             {/* <div className="flex md:m-4 dark:text-[#e6f1ff] cursor-pointer hover:text-blue-500">
//                 <Link href={item.link} target="_blank">
//                   <FiExternalLink
//                     className={"mr-4"}
//                     onClick={() => router.push(item.link)}
//                     size={24}
//                   />
//                 </Link>
//                 <Link href={item.github} target="_blank">
//                   <AiFillGithub
//                     className={""}
//                     onClick={() => router.push(item.github)}
//                     size={24}
//                   />
//                 </Link>
//               </div> */}
//           </div>
//         </div>
//       ))}
//     </motion.div>
//   );
// }
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { client } from "@/lib/sanity";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

interface Data {
  title: string;
  description: string;
  link: string;
  github: string;
  _id: string;
  imageUrl: string;
}

async function getProjects() {
  const query = `*[_type == "project"] {
    title,
    description,
      link,
      github,
      _id,
      "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export const revalidate = 60;

export default async function Projects() {
  const data: Data[] = await getProjects();

  return (
    <div
      id="work"
      className="px-5 md:px-36 mt-20 pt-20"
      // ref={ref}
      // style={{ opacity: scrollYProgress }}
    >
      <h1
        className="flex items-end md:text-start
                        justify-start w-full font-mono
                        text-3xl dark:text-blue-500 light:text-[#0a192f] mb-10"
      >
        02. My Work
      </h1>
      {data.map(project => (
        <div
          className="grid grid-cols-12 relative md:none last:mb-0 mb-10"
          key={project._id}
        >
          <div
            className="hidden relative md:block col-span-12 md:col-span-7
        hover:before:bg-transparent before:transition before:h-full before:w-full before:content-[''] before:bg-blue-500/40 before:absolute before:z-10"
          >
            <img
              className="w-full"
              src={project.imageUrl}
              alt={project.title}
            />
          </div>
          <style jsx>
            {`
        @media (max-width: 768px) {
            .on-the-fly-behavior:before {
              content: ' ';
              display: block;
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              opacity: 0.2;
              background-image: url('${project.imageUrl}'); ;
              background-color: black;
              background-repeat: no-repeat;
              background-position: 50% 0;
              background-size: cover;
            }
          }
            `}
          </style>

          <div
            className={`on-the-fly-behavior h-[500px] md:h-full p-10 md:p-0 col-span-12 md:col-span-5 flex flex-col items-start md:items-end justify-center`}
          >
            <h1 className="text-2xl mt-10 md:mt-0 font-mono font-bold">
              {project.title}
            </h1>
            <p className="text-start md:text-end my-5 text-base bg-white text-[#a8b2d1] dark:bg-[#0a192f] shadow-lg px-5 py-2 md:-ml-40 md:z-20">
              {project.description}
            </p>

            <div className="flex md:m-4 dark:text-[#e6f1ff] cursor-pointer hover:text-blue-500">
              <a href={project.link} target="_blank">
                <FiExternalLink className={"mr-4"} size={24} />
              </a>
              <a href={project.github} target="_blank">
                <AiFillGithub className={""} size={24} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
