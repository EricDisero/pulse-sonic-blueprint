
import React from "react";

const ProgramOverviewSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute right-1/4 top-0 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            If We're a Good Fit: What Working Together Looks Like
          </h2>
          
          <p className="text-center text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Pulse Academy is a serious investment for serious producers. We offer different tiers based on your goals and how hands-on you want the coaching to be.
          </p>
          
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              Our program includes:
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  The Pulse Cascade Splitter for breaking down reference tracks
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  Our AI Chord Progression Analyzer for professional harmony
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  Coaching from our team of active industry professionals
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  Custom resources tailored to your specific genre and goals
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  A community of serious producers at your level
                </span>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  Connections to industry professionals who can advance your career
                </span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span>Hands-On Mentorship</span>
              </h3>
              <p className="text-gray-300 mb-4">
                For those wanting the most comprehensive support, our higher tier includes one-on-one coaching, custom vocals, professional stem mastering, and our industry contact "black book."
              </p>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center mr-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span>Self-Driven Option</span>
              </h3>
              <p className="text-gray-300 mb-4">
                For self-driven producers, we offer comprehensive group coaching, full access to our technology, and regular feedback on your music.
              </p>
            </div>
          </div>
          
          <p className="text-center text-gray-300">
            We'll discuss specific options and pricing during your Instant Song Upgrade session if it seems like we'd be a good fit for each other.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverviewSection;
