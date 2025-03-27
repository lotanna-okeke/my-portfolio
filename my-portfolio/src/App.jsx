import React from "react";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Intro from "./sections/Intro";
import About from "./sections/About";
// import Works from "./sections/Works";
// import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-[#141516] text-white">
      <motion.div
        initial={{ opacity: 0, y: 0, x:0 }}
        animate={{ opacity: 1, y: 0, x:0 }}
        transition={{ duration: 1}}
        className="max-w-4xl"
      >
        <div>
          <Navigation />
        </div>
      </motion.div>

      <main>
        <Intro />
        <About />
        {/* <Works />
        <Contact /> */}
      </main>
    </div>
  );
}

export default App;
