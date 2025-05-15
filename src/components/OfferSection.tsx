
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            Let's See If We Can Help You: <span className="text-pink-500">The Instant Song Upgrade Session</span>
          </h2>
          
          <p className="text-center text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Instead of asking you to commit right away, I'd like to offer you a free session to experience our approach firsthand.
          </p>
          
          {/* What We'll Do Together */}
          <div className="bg-gradient-to-br from-gray-900 to-black border border-pink-500/30 rounded-lg p-8 mb-12 shadow-xl shadow-pink-500/5">
            <h3 className="text-2xl font-bold text-white mb-6">
              Here's what we'll do together:
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  Run your track through our Pulse Cascade Splitter
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  Do the same with a professional reference track of your choice
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  Show you exactly what's different between them
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  Give you specific, actionable steps to improve your production
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  Provide you with the separated stems from your reference track to study (worth $97)
                </span>
              </li>
            </ul>
            
            <p className="mt-6 text-gray-300">
              Even if we never work together beyond this session, you'll walk away with a clear understanding of what's holding your productions back and specific steps to improve.
            </p>
          </div>
          
          {/* Friction Remover */}
          <div className="text-center mb-10">
            <p className="text-xl font-bold text-white mb-2">
              No sales pitch. No pressure. No catch.
            </p>
            <p className="text-gray-300">
              Just genuine insights you can apply immediately.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="text-center">
            <div className="relative group inline-block">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white text-lg py-6 px-8 rounded-md transition-all duration-300 group-hover:scale-[1.02]">
                BOOK YOUR FREE SONG UPGRADE SESSION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-pink-500 rounded-md blur-md opacity-30 transition-opacity group-hover:opacity-50"></div>
            </div>
            <p className="mt-2 text-gray-400">
              Only <span className="text-pink-500">7 spots</span> left this week
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
