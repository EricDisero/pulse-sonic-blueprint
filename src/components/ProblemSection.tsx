
import React from "react";

const ProblemSection = () => {
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
          
          {/* Warning box with gradient border and glow - not sticky */}
          <div 
            className="bg-black/60 backdrop-blur-lg border border-red-500 p-6 mb-8 rounded-lg shadow-lg z-20 transition-all duration-300"
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
            <p className="text-2xl font-bold text-white mb-4 transform transition-all duration-500 hover:text-violet-400 hover:-translate-y-1">
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
          
          {/* Founder Clip with glass-effect card - just the text with mini thumb */}
          <div className="glass-effect rounded-lg p-6 mb-12 transform hover:scale-[1.01] transition-all duration-300">
            <figure className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex-shrink-0 animate-pulse-glow"></div>
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
      
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider">
        <svg className="section-divider-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ProblemSection;
