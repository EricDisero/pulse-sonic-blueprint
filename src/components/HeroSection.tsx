
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/95 z-0">
        {/* Pink glow effect */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[100px] opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="text-pink-500 font-medium mb-4 animate-fade-in">
            Been stuck on "almost there" mixes for months?
          </p>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="block">Transform Your Mixes Into</span>
            <span className="block">Label-Ready Tracks</span>
            <span className="block text-xl md:text-2xl mt-2 text-gray-300">
              (In One Free 30-Minute Session—No Fluff, No Sales Pitch)
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
            The same approach that's helped producers achieve 900,000+ monthly listeners and secure major label deals.
          </p>
          
          {/* CTA */}
          <div className="relative group inline-block animate-fade-in">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white text-lg py-6 px-8 rounded-md transition-all duration-300 group-hover:scale-[1.02]">
              CLAIM YOUR 30-MIN ROADMAP
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-pink-500 rounded-md blur-md opacity-30 transition-opacity group-hover:opacity-50"></div>
          </div>
          
          {/* Micro-promise */}
          <p className="mt-4 text-gray-400 animate-fade-in">
            ✓ Walk away with 3 laser-focused mix fixes
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-500 text-sm mb-2">Scroll to learn more</span>
        <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
