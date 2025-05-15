
import React, { useEffect, useRef } from "react";

const ProblemSection = () => {
  const warningRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const warningEl = warningRef.current;
      if (!warningEl) return;
      
      const rect = warningEl.getBoundingClientRect();
      const parentRect = warningEl.parentElement?.getBoundingClientRect();
      const parentBottom = parentRect ? parentRect.bottom : 0;
      
      // Calculate when the warning should be sticky vs absolute
      if (rect.top <= 100) {
        warningEl.classList.add('fixed', 'top-24', 'max-w-md');
        warningEl.classList.remove('sticky');
      } else if (parentBottom <= rect.height + 100) {
        warningEl.classList.remove('fixed', 'top-24', 'max-w-md');
        warningEl.classList.add('absolute', 'bottom-0');
      } else {
        warningEl.classList.remove('fixed', 'top-24', 'absolute', 'bottom-0', 'max-w-md');
        warningEl.classList.add('sticky');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden gradient-problem section-wave-top">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
            Hey there, fellow producer.
          </p>
          
          <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in">
            <span className="text-gradient">You know the feeling...</span>
          </h2>
          
          <p className="text-gray-300 mb-6 animate-fade-in">
            You've spent countless hours watching tutorials. Your plugin folder is overflowing. You've read all the articles and taken the courses.
          </p>
          
          <p className="text-gray-300 mb-8 animate-fade-in">
            And yet when you compare your tracks to professional releases, something's still missing. The low end isn't as powerful. The vocals don't cut through. The overall sound lacks that polished quality that separates amateur productions from commercial releases.
          </p>
          
          {/* Sticky warning box with gradient border and glow */}
          <div 
            ref={warningRef} 
            className="bg-black/60 backdrop-blur-lg border border-red-500 p-6 mb-8 rounded-lg shadow-lg top-24 z-20 transition-all duration-300"
            style={{
              boxShadow: '0 0 20px rgba(239, 68, 68, 0.2)'
            }}
          >
            <p className="text-xl font-bold text-red-500 mb-2 flex items-center">
              <span className="inline-block mr-2 animate-pulse-glow">❗</span>WARNING:
            </p>
            <p className="text-white">
              Without objective data, you'll spend years guessing what's wrong with your mixes instead of knowing exactly what to fix.
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Animated typographic elements */}
            <p className="text-2xl font-bold text-white mb-4 transform transition-all duration-500 hover:text-pink-500 hover:-translate-y-1">
              The most frustrating part?
            </p>
            
            <p className="text-gray-300 mb-8">
              <span className="animate-fade-in inline-block" style={{animationDelay: '0ms'}}>You </span>
              <span className="animate-fade-in inline-block" style={{animationDelay: '50ms'}}>can't </span>
              <span className="animate-fade-in inline-block" style={{animationDelay: '100ms'}}>even </span>
              <span className="animate-fade-in inline-block" style={{animationDelay: '150ms'}}>identify </span>
              <span className="animate-fade-in inline-block" style={{animationDelay: '200ms'}}>exactly </span>
              <span className="animate-fade-in inline-block" style={{animationDelay: '250ms'}}>what's </span>
              <span className="animate-fade-in inline-block" style={{animationDelay: '300ms'}}>wrong </span>
              <span className="animate-fade-in inline-block" style={{animationDelay: '350ms'}}>– </span>
              <span className="animate-fade-in inline-block" style={{animationDelay: '400ms'}}>let </span>
              <span className="animate-fade-in inline-block" style={{animationDelay: '450ms'}}>alone </span>
              <span className="animate-fade-in inline-block" style={{animationDelay: '500ms'}}>how </span>
              <span className="animate-fade-in inline-block" style={{animationDelay: '550ms'}}>to </span>
              <span className="animate-fade-in inline-block" style={{animationDelay: '600ms'}}>fix </span>
              <span className="animate-fade-in inline-block" style={{animationDelay: '650ms'}}>it.</span>
            </p>
            
            <p className="text-gray-300 mb-12">
              Meanwhile, months turn into years as your music stays stuck at that "almost there" level.
            </p>
          </div>
          
          {/* Founder Clip with glass-effect card */}
          <div className="glass-effect rounded-lg p-6 mb-12 transform hover:scale-[1.01] transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-pink-500">[15-SECOND FOUNDER CLIP]</span>
            </h3>
            <figure className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex-shrink-0 animate-pulse-glow"></div>
              <blockquote className="italic text-gray-300">
                "I spent years stuck in this cycle. The most painful part? Knowing your music has potential but hearing that gap between your tracks and professional releases and not knowing how to bridge it."
              </blockquote>
            </figure>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-6 animate-fade-in">
            I've been exactly where you are.
          </h2>
          
          <p className="text-gray-300 mb-6">
            I'm Eric, and a few years ago I was caught in the same cycle of tutorials and endless tweaking. That's when I realized the problem wasn't lack of information – it was lack of objective measurement.
          </p>
          
          <p className="text-gray-300 mb-6">
            What if you could see exactly how professional tracks are constructed, all the way down to the individual stems? What if you could analyze the precise mix balance and sonic characteristics that make hit records sound the way they do?
          </p>
          
          <p className="text-gray-300 mb-6">
            That's what we've created at Pulse Academy. Using specialized AI tools, we break down professional tracks into their core components, measure them objectively, and show you precisely how to apply these findings to your music.
          </p>
          
          <p className="text-xl font-bold text-white mb-8">
            No more guesswork. No more trial and error. Just clear, measurable paths to professional-quality productions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
