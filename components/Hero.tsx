import React from 'react';
import Navbar from './Navbar';

function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.9)] z-10" />
        <img
          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80"
          alt="Cricket Stadium"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen">
        <Navbar />
        <div className="w-full h-screen mx-auto p-6 text-center grid grid-rows-4 lg:justify-center items-center gap-6">
          <div className="lg:pb-10 self-center lg:text-3xl md:text-2xl sm:text-xl text-[1.2rem] py-2 text-[#ffffff] font-extrabold font-bodyFont uppercase tracking-wider">
            Join the bidding frenzy and score your ultimate dream team
          </div>
          
          <div className="text-center w-full h-fit flex flex-col items-center justify-center gap-4">
            <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f4cb33] to-yellow-500 animate-fade-in" style={{ fontFamily: 'Zenty, sans-serif' }}>
              IPL AUCTION
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-white animate-fade-in-delay">
              PRIZES WORTH ₹15K
            </p>
          </div>

          <div className="flex flex-col justify-center row-span-2 gap-10">
            <p className="text-xl sm:text-2xl py-4 -my-6 font-extrabold font-bodyFont text-white">
              Hurry up!! Create your team and Register
            </p>
            <a href="#register" className="font-bold font-bodyFont">
              <button
                className="bg-[#f4cb33] w-[200px] my-8 mx-auto py-3 text-black hover:scale-105 duration-200 hover:bg-yellow-500 hover:text-black"
                style={{ fontSize: "23px" }}
              >
                Register Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;