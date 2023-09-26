"use client";

import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";


export default function Home() {
  return (
    <AnimatePresence
    >
      <motion.div
      initial={{ opacity: 0, y:15 }}
      animate={{ opacity: 1, y:0 }}
      exit={{ opacity: 0, y:15 }}
    > 
      <Navbar />
      <Header />
      <About />
    </motion.div>
    </AnimatePresence>
  )
}
