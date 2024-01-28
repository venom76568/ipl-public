import React from "react";
import Home from "../public/assets/auction.png";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <div className="w-full bg-[#141414] py-16 px-10" id="about">
      <div className="max-w-[1240px] mx-auto grid md:gap-3 md:grid-cols-2 ">
        <Image
          className="w-[400px] lg:h-[400px] my-6 lg:mr-6"
          src={Home}
          alt="CricketPlayer..."
        />

        <div className="flex flex-col justify-center gap-2">
          <p className="text-[#f4cb33] xl:text-5xl lg:text-4xl text-3xl font-extrabold font-bodyFont uppercase">
            About ipl auction
          </p>
          <h1 className="xl:text-3xl sm:text-xl text-lg font-extrabold font-bodyFont py-4 text-white">
            Unleash the thrill of the game, bid for your champions at the IPL
            auction.
          </h1>
          <p className="text-white text-lg">
            The IPL Auction, where every bids count and every player has a
            chance to shine is an event of Entrepreneurship Cell, VNIT Nagpur
            which provides the platform for participants to witness the magic of
            cricket as the best players in the world battle it out in the
            auction block. It allows participants to use their cricketing minds
            in order to build the strongest team possible. At the IPL Auction,
            the excitement is palpable as team leaders and cricket enthusiasts
            use analytical skills like prediction, budget management, and many
            more to build a dream team.
          </p>
          <div className="flex flex-col lg:flex-row mt-10 md:mt-0 gap-4 lg:gap-10">
            <Link
              href="https://drive.google.com/file/d/1ZFK9u-IkXqeVDie1GYisBBOe3kZNmWxq/view?usp=sharing"
              target="_blank"
            >
              <button className="text-black w-full lg:w-[200px] font-medium my-2 md:my-4 lg:my-8 mx-auto md:mx-0 py-3 bg-[#f4cb33] lg:hover:scale-105 hover:bg-yellow-500 duration-200 text-xl">
                Brochure
              </button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1VFw09Blow9Sg2D0fT4C5eKo7smuw2HOK/view?usp=sharing"
              target="_blank"
            >
              <button className="text-black w-full lg:w-[200px] font-medium my-2 md:my-4 lg:my-8 mx-auto md:mx-0 py-3 bg-[#f4cb33] lg:hover:scale-105 hover:bg-yellow-500 duration-200 text-xl">
                Rule Book
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
