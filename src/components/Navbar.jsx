"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLinks from "./navlinks";
import { motion } from "framer-motion";

const links = [
  {
    url: "/",
    title: "Home",
  },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariant = {
    opened:{
        rotate:45,
        backgroundColor:"rgb(255,255,255)",
    },
    closed:{
        rotate:0
    },
  }
  const middleVariant = {
    opened:{
        opacity:0
    },
    closed:{
        opacity:1
    },
  }
  const lastVariant = {
    opened:{
        rotate:-45,
        backgroundColor: "rgb(255,255,255)",
    },
    closed:{
        rotate:0
    },
  }
const listVariants = {
    closed :{
        x:"100vw"
    },
    opened:{
        x:0,
        transition:{
            when:"beforeChildren",
            staggerChildren:0.2,
        }
    }
}

const listItemVariants = {
    closed:{
        x:-10,
        opacity:0,
    },
    opened:{
    x:0,
    opacity:1
    }
}
  return (
    <>
      <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* Menu for large screens */}
        <div className="hidden md:flex gap-4 w-1/3">
          {links?.map((link, inx) => (
            <NavLinks link={link} key={inx} />
          ))}
        </div>
        {/* Logo  */}
        {/* Only visible to small screen & large screen*/}
        <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center ">
          <Link
            href={"/"}
            className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          >
            <span className="text-white mr-1">Yash</span>
            <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
              .dev
            </span>
          </Link>
        </div>
        {/* Social Links */}
        <div className="hidden md:flex gap-2 w-1/3">
          <Link href={"/"}>
            <Image src="/github.png" alt="github" width={24} height={24} />
          </Link>
          <Link href={"/"}>
            <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          </Link>
          <Link href={"/"}>
            <Image
              src="/instagram.png"
              alt="instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link href={"/"}>
            <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
          </Link>
          <Link href={"/"}>
            <Image src="/dribbble.png" alt="dribbble" width={24} height={24} />
          </Link>
          <Link href={"/"}>
            <Image
              src="/pinterest.png"
              alt="pinterest"
              width={24}
              height={24}
            />
          </Link>
        </div>
        {/* Responsive Menu for mobile */}
        <div className="md:hidden">
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen(!open)}
          >
            <motion.div variants={topVariant} animate={open?"opened":"closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
            <motion.div variants={middleVariant} animate={open?"opened":"closed"} className="w-10 h-1 bg-black rounded"></motion.div>
            <motion.div variants={lastVariant} animate={open?"opened":"closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          </button>
        </div>

        {/* Menu list */}
        {open && (
          <motion.div variants={listVariants} initial={"closed"} animate={"opened"}  className="absolute left-0 top-0 flex justify-center items-center w-full h-full bg-black text-white text-xl flex-col gap-8 z-10">
            {links.map((link, inx) => {
              return (
                <motion.div variants={listItemVariants}  key={inx}>

                <Link href={link.url} >
                  {link.title}
                </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Navbar;
