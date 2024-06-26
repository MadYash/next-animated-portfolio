"use client"
import React, { useEffect } from "react";
import { useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
export function BiographyDesc({ reverseOrder = false }) {
  const [show, setShow] = useState(true);
//   useEffect(()=>{
//     setTimeout(()=>{
//         setShow(false)
//     },3000)
//   },[])
  return (
    <div
      className="box"
    >
      <div className="content relative">
        <RoughNotationGroup show={show}>
          <h3>
            <RoughNotation type="box" color="#bf360c" strokeWidth={5} >
              Software Developer {reverseOrder && "(Reverse Order)"}
            </RoughNotation>
          </h3>
          <p>
          I am a passionate and skilled software developer specializing in web development, with a strong focus on 
          <RoughNotation
              type="highlight"
              color="yellow"
              order={reverseOrder ? 3 : false}
            >
          React.js and Next.js frameworks.
            </RoughNotation>
           Having completed my B.Tech in 2023, I have accumulated two years of professional experience in the tech industry, where I have contributed to numerous web applications and projects that highlight my technical expertise and innovative thinking.
           <br />
           My journey into the world of coding began during my school years, which I completed in 2019. My curiosity and dedication led me to pursue a degree in technology, where I honed my skills in various programming languages and frameworks, ultimately finding my niche in web development. My proficiency in React.js and Next.js has enabled me to build dynamic, responsive, and user-friendly websites, making me a valuable asset to any development team.
           <br />
           Beyond my professional life, I am a passionate 
           <i>
              <RoughNotation
                type="underline"
                color="#bf360c"
                order={reverseOrder ? 2 : false}
              >
           football player.
              </RoughNotation>
            </i>{" "}
            I find joy and balance in the sport, which I play regularly with friends and local teams. My dedication to maintaining a healthy lifestyle is evident in my commitment to 
            <RoughNotation type="circle" color="red" order={reverseOrder? 1: false}>

            going to the gym 
            </RoughNotation>
            daily, where I focus on fitness and overall well-being.
            
          </p>
        </RoughNotationGroup>
      </div>
    </div>
  );
}
