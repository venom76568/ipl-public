"use client";
import React from "react";
import Image from "next/image";
import logo from "../public/assets/ipl.png";
function Hero() {
  return (
    <div className="text-white h-screen bg-center bg-cover bg-no-repeat custom-img  mt-[-55px] section">
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="">
        <div
          className="relative max-w-[800px] mt-0 w-full h-screen mx-auto text-center flex flex-col justify-center"
          id="home"
        >
          <p className="md:text-2xl sm:text-xl text-[1.2rem] py-2 text-[#ffffff] font-extrabold font-bodyFont capitalize">
            Join the bidding frenzy and score your ultimate dream team
          </p>
          <div>
            <Image
              className="w-[250px] mx-auto my-4"
              src={logo}
              alt="CricketPlayer..."
            />
          </div>

          <p className="md:text-4xl sm:text-xl text-[1.2rem] py-2 font-extrabold"></p>
          {/* <Typed className="md:text-3xl sm:text-2xl text-xl py-2 font-bold" strings={['60+ Startups Across Sectors', 'Showcasing Their Products', 'On xx March At NIT, Nagpur']} typeSpeed={100} backSpeed={100} loop /> */}

          {/* <p className="text-sm sm:text-xl">Platform for Startups to showcase their innovative products and get connected to India's leading Academia, Investors, Industrialists. </p> */}
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
  );
}

export default Hero;
