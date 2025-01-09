"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import NavLinks from "./navlinks";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const socialLinks = [
  { url: "https://github.com/MadYash", src: "/github.png" },
  { url: "/", src: "/dribbble.png" },
  { url: "https://www.instagram.com/yash_madridista_7/", src: "/instagram.png" },
  { url: "/", src: "/facebook.png" },
  { url: "/", src: "/pinterest.png" },
  { url: "https://www.linkedin.com/in/yash-sharma-079a33202", src: "/linkedin.png" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuVariants = {
    closed: { x: "100vw" },
    opened: { x: 0, transition: { when: "beforeChildren", staggerChildren: 0.2 } },
  };

  const menuItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 min-h-16">
      {/* Navigation Links */}
      <div className="hidden md:flex gap-4">
        {links.map((link) => (
          <NavLinks link={link} key={link.title} />
        ))}
      </div>

      {/* Logo */}
      <div className="flex justify-center w-1/3 md:hidden lg:flex">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Yash</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex gap-4">
        {socialLinks.map((item, inx) => (
          <Link href={item.url} target="_blank" key={inx}>
            <Image
              src={item.src}
              alt={`social-${inx}`}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            className={`w-10 h-1 ${
              open ? "bg-white" : "bg-black"
            } relative z-50 rounded origin-left`}
            initial={{ rotate: 0 }}
            animate={open ? { rotate: 45 } : { rotate: 0 }}
          />
          <motion.div
            className={`w-10 h-1 ${
              open ? "bg-white" : "bg-black"
            } relative z-50 rounded origin-left`}
            initial={{ opacity: 1 }}
            animate={open ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.div
            className={`w-10 h-1 ${
              open ? "bg-white" : "bg-black"
            } relative z-50 rounded origin-left`}
            initial={{ rotate: 0 }}
            animate={open ? { rotate: -45 } : { rotate: 0 }}
          />
        </button>

        {/* Menu List */}
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link, inx) => (
              <motion.div variants={menuItemVariants} key={inx}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
