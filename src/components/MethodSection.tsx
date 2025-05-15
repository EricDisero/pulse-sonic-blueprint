
import React, { useState, useRef, useEffect } from "react";

const MethodSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  
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
          <h2 className="text-4xl font-bold text-center text-white mb-3 animate-fade-in">
            How We Do This: 
          </h2>
          <h3 className="text-3xl font-bold text-center text-gradient mb-8 animate-fade-in">
            The Stem-Based Reverse Engineering Method
          </h3>
          
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto animate-fade-in">
            I developed this approach after years of frustration with traditional production education. Instead of subjective opinions, we focus on measurable elements that actually make tracks sound professional.
          </p>
          
          {/* Audio widgets */}
          <div className="mb-16 space-y-8">
            <div className="audio-widget">
              <div className="audio-toggle-container">
                <div className="audio-box">
                  <button className="play-btn">
                    <svg className="playIcon" viewBox="0 0 20 20" fill="currentColor">
                      <polygon points="5,3 15,10 5,17"></polygon>
                    </svg>
                    <svg className="pauseIcon" viewBox="0 0 20 20" fill="currentColor" style={{display: 'none'}}>
                      <rect x="4" y="3" width="4" height="14"></rect>
                      <rect x="12" y="3" width="4" height="14"></rect>
                    </svg>
                  </button>
                  <div className="audio-text">
                    <span className="trackTitle">Alissa Track</span>
                    <span className="trackSubtitle">Before AI Tone Tracing</span>
                  </div>
                  <div className="toggle-switch"></div>
                </div>
              </div>
            </div>
            
            <div className="audio-widget">
              <div className="audio-toggle-container">
                <div className="audio-box">
                  <button className="play-btn">
                    <svg className="playIcon" viewBox="0 0 20 20" fill="currentColor">
                      <polygon points="5,3 15,10 5,17"></polygon>
                    </svg>
                    <svg className="pauseIcon" viewBox="0 0 20 20" fill="currentColor" style={{display: 'none'}}>
                      <rect x="4" y="3" width="4" height="14"></rect>
                      <rect x="12" y="3" width="4" height="14"></rect>
                    </svg>
                  </button>
                  <div className="audio-text">
                    <span className="trackTitle">Paul Track</span>
                    <span className="trackSubtitle">Before AI Tone Tracing</span>
                  </div>
                  <div className="toggle-switch"></div>
                </div>
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-violet-900/20 rounded-lg blur-sm transform group-hover:scale-105 transition-transform"></div>
              <div className="relative glass-effect p-6 rounded-lg h-full hover:-translate-y-1 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-800 to-violet-700 flex items-center justify-center mb-4 animate-pulse-glow group-hover:animate-none">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center group-hover:text-violet-400 transition-colors">
                  <span>Create Your Sound Blueprint</span>
                  <svg className="w-5 h-5 text-violet-500 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-neon-yellow mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We use our Pulse Cascade Splitter to break down professional reference tracks into isolated stems</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-neon-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We measure everything from frequency balance to dynamics</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-neon-yellow mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We analyze chord voicings to understand why certain progressions sound more professional</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-neon-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-violet-900/20 rounded-lg blur-sm transform group-hover:scale-105 transition-transform"></div>
              <div className="relative glass-effect p-6 rounded-lg h-full hover:-translate-y-1 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-800 to-violet-700 flex items-center justify-center mb-4 animate-pulse-glow group-hover:animate-none">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center group-hover:text-violet-400 transition-colors">
                  <span>Engineer Your Sound</span>
                  <svg className="w-5 h-5 text-violet-500 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-neon-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>With this blueprint as your guide, you'll select the right sounds based on data, not guesswork</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-neon-yellow mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You'll implement professional-grade chord voicings from our analysis</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-neon-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You'll process each element with purpose, knowing exactly what to aim for</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-neon-yellow mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-violet-900/20 rounded-lg blur-sm transform group-hover:scale-105 transition-transform"></div>
              <div className="relative glass-effect p-6 rounded-lg h-full hover:-translate-y-1 transition-all duration-500">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-800 to-violet-700 flex items-center justify-center mb-4 animate-pulse-glow group-hover:animate-none">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center group-hover:text-violet-400 transition-colors">
                  <span>Finalize & Create Your System</span>
                  <svg className="w-5 h-5 text-violet-500 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-neon-yellow mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Apply professional-grade mastering techniques at the component level</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-neon-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Combine all elements while maintaining sonic integrity</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-neon-yellow mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Verify your production against multiple reference tracks</span>
                  </li>
                  <li className="flex items-start hover-scale">
                    <svg className="w-5 h-5 text-neon-blue mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
      
      {/* Section divider - fixed */}
      <div className="absolute bottom-0 left-0 right-0 section-divider">
        <svg className="section-divider-tilt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="currentColor"></path>
        </svg>
      </div>
      
      {/* Audio widget script */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const alissaBeforeAudio = document.querySelector(".alissa-before-audio");
          const alissaAfterAudio = document.querySelector(".alissa-after-audio");
          const paulBeforeAudio = document.querySelector(".paul-before-audio");
          const paulAfterAudio = document.querySelector(".paul-after-audio");
          
          const audioContainers = document.querySelectorAll(".audio-toggle-container");
          
          audioContainers.forEach((container, index) => {
            const playPauseBtn = container.querySelector(".play-btn");
            const playIcon = container.querySelector(".playIcon");
            const pauseIcon = container.querySelector(".pauseIcon");
            const audioBox = container.querySelector(".audio-box");
            const toggleSwitch = container.querySelector(".toggle-switch");
            const trackTitle = container.querySelector(".trackTitle");
            const trackSubtitle = container.querySelector(".trackSubtitle");
            
            let isPlaying = false;
            let isAfter = false;
            
            // Determine which audio pair to use based on the container index
            const beforeAudio = index === 0 ? alissaBeforeAudio : paulBeforeAudio;
            const afterAudio = index === 0 ? alissaAfterAudio : paulAfterAudio;
            const name = index === 0 ? "Alissa Track" : "Paul Track";
            
            // Sync playback between before/after tracks
            function syncPlayback() {
              afterAudio.currentTime = beforeAudio.currentTime;
            }
            
            // Toggle play/pause
            function togglePlay() {
              if (!isPlaying) {
                beforeAudio.play();
                afterAudio.play();
                playIcon.style.display = "none";
                pauseIcon.style.display = "block";
                isPlaying = true;
              } else {
                beforeAudio.pause();
                afterAudio.pause();
                playIcon.style.display = "block";
                pauseIcon.style.display = "none";
                isPlaying = false;
              }
            }
            
            // Play/pause button click handler
            playPauseBtn.addEventListener("click", function(event) {
              event.stopPropagation();
              togglePlay();
            });
            
            // Toggle switch click handler
            toggleSwitch.addEventListener("click", function() {
              isAfter = !isAfter;
              audioBox.classList.toggle("active");
              
              if (isAfter) {
                beforeAudio.muted = true;
                afterAudio.muted = false;
                syncPlayback();
                trackTitle.innerText = name;
                trackSubtitle.innerText = "After AI Tone Tracing";
              } else {
                beforeAudio.muted = false;
                afterAudio.muted = true;
                syncPlayback();
                trackTitle.innerText = name;
                trackSubtitle.innerText = "Before AI Tone Tracing";
              }
            });
            
            // Set default state
            beforeAudio.muted = false;
            afterAudio.muted = true;
          });
        });
      ` }}></script>
    </section>
  );
};

export default MethodSection;
