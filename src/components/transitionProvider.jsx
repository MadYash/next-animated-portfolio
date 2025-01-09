"use client";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
    const pathName = usePathname()
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName} className="  bg-gradient-to-b from-blue-100 to-red-100 ">
          <div className=" p-4 ">
          <motion.div
            className="h-screen w-screen fixed bg-black z-20 rounded-b-[100px]"
            animate={{ height: "0vh" }}
            exit={{height:"100vh"}}
            transition={{duration:0.6,ease:"easeOut"}}
          />
          <motion.div
            className="fixed m-auto top-0 bottom-0 right-0 left-0 w-fit h-fit z-30 text-white text-8xl cursor-default"
            initial={{opacity:1}}
            animate={{ opacity: 0 }}
            exit={{opacity:0}}
            transition={{duration:0.8,ease:"easeOut"}}
          >
            {pathName.substring(1)}
            </motion.div>
          <motion.div
            className="h-screen w-screen fixed bg-black z-10 bottom-0 rounded-t-[100px]"
            initial={{ height: "100vh" }}
           
            animate={{height:"0vh" ,transition:{delay:0.5}}}
          />
            <Navbar />
          </div>
          <div
          //  className="h-[calc(100vh-6rem)]"
           >{children}</div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default TransitionProvider;
