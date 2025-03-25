import React from "react";
import { assests } from "../assets/assests";

function About() {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={assests.dummyPic}
            alt="Luther"
            className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0"
          />
          <div className="md:ml-8">
            <p className="text-lg mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="px-6 py-2 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;