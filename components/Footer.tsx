'use client'
import React from "react";
import ecell from "../public/assets/ecell-white-img.png";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { HiUser } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-20 text-gray-300" id="footer">
      <div>
        <a href="https://www.ecellvnit.org/"  target='_blank'><Image className="w-[140px]" src={ecell} alt="" /></a>
        <p className="py-4">
        Ecell VNIT is central India's largest non profit student run organization promoting entrepreneurship skills among students and building a startup ecosystem.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <a href="https://m.facebook.com/vnitecell/" target='_blank' ><FaFacebookSquare size={28} /></a>
          <a href="https://www.instagram.com/ecellvnit/" target='_blank' ><FaInstagram size={28} /></a>
          <a href="https://www.youtube.com/channel/UC0KNOmODhqLcEpcfN9qEsIQ" target='_blank' ><FaYoutube size={28} /></a>
          <a href="https://www.linkedin.com/company/theentrepreneurshipcellvnit/mycompany/" target='_blank' ><FaLinkedin size={28} /></a>
        </div>
      </div>
      <div className="">
        <div className="">
          <h2 className="text-xl font-bold py-4">
            IN CASE OF ANY QUERY CONTACT
          </h2>
          <div className="flex py-2 ">
            <HiUser size={28} />
            <span className="px-4 font-bold ">Ishan Pandey & Abhishek Mishra</span>
          </div>
          <div className="flex py-2 ">
            <BsTelephone size={28} />
            <span className="px-4 font-bold ">+91 6376317859, +91 8329507391</span>
          </div>
          <div className="flex py-2">
            <FiMail size={28} />
            <span className="px-4 font-bold ">contact@ecellvnit.org</span>
          </div>
        </div>
      </div>

      <div className="py-3">
        <p className="py-2">For Association Opportunities Contact:</p>
        <p className="py-1 font-bold">contact@ecellvnit.org</p>
        <p className="py-2">For Sponsorship Opportunities Contact:</p>
        <p className="py-1 font-bold">corporate@ecellvnit.org</p>
        <p className="py-8">&copy;&nbsp;<a href="https://www.ecellvnit.org/"  target='_blank' className="text-[#ff5757]">Ecell VNIT</a> All rights reserved.</p>

      </div>
    </div>
  );
};

export default Footer;
