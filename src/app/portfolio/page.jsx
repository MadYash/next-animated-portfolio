"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Rochester, Kodchasan, Philosopher } from "next/font/google";
const rock = Rochester({ subsets: ["latin"], weight: "400" });
const kodchasan = Kodchasan({ subsets: ["latin"], weight: "400" });
const philospher = Philosopher({ subsets: ["latin"], weight: "400" });
const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "NCR Rugby",
    desc: "The project involved  an interactive events calendar, real-time updates on match scores, and a streamlined registration system for teams and players. Ensured the site is responsive and accessible across various devices, providing a seamless experience for users seeking information on collegiate rugby in the United States.",
    img: "/ncrrugby.png",
    link: "https://www.ncr.rugby/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "UWA MegaMove",
    desc: "This project involved the global conservation of marine megafauna. Key features include a detailed data portal for tracking marine species, interactive maps, and collaborative tools for researchers. The website is designed to be responsive and accessible, facilitating the efforts of marine ecologists worldwide.",
    img: "/megamove.jpg",
    link: "https://megamove.org/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div
          className={`w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center ${rock.className}`}
        >
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white lg:h-full">
                  <h1
                    className={`text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl ${philospher.className}`}
                  >
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p
                    className={`w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] ${kodchasan.className}`}
                  >
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <motion.button
                      className="p-1 text-sm md:p-2 md:text-md lg:p- lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded"
                      whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      See Demo
                    </motion.button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-4 md:gap-8 lg:gap-16 items-center justify-center text-center mt-4 md:mt-8 lg:mt-16">
        <h1 className={`text-3xl md:text-6xl lg:text-8xl mt-12  ${rock.className}`}>
          Do you have a project?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
