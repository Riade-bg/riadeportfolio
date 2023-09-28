import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      className="w-screen py-20 px-10 flex flex-col items-center justify-center"
    >
      <p
        className="flex items-end light:text-[#0a192f]
                    justify-center font-mono md:mt-0 mb-10
                    text-lg text-center w-full"
      >
        04. What's Next?
      </p>
      <h1 className="text-5xl font-fira">Contact</h1>
      <p className="text-center md:w-1/2 my-10">
        Thanks for taking time to go through my Portfolio. If you wan't to
        cantact me, I will do my best to reply as soon as possible. Thank you!
      </p>
    </motion.div>
  );
};

export default Contact;
