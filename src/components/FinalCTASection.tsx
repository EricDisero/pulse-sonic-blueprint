
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="relative py-20 overflow-hidden gradient-final">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in">
            Ready to Finally See What's Missing in Your Music?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            The gap between amateur and professional productions is measurable, not mysterious. With the right guidance, you can bridge that gap much faster than you might think.
          </p>
          
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">
            Your first step is simple: book a free Instant Song Upgrade session. We'll analyze your track, compare it to professional references, and show you exactly what changes will make the biggest difference.
          </p>
          
          <p className="text-xl text-white mb-10 animate-fade-in">
            No obligation. Just genuine help from someone who's been where you are.
          </p>
          
          {/* Orbital CTA Button */}
          <div className="relative group inline-block mb-6 animate-fade-in">
            <Button className="orbital-button bg-pink-500 hover:bg-pink-600 text-white text-lg py-8 px-10 rounded-md transition-all duration-300 group-hover:scale-[1.02] relative z-10">
              BOOK YOUR FREE SONG UPGRADE SESSION
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-gray-400 animate-fade-in">
            Let's take your music to the next level
          </p>
        </div>
      </div>
      
      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-pink-500 rounded-full opacity-5 animate-float"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 5 + 's'
            }}
          />
        ))}
      </div>
      
      {/* Exit-Intent Modal - This would be implemented with JavaScript in a real application */}
      <div className="hidden fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="glass-effect p-8 max-w-2xl mx-4 shadow-2xl shadow-pink-500/10 relative animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-lg"></div>
          <div className="relative">
            <div className="flex justify-end">
              <button className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 mr-4 animate-pulse-glow"></div>
              <div>
                <h3 className="text-2xl font-bold text-white">Before you go...</h3>
                <p className="text-pink-500">Don't miss your chance for a free session</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="glass-effect p-3 rounded text-sm text-gray-300 italic hover:scale-105 transition-transform">
                "The results were immediate and dramatic"
              </div>
              <div className="glass-effect p-3 rounded text-sm text-gray-300 italic hover:scale-105 transition-transform">
                "Finally got signed after implementing these changes"
              </div>
              <div className="glass-effect p-3 rounded text-sm text-gray-300 italic hover:scale-105 transition-transform">
                "Completely changed how I approach production"
              </div>
              <div className="glass-effect p-3 rounded text-sm text-gray-300 italic hover:scale-105 transition-transform">
                "I wish I'd found this years ago"
              </div>
            </div>
            
            <Button className="orbital-button w-full bg-pink-500 hover:bg-pink-600 text-white py-6 relative z-10">
              CLAIM YOUR FREE SESSION NOW
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
