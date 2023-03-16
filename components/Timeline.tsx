import React from "react";

const Timeline = () => {
  return (
    <div className="w-full backdrop-blur-lg py-16 text-white custom-img2" id="timeline">
      <div className="">
        <h1 className="text-2xl sm:text-3xl font-extrabold font-bodyFont text-center py-4 ">
          TIMELINE
        </h1>

        <div className="max-w-7xl mx-auto grid grid-cols-9 px-2 py-10">
          <div className="col-span-4 text-right w-full h-full ">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-xl py-2 font-extrabold font-bodyFont">Registrations Opens</h1>
              <p className="text-gray-100 sm:text-sm text-xs font-extrabold font-bodyFont">
                
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-6 h-6 rounded-full bg-[#f4cb33] text-white text-center font-extrabold font-bodyFont">
              1
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-6 h-6 rounded-full bg-[#f4cb33] text-white text-center font-extrabold font-bodyFont">
              2
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-xl py-2 font-extrabold font-bodyFont">Closing of Registrations</h1>
              <p className="text-gray-100 sm:text-sm text-xs font-extrabold font-bodyFont">
            
              </p>
            </div>
          </div>

          <div className="col-span-4 text-right w-full h-full ">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-xl  py-2 font-extrabold font-bodyFont">First Round Elimination</h1>
              <p className="text-gray-100 sm:text-sm text-xs font-extrabold font-bodyFont">
                
              </p>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-6 h-6 rounded-full bg-[#f4cb33] text-white text-center font-extrabold font-bodyFont">
              3
            </div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-white"></div>
            <div className="absolute w-6 h-6 rounded-full bg-[#f4cb33] text-white text-center font-extrabold font-bodyFont">
              4
            </div>
          </div>
          <div className="col-span-4 w-full h-full ">
            <div className="w-full h-full p-2 md:pl-4">
              <h1 className="text-white text-xl py-2 font-extrabold font-bodyFont">Final IPL Auction</h1>
              <p className="text-gray-100 sm:text-sm text-xs font-extrabold font-bodyFont">
               
              </p>
            </div>
          </div>



          
        </div>
      </div>
    </div>
  );
};

export default Timeline;
