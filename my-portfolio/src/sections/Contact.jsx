import React, { useState } from "react";
import { motion } from "framer-motion";
import { socials } from "../assets/assests";
import ContactModal from "../components/ContactModel"; // Ensure correct import path

function Contact() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
        <section id="contact" className="min-h-screen text-white flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-10"
        >
          <p className="w-10 h-[2px] bg-white opacity-70"></p>
          <p className="text-[#C8A26B] text-xl uppercase tracking-widest font-semibold">
            Get in Touch
          </p>
        </motion.div>

        {/* Intro Text Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-20 leading-snug max-w-7xl"
        >
          I love to hear from you. Whether you have a question or just want to
          chat about mobile development, data science & AI – shoot me a message.
        </motion.h2>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16"
        >
          <div className="flex flex-col gap-2">
            <p className="text-white text-2xl uppercase tracking-widest mb-2">
              Reach Me At
            </p>
            <a href="#" className="text-gray-400 text-2xl hover:text-[#C8A26B] transition duration-300">
              lotannaokeke44@gmail.com
            </a>
            <a href="#" className="text-gray-400 text-2xl hover:text-[#C8A26B] transition duration-300">
              +2348021698338
            </a>
          </div>
          <div className="max-w-lg">
            <p className="text-white text-2xl uppercase tracking-widest mb-4">
              Social
            </p>
            <div className="flex flex-wrap gap-2">
            {socials.map((site, index) => (
                <a
                  key={index}
                  href={site[1]}
                  className="text-gray-400 text-2xl mb-2 hover:text-[#C8A26B] transition duration-300"
                >
                  {site[0]}.
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button Animation */}
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onClick={() => setModalOpen(true)}
            className="px-20 py-4 text-lg font-semibold bg-[#2c2c2d] text-[#C8A26B] rounded-md hover:bg-[#C8A26B] hover:text-black transition duration-300 uppercase"
          >
            Say Hello
          </motion.button>
        </motion.div>
      </div>
    </section>

        <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default Contact;