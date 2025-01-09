"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const text = "Say Hello";
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setErrorMsg(false);
    setSuccessMsg(false);

    const formData = new FormData(form.current);
    const email = formData.get("user_email");
    const message = formData.get("user_message");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_email: email,
          user_message: message,
        }),
      });

      if (response.ok) {
        setSuccessMsg(true);
      } else {
        setErrorMsg(true);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMsg(true);
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[120vh] lg:min-h-screen w-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:items-center">
        {/* Text Container */}
        <div className="h-1/3 lg:h-full lg:w-1/2 flex justify-center items-center text-4xl sm:text-6xl 2xl:text-[10rem] ">
          <div>
            {text.split("").map((letter, inx) => (
              <motion.span
                key={inx}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: inx * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* Form Container */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-2/3  lg:w-1/2 flex flex-col bg-red-50 rounded text-xl lg:gap-8 justify-center p-8 gap-4"
        >
          <span>Dear Yash Dev,</span>
          <label htmlFor="user_message">
            <textarea
              rows={2}
              required
              className="w-full bg-transparent border-b-2 border-b-black outline-none resize-none"
              name="user_message"
              id="user_message"
            />
          </label>
          <span>My mail address is:</span>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 font-semibold text-gray-500 rounded p-4 cursor-pointer">
            Send
          </button>
          {successMsg && (
            <span className="text-green-600 font-semibold">
              Message has been sent successfully!
            </span>
          )}
          {errorMsg && (
            <span className="text-red-600 font-semibold">
              Oops! Something went wrong.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
