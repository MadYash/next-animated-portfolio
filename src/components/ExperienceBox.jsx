import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const ExperienceBox = () => {
  const expRef = useRef();
  const expRefInView = useInView(expRef);
  return (
    <>
      {/* Experience Container */}

      <div className="flex flex-col gap-12 justify-center pb-48" ref={expRef}>
        {/* Experience Title */}
        <motion.h1
          className="font-bold text-2xl"
          initial={{ x: "-300px" }}
          animate={expRefInView ? { x: "0px" } : {}}
          transition={{delay:0.2}}
        >
          Experience
        </motion.h1>
        {/* Experience List */}
        <motion.div
        initial={{ x: "-300px" }}
        animate={expRefInView ? { x: "0px" } : {}}
        >
          {/* Experience List Item */}
          <div className="flex justify-between h-48 lg:h-60 xl:h-96">
            {/* Left */}
            <div className="w-1/3">
              {/* JOB title */}
              <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                Frontend Developer
              </div>
              {/* JOB Desc */}
              <div className="p-3 text-sm italic hidden lg:block">
                Working as a Frontend Developer in the field of React js having
                strong knowledge in the domain of the HTML, CSS , Javascript,
                React JS, Next JS, Bootstrap, Tailwind, Framer motion and other
                frontend frameworks. Worked on several projects including
                government projects etc etc
              </div>
              {/* Job Date */}
              <div className="p-3 font-semibold text-red-400 text-sm">
                Nov 23 - Present
              </div>
              {/* Company Name */}
              <div className="p-1 text-sm font-semibold rounded bg-white w-fit">
                Mobikasa Pvt Ltd
              </div>
            </div>
            {/* Center */}
            <div className="w-1/6">
              {/* Line */}
              <div className="w-1 h-full relative rounded bg-gray-600">
                {/* Line Circle */}
                <div className="absolute bg-white ring-4 rounded-full ring-red-400 w-5 h-5 -left-2"></div>
              </div>
            </div>
            {/* Right */}
            <div className="w-1/3"></div>
          </div>
          <div className="flex justify-between h-48 lg:h-60 xl:h-96 ">
            {/* Left */}
            <div className="w-1/3"></div>
            {/* Center */}
            <div className="w-1/6">
              {/* Line */}
              <div className="w-1 h-full relative rounded bg-gray-600">
                {/* Line Circle */}
                <div className="absolute bg-white ring-4 rounded-full ring-red-400 w-5 h-5 -left-2"></div>
              </div>
            </div>
            {/* Right */}
            <div className="w-1/3">
              {/* JOB title */}
              <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                Software Developer
              </div>
              {/* JOB Desc */}
              <div className="p-3 text-sm italic hidden lg:block">
                Worked as a software developer in the field of react js & next
                js
              </div>
              {/* Job Date */}
              <div className="p-3 font-semibold text-red-400 text-sm">
                July 22 - Nov 23
              </div>
              {/* Company Name */}
              <div className="p-1 text-sm font-semibold rounded bg-white w-fit">
                Virtual Employee Pvt Ltd
              </div>
            </div>
          </div>
          <div className="flex justify-between h-48 lg:h-60 xl:h-96">
            {/* Left */}
            <div className="w-1/3">
              {/* JOB title */}
              <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                Internship
              </div>
              {/* JOB Desc */}
              <div className="p-3 text-sm italic hidden lg:block">
                Worked as a software developer intern in the field of HTML, CSS,
                JavaScript & bootstrap
              </div>
              {/* Job Date */}
              <div className="p-3 font-semibold text-red-400 text-sm">
                Apr 22 - Jun 22
              </div>
              {/* Company Name */}
              <div className="p-1 text-sm font-semibold rounded bg-white w-fit">
                First Secret Pvt Ltd
              </div>
            </div>
            {/* Center */}
            <div className="w-1/6">
              {/* Line */}
              <div className="w-1 h-full relative rounded bg-gray-600">
                {/* Line Circle */}
                <div className="absolute bg-white ring-4 rounded-full ring-red-400 w-5 h-5 -left-2"></div>
              </div>
            </div>
            {/* Right */}
            <div className="w-1/3"></div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ExperienceBox;
