
import React, { useState } from "react";

const testimonials = [
  {
    text: "My mix finally sounds like a real release. Completely night and day.",
    author: "Beat Fortress"
  },
  {
    text: "I have a client drooling over a mix purely from using this approach.",
    author: "Benno"
  },
  {
    text: "Woke up still buzzing that I can do something at this level.",
    author: "Rudo"
  },
  {
    text: "The chord progression analyzer saved me months of trial and error - my songs finally sound rich and professional.",
    author: "Taylor"
  }
];

const SocialProofSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute right-1/3 top-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          What People Like You Are Saying
        </h2>
        
        {/* Featured Video Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center text-pink-500 mb-6">
            "I Made More Progress in 4 Days Than in 5 Years of My Career"
          </h3>
          
          <div className="relative aspect-video bg-gray-900/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gray-800">
            {/* Video Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-pink-500/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Unfiltered Feedback Carousel */}
        <div className="max-w-2xl mx-auto mb-16 relative">
          <h3 className="text-2xl font-bold text-center text-white mb-6">
            Unfiltered Feedback
          </h3>
          
          <div className="relative bg-gray-900/60 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <blockquote className="text-xl text-pink-300 italic mb-4">
              "{testimonials[activeTestimonial].text}"
            </blockquote>
            <p className="text-white font-medium">
              From {testimonials[activeTestimonial].author}
            </p>
            <div className="absolute bottom-4 right-4 text-gray-500">
              {activeTestimonial + 1} of {testimonials.length}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg hover:bg-pink-600 transition-colors"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg hover:bg-pink-600 transition-colors"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Progress Bar */}
          <div className="w-full h-1 bg-gray-700 mt-4 rounded-full overflow-hidden">
            <div 
              className="h-full bg-pink-500"
              style={{ width: `${((activeTestimonial + 1) / testimonials.length) * 100}%` }}
            ></div>
          </div>
        </div>
        
        {/* Success Stories */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Success Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <svg className="w-12 h-12 text-pink-500 mr-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/>
                </svg>
                <h4 className="text-xl font-bold text-white">Oscar reached 900,000+ monthly listeners</h4>
              </div>
              <p className="text-gray-300">in under 12 months</p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <svg className="w-12 h-12 text-pink-500 mr-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/>
                </svg>
                <h4 className="text-xl font-bold text-white">Paul went from 0 to 30,000 monthly listeners</h4>
              </div>
              <p className="text-gray-300">in just 3 months</p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <svg className="w-12 h-12 text-pink-500 mr-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/>
                </svg>
                <h4 className="text-xl font-bold text-white">17 of our students</h4>
              </div>
              <p className="text-gray-300">have secured major label deals</p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <svg className="w-12 h-12 text-pink-500 mr-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/>
                </svg>
                <h4 className="text-xl font-bold text-white">Combined streams from our community</h4>
              </div>
              <p className="text-gray-300">exceed $150M</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
