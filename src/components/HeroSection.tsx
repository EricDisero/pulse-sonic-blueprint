
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
            className="absolute bg-pink-500 rounded-full opacity-10 animate-float"
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
          <p className="text-pink-500 font-medium mb-4 animate-fade-in">
            Been stuck on "almost there" mixes for months?
          </p>
          
          {/* Headline - with variable font animation on hover */}
          <h1 className="group">
            <span className="text-4xl md:text-6xl font-bold mb-2 block animate-fade-in transition-all duration-300 group-hover:tracking-tight">
              Transform Your Mixes Into
            </span>
            <span className="text-4xl md:text-6xl font-bold block animate-fade-in transition-all duration-300 group-hover:text-pink-500">
              Label-Ready Tracks
            </span>
            <span className="block text-xl md:text-2xl mt-2 text-gray-300 animate-fade-in">
              (In One Free 30-Minute Session—No Fluff, No Sales Pitch)
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
            The same approach that's helped producers achieve 900,000+ monthly listeners and secure major label deals.
          </p>
          
          {/* Pulsing CTA */}
          <div className="relative group inline-block animate-fade-in">
            <Button className="pulse-cta bg-pink-500 hover:bg-pink-600 text-white text-lg py-6 px-8 rounded-md transition-all duration-300 group-hover:scale-[1.02]">
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
      
      {/* Scroll indicator with smooth fade-out on scroll */}
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
