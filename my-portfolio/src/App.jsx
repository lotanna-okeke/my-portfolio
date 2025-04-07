import React from "react";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Intro from "./sections/Intro";
import About from "./sections/About";
import Works from "./sections/Works";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#141516] text-white">
      <Navigation />
      <main>
        <Intro />
        <About />
        <Works />
        {/* Divider with Better Spacing */}
        {/* <div className="w-full h-[2px] max-w-7xl items-center flex mx-auto bg-[#2c2c2d] my-12"></div> */}
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
