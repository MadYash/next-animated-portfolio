"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const skillsArr = [
  "HTML",
  "CSS",
  "JavaScript",
  "REACT JS",
  "NEXT JS",
  "TAILWIND CSS",
  "BOOTSTRAP",
  "FRAMER MOTION",
  "REDUX",
  "REDUX TOOLKIT",
];

const AboutPage = () => {
    return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
     
      {/*Container  */}
      <div className=" h-full overflow-scroll">
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-36 lg:gap-48 xl:gap-60">
          {/* Biography Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIO TITLE */}
            <h1 className=" font-bold text-2xl">Biography</h1>
            {/* Biography desc */}
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              quasi quisquam. Exercitationem vel ullam magni commodi sunt minus
              neque facere eos! Saepe doloremque perspiciatis, suscipit impedit
              praesentium iure neque necessitatibus!
            </p>
            {/* Biography Quote */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur{" "}
            </span>
            {/* Bio SIGNATURE */}
            <div className="self-end">
              {/* <Image src={"/signature.png"} alt="signature" fill /> */}
            </div>
            {/* Scroll SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              height="80px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 6V14"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          {/* Skills Container */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKill Title */}
            <h1 className=" font-bold text-2xl">Skills</h1>
            {/* Skill List */}
            <div className="flex flex-wrap gap-4">
              {skillsArr?.map((skill, inx) => {
                return (
                  <div
                    className="bg-black text-white rounded cursor-pointer hover:bg-white hover:text-black p-2 text-sm"
                    key={inx}
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
            {/* scroll svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80px"
              height="80px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 6V14"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {/* Experience Container */}

          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* Experience Title */}
            <h1 className="font-bold text-2xl">Experience</h1>
            {/* Experience List */}
            <div>
              {/* Experience List Item */}
              <div className="flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3">
                  {/* JOB title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Developer
                  </div>
                  {/* JOB Desc */}
                  <div className="p-3 text-sm italic">
                    Worked as a software developer in the field of react js &
                    next js
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
            </div>
          </div>
        </div>
        {/* SVG Container */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
