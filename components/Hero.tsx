"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/assets/ipl.png";
import Navbar from "./Navbar";
function Hero() {
  return (
    <div className="min-h-screen bg-purple-600 bg-[url('/assets/back4.jpg')] bg-blend-luminosity bg-cover bg-origin-border bg-center">
      <div className="h-full bg-black bg-opacity-[0.6]">
        <Navbar />
        <div
          className="w-full h-screen mx-auto p-6 text-center grid grid-rows-4 justify-center items-center gap-6"
          id="home"
        >
          <div className="self-center xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-[1.2rem] py-2 text-[#ffffff] font-extrabold font-bodyFont capitalize">
            Join the bidding frenzy and score your ultimate dream team
          </div>
          <div className="text-center w-full h-fit">
            <Image
              src={logo}
              alt="IPL"
              className="w-96 inline-flex justify-center"
            />
          </div>
          {/* <Typed className="md:text-3xl sm:text-2xl text-xl py-2 font-bold" strings={['60+ Startups Across Sectors', 'Showcasing Their Products', 'On xx March At NIT, Nagpur']} typeSpeed={100} backSpeed={100} loop /> */}

          {/* <p className="text-sm sm:text-xl">Platform for Startups to showcase their innovative products and get connected to India's leading Academia, Investors, Industrialists. </p> */}
          <div className="flex flex-col justify-center row-span-2">
            <p className="text-xl sm:text-2xl py-4 -my-6 font-extrabold font-bodyFont text-white">
              Hurry up!! Create your team and Register
            </p>
            <button
              className="bg-[#f4cb33] w-[200px] rounded-md font-normal my-8 mx-auto py-3 text-black hover:scale-105 duration-200 hover:bg-white hover:text-black"
              style={{ fontSize: "23px" }}
            >
              <a href="#form" className="font-bold font-bodyFont">
                Register Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
