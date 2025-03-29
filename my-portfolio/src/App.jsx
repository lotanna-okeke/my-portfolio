import React from "react";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Works from "./sections/Works";
// import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-[#141516] text-white">
      <Navigation />
      <main>
        <Intro />
        <About />
        <Works />
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
