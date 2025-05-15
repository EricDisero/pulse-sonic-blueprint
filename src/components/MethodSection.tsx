
import React, { useState } from "react";

const MethodSection = () => {
  const [sliderPercentage, setSliderPercentage] = useState(50);
  
  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute left-1/4 bottom-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            How We Do This: <span className="text-pink-500">The Stem-Based Reverse Engineering Method</span>
          </h2>
          
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            I developed this approach after years of frustration with traditional production education. Instead of subjective opinions, we focus on measurable elements that actually make tracks sound professional.
          </p>
          
          {/* Before/After Slider */}
          <div className="mb-16">
            <div className="relative h-64 md:h-96 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-900 to-pink-900 z-0"
                style={{ width: `${sliderPercentage}%` }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                  Before
                </div>
              </div>
              
              <div
                className="absolute inset-y-0 right-0 bg-gradient-to-l from-purple-500 to-pink-500 z-0"
                style={{ width: `${100 - sliderPercentage}%` }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                  After
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-md transition-all">
                  Click to activate
                </button>
              </div>
              
              <div
                className="absolute inset-y-0 z-20 w-1 bg-white cursor-ew-resize"
                style={{ left: `${sliderPercentage}%` }}
                onMouseDown={(e) => {
                  const handleMouseMove = (moveEvent: MouseEvent) => {
                    const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                    if (rect) {
                      const x = moveEvent.clientX - rect.left;
                      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                      setSliderPercentage(percentage);
                    }
                  };
                  
                  const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                  };
                  
                  document.addEventListener("mousemove", handleMouseMove);
                  document.addEventListener("mouseup", handleMouseUp);
                }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Method Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur-sm transform group-hover:scale-105 transition-transform"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-pink-500/30 h-full hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                  <span>Create Your Sound Blueprint</span>
                  <svg className="w-5 h-5 text-pink-500 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We use our Pulse Cascade Splitter to break down professional reference tracks into isolated stems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We measure everything from frequency balance to dynamics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We analyze chord voicings to understand why certain progressions sound more professional</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We compare your current production to these references to identify specific gaps</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur-sm transform group-hover:scale-105 transition-transform"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-pink-500/30 h-full hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                  <span>Engineer Your Sound</span>
                  <svg className="w-5 h-5 text-pink-500 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>With this blueprint as your guide, you'll select the right sounds based on data, not guesswork</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You'll implement professional-grade chord voicings from our analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You'll process each element with purpose, knowing exactly what to aim for</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You'll build the perfect balance between elements through measured decisions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur-sm transform group-hover:scale-105 transition-transform"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-pink-500/30 h-full hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                  <span>Finalize & Create Your System</span>
                  <svg className="w-5 h-5 text-pink-500 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Apply professional-grade mastering techniques at the component level</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Combine all elements while maintaining sonic integrity</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Verify your production against multiple reference tracks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Create a repeatable process that works across all your future productions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
