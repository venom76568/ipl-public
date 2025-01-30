"use client";

import { motion } from "framer-motion";

export default function Wpl() {
    const marqueeText = "This season, WPL stars join the auction pool—more players, more thrill!";
    const spacer = "\u00A0".repeat(7); // 7 non-breaking spaces
  
    return (
      <main className="h-min overflow-x-hidden bg-[#141414] overflow-y-hidden">
       
        <div className="bg-pink-500/10 border-y border-pink-500/20 py-3 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, index) => (
              <span key={index} className="text-lg md:text-xl font-bold text-pink-500">
                {marqueeText}{spacer}
              </span>
            ))}
          </div>
        </div>
  
        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                Breaking Boundaries: WPL Stars Join the Auction!
              </h1>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
                This season, we&apos;re taking the excitement to the next level! Along with your favorite IPL players, 
we are bringing top WPL stars into the auction pool. Build your ultimate dream team by bidding 
on the best talents from both leagues and experience a whole new level of strategy and thrill!

              </p>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <p className="text-gray-300 text-xl font-semibold mb-8">
                More players, more competition, and more action—Are you ready to bid like a champion?
              </p>
            </motion.div>
  
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="space-x-4 text-pink-500"
            >
              <span className="text-lg hover:text-pink-400 transition-colors cursor-pointer">#IPLMeetsWPL</span>
              <span className="text-lg hover:text-pink-400 transition-colors cursor-pointer">#AuctionFever</span>
             
            </motion.div>
          </div>
        </div>
      </main>
    );
  }
