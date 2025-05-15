
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const WhoIsThisForSection = () => {
  const [selectedStruggle, setSelectedStruggle] = useState<string | null>(null);
  
  // Custom responses for each struggle type
  const struggleResponses = {
    "low-end": "Great—here's how we help with creating powerful low end! Our Cascade Splitter isolates kick and bass frequencies, giving you precise measurement targets that make your low end punch through any system.",
    "amateur": "Perfect—we specialize in professional-sounding mixes! Our reference analysis will show you exactly where your mix differs from commercial releases and give you exact targets to hit.",
    "space": "Absolutely—creating depth and space is our specialty! We'll show you how to analyze stereo imaging and reverb decay patterns from professional tracks, then apply them to your own.",
    "submissions": "That's exactly why we developed this system! Our analysis will identify what labels are specifically looking for in your genre and give you a practical roadmap to meet those standards.",
    "other": "I'd love to hear more about your specific challenge! In our session, we'll customize our approach to address your unique situation with tailored measurements and techniques.",
  };
  
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient - darker purple */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Is This Right For You?
          </h2>
          
          {/* Interactive Quiz */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              What's your biggest mix struggle?
            </h3>
            
            <RadioGroup 
              className="space-y-4 max-w-xl mx-auto" 
              value={selectedStruggle ?? undefined}
              onValueChange={setSelectedStruggle}
            >
              <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors">
                <RadioGroupItem value="low-end" id="low-end" />
                <Label htmlFor="low-end">My low end never sounds powerful and defined</Label>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors">
                <RadioGroupItem value="amateur" id="amateur" />
                <Label htmlFor="amateur">My mixes sound amateur compared to references</Label>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors">
                <RadioGroupItem value="space" id="space" />
                <Label htmlFor="space">My tracks lack that professional "space" and depth</Label>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors">
                <RadioGroupItem value="submissions" id="submissions" />
                <Label htmlFor="submissions">Labels/playlists aren't taking my submissions</Label>
              </div>
              <div className="flex items-center space-x-2 bg-gray-800/50 p-4 rounded-md hover:bg-gray-800 transition-colors">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">Other</Label>
              </div>
            </RadioGroup>
            
            {/* Dynamic content based on selection - with unique responses */}
            {selectedStruggle && (
              <div className="mt-6 p-4 bg-purple-900/10 border border-purple-500/30 rounded-md">
                <p className="text-lg font-medium mb-2">
                  {struggleResponses[selectedStruggle as keyof typeof struggleResponses]}
                </p>
              </div>
            )}
          </div>
          
          {/* This might be perfect for you if */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">
              This might be perfect for you if:
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-200">
                  <strong className="text-white">You've got the basics down</strong> and can create decent tracks, but you're hitting a ceiling
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-200">
                  <strong className="text-white">You're serious about your music career</strong> and want your productions to reach professional quality
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-200">
                  <strong className="text-white">You have a clear vision</strong> for your sound but can't quite achieve it despite endless tweaking
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-200">
                  <strong className="text-white">You're actively seeking</strong> label deals or playlist placements
                </span>
              </li>
            </ul>
          </div>
          
          {/* This probably isn't for you if */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">
              This probably isn't for you if:
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  <strong className="text-gray-200">You're just starting out</strong> and still learning your DAW's basic functions
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  <strong className="text-gray-200">You're making music purely as a casual hobby</strong> with no professional aspirations
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="ml-2 text-gray-300">
                  <strong className="text-gray-200">You tend to collect courses</strong> but rarely implement what you learn
                </span>
              </li>
            </ul>
          </div>
          
          {/* Producer Testimonials - with thumbnails */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              What Our Students Are Saying
            </h3>
            
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">
                  AX
                </div>
                <div>
                  <p className="font-medium text-gray-300 mb-2">
                    <span className="text-white">Alex shared this with me last week:</span>
                  </p>
                  <blockquote className="italic text-pink-300 text-lg">
                    "After 5 years of hitting the same wall with my productions, I finally saw exactly what was missing in my mixes. I made more progress in 2 weeks than in the previous 2 years."
                  </blockquote>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">
                  OS
                </div>
                <div>
                  <p className="font-medium text-gray-300 mb-2">
                    <span className="text-white">Oscar, who went from 3,000 to 900,000 monthly listeners, told me:</span>
                  </p>
                  <blockquote className="italic text-pink-300 text-lg">
                    "The objective analysis changed everything about how I approach production. For the first time, I could see exactly why my tracks weren't matching commercial releases."
                  </blockquote>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">
                  SH
                </div>
                <div>
                  <p className="font-medium text-gray-300 mb-2">
                    <span className="text-white">Sarah, who used to spend weeks on a single mix:</span>
                  </p>
                  <blockquote className="italic text-pink-300 text-lg">
                    "I used to never feel satisfied with my mixes. Now I know exactly what to measure, what to listen for, and how to fix issues methodically. My completion rate has tripled."
                  </blockquote>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-violet-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">
                  MC
                </div>
                <div>
                  <p className="font-medium text-gray-300 mb-2">
                    <span className="text-white">Marco sent me this after his first label signing:</span>
                  </p>
                  <blockquote className="italic text-pink-300 text-lg">
                    "I sent my first track using this method to a label I'd been trying to sign with for years. They responded within hours asking for more music. The difference in quality was that dramatic."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
