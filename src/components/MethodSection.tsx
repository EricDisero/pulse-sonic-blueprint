
import React, { useState, useRef, useEffect } from "react";

const MethodSection = () => {
  const [sliderPercentage, setSliderPercentage] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  // Handle the slider drag interactions
  const handleSliderInteraction = (clientX: number) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (rect) {
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPercentage(percentage);
    }
  };
  
  // Handle scroll animations for steps
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          // Shift background gradient
          document.querySelector('.method-section')?.classList.add('animate-gradient-shift');
        }
      });
    }, { threshold: 0.3 });
    
    stepsRef.current.forEach(step => {
      if (step) observer.observe(step);
    });
    
    return () => {
      stepsRef.current.forEach(step => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <section id="how-it-works" className="method-section relative py-20 overflow-hidden gradient-method">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-8 animate-fade-in">
            How We Do This: <span className="text-gradient">The Stem-Based Reverse Engineering Method</span>
          </h2>
          
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto animate-fade-in">
            I developed this approach after years of frustration with traditional production education. Instead of subjective opinions, we focus on measurable elements that actually make tracks sound professional.
          </p>
          
          {/* Before/After Slider with speaker icon handle */}
          <div className="mb-16">
            <div 
              ref={sliderRef}
              className="relative h-64 md:h-96 bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-ew-resize"
              onMouseDown={(e) => {
                handleSliderInteraction(e.clientX);
                
                const handleMouseMove = (moveEvent: MouseEvent) => {
                  handleSliderInteraction(moveEvent.clientX);
                };
                
                const handleMouseUp = () => {
                  document.removeEventListener("mousemove", handleMouseMove);
                  document.removeEventListener("mouseup", handleMouseUp);
                };
                
                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
              }}
              onTouchStart={(e) => {
                handleSliderInteraction(e.touches[0].clientX);
                
                const handleTouchMove = (moveEvent: TouchEvent) => {
                  handleSliderInteraction(moveEvent.touches[0].clientX);
                };
                
                const handleTouchEnd = () => {
                  document.removeEventListener("touchmove", handleTouchMove);
                  document.removeEventListener("touchend", handleTouchEnd);
                };
                
                document.addEventListener("touchmove", handleTouchMove);
                document.addEventListener("touchend", handleTouchEnd);
              }}
            >
              {/* Before side */}
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-900 to-pink-900/50 z-0 transition-all duration-300"
                style={{ width: `${sliderPercentage}%` }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                  <span className="bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">Before</span>
                </div>
              </div>
              
              {/* After side */}
              <div
                className="absolute inset-y-0 right-0 bg-gradient-to-l from-purple-500 to-pink-500 z-0 transition-all duration-300"
                style={{ width: `${100 - sliderPercentage}%` }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                  <span className="bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">After</span>
                </div>
              </div>
              
              {/* Inactive overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-30 bg-black/50 backdrop-blur-sm">
                  <button 
                    className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-md transition-all hover:scale-105"
                    onClick={() => setIsPlaying(true)}
                  >
                    Click to activate
                  </button>
                </div>
              )}
              
              {/* Slider divider with speaker icon */}
              <div
                className="absolute inset-y-0 z-20 w-1 bg-white cursor-ew-resize transition-all duration-300"
                style={{ left: `${sliderPercentage}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 glass-effect rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15.536 8.464a5 5 0 010 7.072M12 18a6 6 0 01-6-6 6 6 0 1112 0 6 6 0 01-6 6z"
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2}
                      d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" 
                    />
                  </svg>
                </div>
                
                {/* Gradient track line */}
                <div className="absolute inset-0 w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-pink-500 animate-pulse-glow"></div>
              </div>
            </div>
          </div>
          
          {/* Method Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div 
              ref={el => stepsRef.current[0] = el} 
              className="relative group opacity-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur-sm transform group-hover:scale-105 transition-transform"></div>
              <div className="relative glass-effect p-6 rounded-lg border border-pink-500/30 h-full hover:-translate-y-1 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4 animate-pulse-glow group-hover:animate-none">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center group-hover:text-pink-500 transition-colors">
                  <span>Create Your Sound Blueprint</span>
                  <svg className="w-5 h-5 text-pink-500 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We use our Pulse Cascade Splitter to break down professional reference tracks into isolated stems</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We measure everything from frequency balance to dynamics</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We analyze chord voicings to understand why certain progressions sound more professional</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We compare your current production to these references to identify specific gaps</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 2 */}
            <div 
              ref={el => stepsRef.current[1] = el}
              className="relative group opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur-sm transform group-hover:scale-105 transition-transform"></div>
              <div className="relative glass-effect p-6 rounded-lg border border-pink-500/30 h-full hover:-translate-y-1 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4 animate-pulse-glow group-hover:animate-none">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center group-hover:text-pink-500 transition-colors">
                  <span>Engineer Your Sound</span>
                  <svg className="w-5 h-5 text-pink-500 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>With this blueprint as your guide, you'll select the right sounds based on data, not guesswork</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You'll implement professional-grade chord voicings from our analysis</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You'll process each element with purpose, knowing exactly what to aim for</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You'll build the perfect balance between elements through measured decisions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 3 */}
            <div 
              ref={el => stepsRef.current[2] = el}
              className="relative group opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg blur-sm transform group-hover:scale-105 transition-transform"></div>
              <div className="relative glass-effect p-6 rounded-lg border border-pink-500/30 h-full hover:-translate-y-1 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4 animate-pulse-glow group-hover:animate-none">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center group-hover:text-pink-500 transition-colors">
                  <span>Finalize & Create Your System</span>
                  <svg className="w-5 h-5 text-pink-500 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Apply professional-grade mastering techniques at the component level</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Combine all elements while maintaining sonic integrity</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-pink-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Verify your production against multiple reference tracks</span>
                  </li>
                  <li className="flex items-start hover-scale">
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
