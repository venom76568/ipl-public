import React from "react";
import Home from "../public/assets/auction.png";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div className="w-full bg-[#000131] py-16 px-4 section " id="about">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <Image
          className="w-[400px] h-[400px] mx-auto my-6"
          src={Home}
          alt="CricketPlayer..."
        />

        <div className="flex flex-col justify-center">
          <p className="text-[#f4cb33] text-xl font-extrabold font-bodyFont">
            ABOUT IPL Auction
          </p>
          <h1 className="md:text-4xl sm:3xl text-2xl font-extrabold font-bodyFont py-4 text-white">
            Unleash the thrill of the game, bid for your champions at the IPL
            auction.
          </h1>
          <p className="text-white">
            THE IPL Auction- where every bids count and every player has a
            chance to shine”is an event of Entrepreneurship Cell, VNITNagpur
            which provides the platform for participants to witness the magic of
            cricket as the best players in the world battle it out in the
            auction block. It allows participants to use their cricketing minds
            in order to build the strongest team possible. At the IPL Auction,
            the excitement is palpable as team leaders and cricket enthusiasts
            use analytical skills like prediction, budget management, and many
            more to build a ‘dream team’.
          </p>
          <Link href='./Int.pdf' download><button className="text-black w-[200px] rounded-md font-medium my-8 mx-auto md:mx-0 py-3 bg-[#f4cb33] hover:scale-105 hover:text-white duration-200">Rule Book</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
