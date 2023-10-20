import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      className="w-screen py-20 px-10 flex flex-col items-center justify-center"
    >
      <p
        className="flex items-end dark:text-blue-500 light:text-[#0a192f]
                    justify-center font-mono md:mt-0 mb-10
                    text-lg text-center w-full"
      >
        03. What&apos;s Next?
      </p>
      <h1 className="text-5xl font-fira">Contact</h1>
      <p className="text-center md:w-1/2 my-10">
        Thanks for taking time to go through my Portfolio. If you wan&apos;t to
        cantact me, I will do my best to reply as soon as possible. Thank you!
      </p>
      <Link href="mailto:riadeboughaba@gmail.com">
        <Button>Contact</Button>
      </Link>
      <div className="flex md:hidden m-4">
        <Link href="https://github.com/Riade-bg" target="_blank">
          <p className="hover:text-blue-500 transition-all cursor-pointer mr-4">
            <AiFillGithub size={26} />
          </p>
        </Link>
        <Link href="https://www.linkedin.com/in/riadeboughaba" target="_blank">
          <p className="hover:text-blue-500 transition-all cursor-pointer">
            <AiFillLinkedin size={26} />
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Contact;
