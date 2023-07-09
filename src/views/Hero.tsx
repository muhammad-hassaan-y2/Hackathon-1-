import React from "react";
import header from "/public/header.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 px-8 py-6">
      {/* Left Div*/}
      <div className="flex-1 ">
        <button
          type="button"
          
          className="py-3 px-6 rounded-lg  text-blue-700  bg-blue-200 saturate-100
           font-bold "
        >
          Sale 70%
        </button>

        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          An Industrial Take
           on <br></br>Streetwear
        </h1>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you{" "}
          
          wear Dine outfits.
        </p>
        <button
          type="button"
          className="text-white 
 bg-zinc-900 py-3.5 px-10 mt-4
  half-rounded"
         >
          Start Shopping 
        </button>
      </div>
      {/* Left Div*/}
      <div className="flex-1 ">

        <Image src={header} alt="header"  />

      </div>
    </section>
  );
};

export default Hero;