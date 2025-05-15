
import React from "react";

const ProblemSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute left-0 top-1/3 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute right-0 bottom-1/3 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-300 mb-8">
            Hey there, fellow producer.
          </p>
          
          <h2 className="text-3xl font-bold text-white mb-6">
            <span className="text-pink-500">You know the feeling...</span>
          </h2>
          
          <p className="text-gray-300 mb-6">
            You've spent countless hours watching tutorials. Your plugin folder is overflowing. You've read all the articles and taken the courses.
          </p>
          
          <p className="text-gray-300 mb-8">
            And yet when you compare your tracks to professional releases, something's still missing. The low end isn't as powerful. The vocals don't cut through. The overall sound lacks that polished quality that separates amateur productions from commercial releases.
          </p>
          
          {/* Sticky warning box */}
          <div className="sticky top-24 bg-black/60 backdrop-blur-lg border border-red-500 p-6 mb-8 rounded-lg shadow-lg">
            <p className="text-xl font-bold text-red-500 mb-2">❗ WARNING:</p>
            <p className="text-white">
              Without objective data, you'll spend years guessing what's wrong with your mixes instead of knowing exactly what to fix.
            </p>
          </div>
          
          <p className="text-2xl font-bold text-white mb-4">
            The most frustrating part?
          </p>
          
          <p className="text-gray-300 mb-8">
            You can't even identify exactly what's wrong – let alone how to fix it. Without a clear direction, you're left guessing, making random changes based on conflicting advice, and hoping something works.
          </p>
          
          <p className="text-gray-300 mb-12">
            Meanwhile, months turn into years as your music stays stuck at that "almost there" level.
          </p>
          
          {/* Founder Clip */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-12">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-pink-500">[15-SECOND FOUNDER CLIP]</span>
            </h3>
            <figure className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-pink-500 flex-shrink-0"></div>
              <blockquote className="italic text-gray-300">
                "I spent years stuck in this cycle. The most painful part? Knowing your music has potential but hearing that gap between your tracks and professional releases and not knowing how to bridge it."
              </blockquote>
            </figure>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-6">
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
