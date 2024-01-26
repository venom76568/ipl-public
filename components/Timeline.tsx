// import React from "react";

// const Timeline = () => {
//   return (
//     <div className="w-full py-16 text-[#f4cb33] bg-[#000131] bg-[url('/assets/back.jpg')] bg-blend-difference bg-cover bg-center" id="timeline">
//       <div className="">
//         <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold font-bodyFont text-center py-4 ">
//           TIMELINE
//         </h1>

//         <div className="max-w-7xl mx-auto grid grid-cols-9 px-4 py-20">
//           <div className="col-span-4 w-full h-full text-end">
//             <div className="w-full h-full p-2 md:pl-4">
//               <h1 className="text-white text-3xl font-medium py-2">17th March</h1>
//               <p className="text-gray-100 sm:text-lg text-sm">
//                 Registration Opens
//               </p>
//             </div>
//           </div>
//           <div className="relative col-span-1 w-full h-full flex justify-center items-center">
//             <div className="h-full w-1 bg-white"></div>
//             <div className="absolute w-10 h-10 rounded-full bg-[#f4cb33] text-black text-3xl text-center">
//               1
//             </div>
//           </div>
//           <div className="col-span-4 w-full h-full"></div>

//           <div className="col-span-4 w-full h-full"></div>
//           <div className="relative col-span-1 w-full h-full flex justify-center items-center">
//             <div className="h-full w-1 bg-white"></div>
//             <div className="absolute w-10 h-10 rounded-full bg-[#f4cb33] text-black text-3xl text-center">
//               2
//             </div>
//           </div>
//           <div className="col-span-4 w-full h-full">
//             <div className="w-full h-full p-2 md:pl-4">
//               <h1 className="text-white text-3xl font-medium py-2">24th March</h1>
//               <p className="text-gray-100 sm:text-lg text-sm">
//                 Closing of Registrations
//               </p>
//             </div>
//           </div>

//           <div className="col-span-4 w-full h-full text-end">
//             <div className="w-full h-full p-2 md:pl-4">
//               <h1 className="text-white text-3xl font-medium py-2">26th March</h1>
//               <p className="text-gray-100 sm:text-lg text-sm">
//                 Elimination Round
//               </p>
//             </div>
//           </div>
//           <div className="relative col-span-1 w-full h-full flex justify-center items-center">
//             <div className="h-full w-1 bg-white"></div>
//             <div className="absolute w-10 h-10 rounded-full bg-[#f4cb33] text-black text-3xl text-center">
//               3
//             </div>
//           </div>
//           <div className="col-span-4 w-full h-full"></div>

//           <div className="col-span-4 w-full h-full"></div>
//           <div className="relative col-span-1 w-full h-full flex justify-center items-center">
//             <div className="h-full w-1 bg-white"></div>
//             <div className="absolute w-10 h-10 rounded-full bg-[#f4cb33] text-black text-3xl text-center">
//               4
//             </div>
//           </div>
//           <div className="col-span-4 w-full h-full">
//             <div className="w-full h-full p-2 md:pl-4">
//               <h1 className="text-white text-3xl font-medium py-2">1st & 2nd April</h1>
//               <p className="text-gray-100 sm:text-lg text-sm">
//                 Final Round Mega Auction
//               </p>
//             </div>
//           </div>
//         </div>
//       </div >
//     </div >
//   );
// };

// export default Timeline;

import React from "react";
// import "./Register.css";

const TimelineItem = ({ date, title }: { date: string; title: string }) => {
  return (
    <li className="relative text-white">
      <div className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 bg-black w-4 h-4 border-2 border-white rounded-full"></div>
      <div className="ml-6 p-4 border-l border-black">
        <time className="text-sm font-normal leading-none ">{date}</time>
        <h3 className="text-lg font-semibold">{title}</h3>
        {/* <p className="text-base font-normal ">{description}</p> */}
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
          date="January 2024"
          title="Registration Opens"
          // description="Startups will be evaluated on the basis of their market & customer base and their product showcasing capability."
        />
        <TimelineItem
          date="January 2024"
          title="Registration Closes"
          // description="Deadline for the registration of startups for Expo."
        />
        <TimelineItem
          date="February 2024"
          title="Deadline for submission of entries"
          // description="Shortlisted Startups will be signing the MOUs and further details will be communicated."
        />
        <TimelineItem
          date="February 2024"
          title="Result declaration"
          // description="Awaiting Startups to showcase their amazing ideas and products."
        />
      </ol>
    </div>
  );
};

export default Timeline;