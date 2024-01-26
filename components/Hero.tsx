"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/assets/ipl.png";
import Navbar from "./Navbar";
function Hero() {
  return (
    <div className="min-h-screen bg-purple-200 bg-[url('/assets/back4.jpg')] bg-blend-darken bg-cover bg-origin-border bg-center">
      <div className="h-full bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.9)]">
        <Navbar />
        <div
          className="w-full h-screen mx-auto p-6 text-center grid grid-rows-4 lg:justify-center items-center gap-6"
          id="home"
        >
          <div className="lg:pb-10 self-center lg:text-3xl md:text-2xl sm:text-xl text-[1.2rem] py-2 text-[#ffffff] font-extrabold font-bodyFont uppercase tracking-wider">
            Join the bidding frenzy and score your ultimate dream team
          </div>
          <div className="text-center w-full h-fit">
            <Image
              src={logo}
              alt="IPL"
              className="xl:scale-[3.5] lg:scale-[3] md:scale-[2.5] w-96 inline-flex justify-center"
            />
          </div>
          <div className="flex flex-col justify-center row-span-2 gap-10">
            <p className="text-xl sm:text-2xl py-4 -my-6 font-extrabold font-bodyFont text-white">
              Hurry up!! Create your team and Register
            </p>
            <button
              className="bg-[#f4cb33] w-[200px] font-normal my-8 mx-auto py-3 text-black hover:scale-105 duration-200 hover:bg-yellow-500 hover:text-black"
              style={{ fontSize: "23px" }}
            >
              <a href="#register" className="font-bold font-bodyFont">
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
