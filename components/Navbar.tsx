"use client"
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import logo from '../public/assets/ipl.png';

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const handelNav = () => {
    setnav(!nav);
  };

  const [color, setcolor] = useState(false);

 

  return (
    <div
      className={
        "sticky top-0 flex justify-items-end items-center text-white px-4 sm:px-40 z-10 bg-[rgba(0,0,0,0.8)] h-14"
          
      }
    >
      <div className="w-full">
      <Image className=' py-10 mt-2 w-[4rem] h-[8rem] z-20' src={logo} alt="/" />     
       </div>
      {/* <h1 className="w-full text-2xl font-bold text-[#ff5757]">Startup-Expo</h1> */}
      <ul className="hidden md:flex">
        <li className="p-3 w-24 hover:underline">
          <a href="#home"> Home</a>
        </li>
        <li className="p-3 w-32  hover:underline">
          <a href="#about">Rule-Book</a>
        </li>
        <li className="p-3 w-24  hover:underline">
          <a href="#timeline">Timeline</a>
        </li>
        <li className="p-3 w-24  hover:underline">
          <a href="#broucher">Brochure</a>
        </li>
        <li className="p-3 w-32  hover:underline">
          <a href="#footer">Contact Us</a>
        </li>
      </ul>

      <div onClick={handelNav} className="block z-20 md:hidden ">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-l border-l-white-900 bg-[#575656] ease-in-out duration-500 z-20"
            : "fixed left-[-100%]"
        }
      >
        {/* <h1 className="px-2 pt-2 w-full text-2xl font-bold text-[#ffffff]">
          Startup-Expo
        </h1> */}
          <div className="w-full">
      <Image className=' py-6 w-[4rem] h-[8rem] z-20' src={logo} alt="/" /> 
       </div>

        <ul className="pt-24">
          <li className="p-4 underline"><a href="#home">Home</a></li>
          <li className="p-4 underline"><a href="#about">Rule-Book</a></li>
          <li className="p-4 underline"><a href="#timeline">Timeline</a></li>
          <li className="p-4 underline"><a href="#broucher">Brochure</a></li>
          <li className="p-4 underline"><a href="#footer">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
