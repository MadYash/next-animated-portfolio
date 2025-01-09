"use client";

import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useRouter } from "next/navigation";

const Homepage = () => {
  const { scrollYProgress } = useScroll();
  const router = useRouter();

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Main Content */}
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col  lg:h-full lg:flex-row px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 lg:items-center">
          {/* Image Container */}
          <div className=" lg:w-1/2  mb-12 md:mr-12">
            <Image
              src="/portfolio-dp.jpg"
              alt="Hero section"
              fill
              className="object-cover rounded-lg shadow-lg !static"
              priority
            />
          </div>

          {/* Text Container */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-6 items-center justify-center text-center lg:text-left">
            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Crafting Digital Experiences, Designing Tomorrow
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600">
              Welcome to my digital canvas, where innovation and creativity
              converge. With a keen eye for aesthetics and mastery of code, my
              portfolio showcases a diverse collection of projects that reflect
              my commitment to excellence.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 w-full justify-center lg:justify-start">
              <button
                className="rounded-lg p-4 bg-black text-white hover:bg-gray-800 focus:ring focus:ring-gray-400"
                onClick={() => router.push("/portfolio")}
              >
                View My Work
              </button>
              <button
                className="rounded-lg p-4 bg-white text-black ring ring-black hover:bg-gray-100 focus:ring focus:ring-gray-400"
                onClick={() => router.push("/contact")}
              >
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
