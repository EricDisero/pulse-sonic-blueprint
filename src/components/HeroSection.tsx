
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 gradient-hero">
      {/* Ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-purple-600 rounded-full opacity-10 animate-float"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 5 + 's'
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-violet-400 font-medium mb-4 animate-fade-in">
            Been stuck on "almost there" mixes for months?
          </p>
          
          {/* Headline with linear gradient - fixed to 2 lines */}
          <h1>
            <span className="text-4xl md:text-6xl font-bold mb-1 block animate-fade-in transition-all duration-300">
              Transform Your Mixes Into
            </span>
            <span className="text-4xl md:text-6xl font-bold block animate-fade-in transition-all duration-300 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent mb-3">
              Label-Ready Tracks
            </span>
            <span className="block text-xl md:text-2xl mt-3 text-gray-300 animate-fade-in">
              (In One Free 30-Minute Session—No Fluff, No Sales Pitch)
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-300 mt-5 mb-8 animate-fade-in">
            The same approach that's helped producers achieve 900,000+ monthly listeners and secure major label deals.
          </p>
          
          {/* Pulsing CTA */}
          <div className="relative group inline-block animate-fade-in">
            <Button className="pulse-cta bg-purple-700 hover:bg-purple-800 text-white text-lg py-6 px-8 rounded-md transition-all duration-300 group-hover:scale-[1.02] shadow-lg">
              CLAIM YOUR 30-MIN ROADMAP
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Micro-promise */}
          <p className="mt-4 text-gray-400 animate-fade-in">
            ✓ Walk away with 3 laser-focused mix fixes
          </p>
        </div>
      </div>
      
      {/* Scroll indicator with smooth fade-out on scroll - centered */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce w-full text-center">
        <span className="text-gray-500 text-sm mb-2">Scroll to learn more</span>
        <svg className="w-6 h-6 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Section divider - fixed for better shape */}
      <div className="absolute bottom-0 left-0 right-0 section-divider">
        <svg className="section-divider-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
