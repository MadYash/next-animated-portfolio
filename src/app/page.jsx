"use client";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

const Homepage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col h-full lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
          {/* Image Container */}
          <div className="h-1/2 lg:h-full lg:w-1/2 relative">
            <Image
              src={"/hero.png"}
              alt="herosection"
              fill
              className="object-contain"
            />
          </div>
          {/* Text Container */}
          <div
            className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center"
            // className="h-1/2"
          >
            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold">
              Crafting Digital Experiences, Designing Tomorrow
            </h1>
            {/* Description */}
            <p className="md:text-xl">
              {" "}
              Welcome to my digital canvas, where innovation and creativity
              converge. With a keen eye for aesthetics and mastery of code , my
              portfolio showcases a diverse collection of projects that reflects
              my committment to excellence.
            </p>
            {/* Buttons */}
            <div className="flex gap-4 w-full">
              <button className="rounded-lg p-4 ring ring-black bg-black text-white">
                View My Work
              </button>
              <button className="rounded-lg p-4 ring ring-black">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Homepage;
