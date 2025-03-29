import React from "react";

const Experience = ({organuzation,role,duration,text }) => {
  return (
    <div>
      <div className="absolute w-3 h-3 bg-[#C8A26B] rounded-full -left-1"></div>
      <h4 className="text-white text-3xl font-semibold">{organuzation}</h4>
      <p className="text-gray-400 text-2xl">{role}</p>
      <p className="text-gray-500 text-lg mb-4">{duration}</p>
      <p className="text-gray-400 text-lg mb-10">
        {text}
      </p>
    </div>
  );
};

export default Experience;
