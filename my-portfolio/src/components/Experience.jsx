import React from "react";

const Experience = ({experience}) => {
  return (
    <div className="mb-10">
      <div className="absolute w-3 h-3 bg-[#C8A26B] rounded-full -left-1"></div>
      <h4 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-1">{experience.organization}</h4>
      <p className="text-gray-400 text-md sm:text-lg md:text-xl mb-1text-gray-400 text-2xl">{experience.role}</p>
      <p className="text-gray-500 text-sm sm:text-md md:text-lg mb-2">{experience.duration}</p>
      <p className="text-gray-400 text-sm sm:text-md md:text-lg">
        {experience.text}
      </p>
    </div>
  );
};

export default Experience;
