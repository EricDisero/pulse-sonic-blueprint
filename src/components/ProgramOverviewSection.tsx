
import React from "react";
import { Button } from "@/components/ui/button";

const ProgramOverviewSection = () => {
  return (
    <section className="relative py-20 overflow-hidden gradient-method">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute left-1/4 top-1/3 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[120px] transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-1/4 bottom-1/3 w-[300px] h-[300px] bg-violet-900/10 rounded-full blur-[100px] transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          If We're a Good Fit: What Working Together Looks Like
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect p-8 rounded-lg mb-12">
            <p className="text-gray-300 mb-6">
              Pulse Academy is a serious investment for serious producers. We offer different tiers based on your goals and how hands-on you want the coaching to be.
            </p>
            
            <h3 className="text-xl font-bold text-white mb-4">Our program includes:</h3>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-violet-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-200">The Pulse Cascade Splitter for breaking down reference tracks</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-violet-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-200">Our AI Chord Progression Analyzer for professional harmony</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-violet-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-200">Coaching from our team of active industry professionals</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-violet-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-200">Custom resources tailored to your specific genre and goals</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-violet-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-200">A community of serious producers at your level</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-violet-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-200">Connections to industry professionals who can advance your career</span>
              </li>
            </ul>
            
            <div className="space-y-6">
              <div className="bg-gray-800/40 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-2">For those wanting hands-on mentorship:</h4>
                <p className="text-gray-300">
                  Our higher tier includes one-on-one coaching, custom vocals, professional stem mastering, and our industry contact "black book."
                </p>
              </div>
              
              <div className="bg-gray-800/40 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-2">For self-driven producers:</h4>
                <p className="text-gray-300">
                  We offer comprehensive group coaching, full access to our technology, and regular feedback on your music.
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 mt-6">
              We'll discuss specific options and pricing during your Instant Song Upgrade session if it seems like we'd be a good fit for each other.
            </p>
          </div>
          
          <div className="text-center">
            <Button className="pulse-cta bg-violet-700 hover:bg-violet-800 text-white text-lg py-6 px-8">
              BOOK YOUR FREE SONG UPGRADE SESSION
            </Button>
            <p className="text-gray-400 mt-2">Only 6 spots left this week</p>
          </div>
        </div>
      </div>
      
      {/* Section divider - fixed */}
      <div className="absolute bottom-0 left-0 right-0 section-divider">
        <svg className="section-divider-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default ProgramOverviewSection;
