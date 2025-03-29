import React from "react";
import { assests } from "../assets/assests";
import { motion } from "framer-motion";
import Experience from "./Experience";

function Expertise() {
  return (
    <div>
      {/* Expertise Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto w-full px-4"
      >
        {/* Expertise Header */}
        <div className="flex items-center gap-[3px] mb-10">
          <p className="w-8 md:w-10 h-[1px] bg-white opacity-70"></p>
          <p className="text-[#C8A26B] text-xl uppercase tracking-widest leading-none ps-2">
            Expertise
          </p>
        </div>

        {/* Expertise Content */}
        <h2 className="text-white text-4xl md:text-5xl font-semibold leading-relaxed mb-10">
          Visual Design, Branding Identity, UI Design, Product Design,
          Prototyping, Illustration
        </h2>

        {/* Experience & Education Timeline */}
        <div className="flex flex-col md:flex-row justify-between gap-20">
          <div className="w-full md:w-1/2">
            <h3 className="text-white text-xl mb-10 ms-6 uppercase tracking-widest">
              Experience
            </h3>

            <div className="relative pl-6 border-l border-gray-700">
              <Experience
                organuzation={"Access Bank"}
                role={"Software Engineer"}
                duration={"July 2022 - Present"}
                text={
                  "Built and maintained scalable banking solutions, working on backend systems with Java Spring and Flutter front-end apps. Optimized product delivery by implementing improved workflows."
                }
              />
              <Experience
                organuzation={"Access Bank"}
                role={"Software Engineer"}
                duration={"July 2022 - Present"}
                text={
                  "Built and maintained scalable banking solutions, working on backend systems with Java Spring and Flutter front-end apps. Optimized product delivery by implementing improved workflows."
                }
              />
              <Experience
                organuzation={"Access Bank"}
                role={"Software Engineer"}
                duration={"July 2022 - Present"}
                text={
                  "Built and maintained scalable banking solutions, working on backend systems with Java Spring and Flutter front-end apps. Optimized product delivery by implementing improved workflows."
                }
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-white text-xl mb-10 ms-6 uppercase tracking-widest">
              Education
            </h3>

            <div className="relative pl-6 border-l border-gray-700">
              <div className="absolute w-3 h-3 bg-[#C8A26B] rounded-full -left-1"></div>
              <Experience
                organuzation={"Access Bank"}
                role={"Software Engineer"}
                duration={"July 2022 - Present"}
                text={
                  "Built and maintained scalable banking solutions, working on backend systems with Java Spring and Flutter front-end apps. Optimized product delivery by implementing improved workflows."
                }
              />

              <Experience
                organuzation={"Access Bank"}
                role={"Software Engineer"}
                duration={"July 2022 - Present"}
                text={
                  "Built and maintained scalable banking solutions, working on backend systems with Java Spring and Flutter front-end apps. Optimized product delivery by implementing improved workflows."
                }
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Expertise;
