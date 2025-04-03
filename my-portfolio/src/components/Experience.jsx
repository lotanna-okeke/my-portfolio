import React from "react";

const Experience = ({experience}) => {
  return (
    <div>
      <div className="absolute w-3 h-3 bg-[#C8A26B] rounded-full -left-1"></div>
      <h4 className="text-white text-3xl font-semibold">{experience.organization}</h4>
      <p className="text-gray-400 text-2xl">{experience.role}</p>
      <p className="text-gray-500 text-lg mb-4">{experience.duration}</p>
      <p className="text-gray-400 text-lg mb-10">
        {experience.text}
      </p>
    </div>
  );
};

export default Experience;
