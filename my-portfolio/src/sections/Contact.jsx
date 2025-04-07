import React, { useState } from "react";
import { motion } from "framer-motion";
import { socials } from "../assets/assests";
import ContactModal from "../components/ContactModel"; // Ensure correct import path

function Contact() {
  const [isModalOpen, setModalOpen] = useState(false);

  // Function to copy phone number to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Phone number copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen text-white flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-8 sm:mb-10"
          >
            <p className="w-10 h-[2px] bg-white opacity-70"></p>
            <p className="text-[#C8A26B] text-base sm:text-lg md:text-xl uppercase tracking-widest font-semibold">
              Get in Touch
            </p>
          </motion.div>

          {/* Intro Text */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 sm:mb-20 leading-snug max-w-4xl"
          >
            I love to hear from you. Whether you have a question or just want to
            chat about mobile development, data science & AI – shoot me a
            message.
          </motion.h2>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col md:flex-row justify-between items-start gap-10 sm:gap-12 md:gap-16"
          >
            {/* Contact Details */}
            <div className="flex flex-col gap-2">
              <p className="text-white text-lg sm:text-xl md:text-2xl uppercase tracking-widest mb-2">
                Reach Me At
              </p>
              <p
                onClick={() => setModalOpen(true)}
                className="text-gray-400 text-lg sm:text-xl md:text-2xl hover:text-[#C8A26B] transition duration-300 cursor-pointer"
              >
                lotannaokeke44@gmail.com
              </p>
              <p
                onClick={() => copyToClipboard("+2348021698338")}
                className="text-gray-400 text-lg sm:text-xl md:text-2xl hover:text-[#C8A26B] transition duration-300 cursor-pointer"
              >
                +2348021698338
              </p>
            </div>

            {/* Social Links */}
            <div className="max-w-lg">
              <p className="text-white text-lg sm:text-xl md:text-2xl uppercase tracking-widest mb-4">
                Social
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((site, index) => (
                  <a
                    key={index}
                    href={site[1]}
                    className="text-gray-400 text-lg sm:text-xl md:text-2xl hover:text-[#C8A26B] transition duration-300"
                  >
                    {site[0]}.
                  </a>
                ))}
              </div>
            </div>

            {/* Call To Action */}
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-[#2c2c2d] text-[#C8A26B] rounded-md hover:bg-[#C8A26B] hover:text-black transition duration-300 uppercase"
            >
              Say Hello
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default Contact;
