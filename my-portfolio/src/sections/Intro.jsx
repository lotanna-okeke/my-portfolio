import React from "react";
import { motion } from "framer-motion";

function Intro() {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center bg-black text-white relative px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-left"
      >
        <p className="text-yellow-400 text-sm uppercase tracking-widest mb-4">
          Hello World
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
          I am Luther, a digital designer & frontend developer based in
          Somewhere.
        </h1>
      </motion.div>
    </section>
  );
}

export default Intro;
