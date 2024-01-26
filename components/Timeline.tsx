import React from "react";
// import "./Register.css";

const TimelineItem = ({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) => {
  return (
    <li className="relative text-white">
      <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 bg-black w-4 h-4 border-2 border-white rounded-full"></div>
      <div className="ml-6 p-4 border-l border-black">
        <time className="text-sm p-1 font-normal leading-none ">{date}</time>
        <h3 className="text-lg p-1 font-semibold">{title}</h3>
        <p className="text-base p-1 font-normal ">{description}</p>
      </div>
    </li>
  );
};

const Timeline = () => {
  return (
    <div
      id="timeline"
      className="flex-col flex text-[#f4cb33] justify-center items-center bg-[#000131] bg-[url('/assets/back.jpg')] bg-blend-difference bg-cover bg-center"
    >
      <h2 className="w-full text-5xl xl:text-6xl text-center py-10 font-semibold uppercase">
        Timeline
      </h2>
      <ol className="relative p-4 max-w-2xl">
        <TimelineItem
          date="26 January 2024"
          title="Registration Starts"
          description="Registration for the IPL Auction starts."
        />
        <TimelineItem
          date="3 February 2024"
          title="Elimination Round"
          description="The Elimination Round will be conducted on this day. The details will be communicated to the registered teams."
        />
        <TimelineItem
          date="10 February 2024"
          title="Mega Auction"
          description="The details of Mega Auction will be communicated to the qualified teams."
        />
      </ol>
    </div>
  );
};

export default Timeline;
