import React from "react";

const Timeline = () => {
  return (
    <div className="w-full py-16 text-white bg-[#000131] bg-[url('/assets/cool-background.png')] bg-blend-hard-light bg-cover bg-right" id="timeline">
      <div className="">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold font-bodyFont text-center py-4 ">
          TIMELINE
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-9 px-4 py-20">
          <div className="col-span-4 w-full h-full text-end">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-3xl font-medium py-2">17th March</h1>
              <p className="text-gray-100 sm:text-lg text-sm">
                Registration Opens
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-10 h-10 rounded-full bg-[#f4cb33] text-black text-3xl text-center">
              1
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-10 h-10 rounded-full bg-[#f4cb33] text-black text-3xl text-center">
              2
            </div>
          </div>
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-3xl font-medium py-2">24th March</h1>
              <p className="text-gray-100 sm:text-lg text-sm">
                Closing of Registrations
              </p>
            </div>
          </div>

          <div className="col-span-4 w-full h-full text-end">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-3xl font-medium py-2">26th March</h1>
              <p className="text-gray-100 sm:text-lg text-sm">
                Elimination Match
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-10 h-10 rounded-full bg-[#f4cb33] text-black text-3xl text-center">
              3
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-10 h-10 rounded-full bg-[#f4cb33] text-black text-3xl text-center">
              4
            </div>
          </div>
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-3xl font-medium py-2">1st & 2nd April</h1>
              <p className="text-gray-100 sm:text-lg text-sm">
                Final Round Mega Auction
              </p>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Timeline;
