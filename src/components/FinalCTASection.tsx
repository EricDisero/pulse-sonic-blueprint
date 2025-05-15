
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-pink-900/20"></div>
        {/* Animated glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-[150px] animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Finally See What's Missing in Your Music?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The gap between amateur and professional productions is measurable, not mysterious. With the right guidance, you can bridge that gap much faster than you might think.
          </p>
          
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Your first step is simple: book a free Instant Song Upgrade session. We'll analyze your track, compare it to professional references, and show you exactly what changes will make the biggest difference.
          </p>
          
          <p className="text-xl text-white mb-10">
            No obligation. Just genuine help from someone who's been where you are.
          </p>
          
          {/* CTA Button */}
          <div className="relative group inline-block mb-6">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white text-lg py-8 px-10 rounded-md transition-all duration-300 group-hover:scale-[1.02]">
              BOOK YOUR FREE SONG UPGRADE SESSION
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-pink-500 rounded-md blur-xl opacity-30 transition-opacity group-hover:opacity-50"></div>
          </div>
          
          <p className="text-gray-400">
            Let's take your music to the next level
          </p>
        </div>
      </div>
      
      {/* Exit-Intent Modal - This would be implemented with JavaScript in a real application */}
      <div className="hidden fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-gray-900 border border-pink-500/30 rounded-lg p-8 max-w-2xl mx-4 shadow-2xl shadow-pink-500/10">
          <div className="flex justify-end">
            <button className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-700 mr-4"></div>
            <div>
              <h3 className="text-2xl font-bold text-white">Before you go...</h3>
              <p className="text-pink-500">Don't miss your chance for a free session</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800 p-3 rounded text-sm text-gray-300 italic">
              "The results were immediate and dramatic"
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm text-gray-300 italic">
              "Finally got signed after implementing these changes"
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm text-gray-300 italic">
              "Completely changed how I approach production"
            </div>
            <div className="bg-gray-800 p-3 rounded text-sm text-gray-300 italic">
              "I wish I'd found this years ago"
            </div>
          </div>
          
          <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
            CLAIM YOUR FREE SESSION NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
