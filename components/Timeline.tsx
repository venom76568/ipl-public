"use client";

import React from "react";
import { Calendar, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";

const TimelineItem = ({
  date,
  title,
  description,
  icon: Icon,
}: {
  date: string;
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group"
    >
      <div className="flex items-start gap-6 group-hover:scale-[1.02] transition-transform overflow-y-hidden">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f4cb33] text-black shadow-lg z-10"
        >
          <Icon className="h-6 w-6" />
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="absolute h-[calc(100%+2rem)] w-px bg-gradient-to-b from-[#f4cb33] to-transparent left-1/2 top-full origin-top"
          />
        </motion.div>
        <div className="flex flex-col gap-2.5 pb-10">
          <motion.time
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-[#f4cb33]"
          >
            {date}
          </motion.time>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-white group-hover:text-[#f4cb33] transition-colors"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-gray-300 text-sm md:text-base max-w-[30rem]"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.3 }}
            className="absolute w-3 h-3 bg-[#f4cb33] rounded-full -left-[5.5px] top-1/2 transform -translate-y-1/2 group-hover:scale-150 transition-transform"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <div id="timeline" className="relative min-h-screen bg-[#141414] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-center text-white mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#f4cb33] to-yellow-500"
        >
          Event Timeline
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-[#f4cb33] to-transparent origin-top"
          />
          <div className="space-y-12">
            <TimelineItem
              icon={Calendar}
              date="23 January 2025"
              title="Registration Starts"
              description="Registration for the IPL Auction starts. Don't miss your chance to be part of this exciting event!"
            />
            <TimelineItem
              icon={Users}
              date="2 February 2025"
              title="Elimination Round"
              description="The Elimination Round will be conducted on this day. The details will be communicated to the registered teams."
            />
            <TimelineItem
              icon={Trophy}
              date="8 February 2025"
              title="Mega Auction"
              description="The details of Mega Auction will be communicated to the qualified teams. Get ready for the main event!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;