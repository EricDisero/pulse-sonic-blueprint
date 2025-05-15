
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhoIsThisForSection from "@/components/WhoIsThisForSection";
import MethodSection from "@/components/MethodSection";
import SocialProofSection from "@/components/SocialProofSection";
import ComparisonSection from "@/components/ComparisonSection";
import OfferSection from "@/components/OfferSection";
import InstructorSection from "@/components/InstructorSection";
import ProgramOverviewSection from "@/components/ProgramOverviewSection";
import FinalCTASection from "@/components/FinalCTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Animate elements when they come into view
      const animateElements = document.querySelectorAll('[data-animate]');
      animateElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.75) {
          element.classList.add('animate-fade-in');
          element.removeAttribute('data-animate');
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Glass-effect header */}
      <header className={`sticky-header transition-all duration-300 ${
        scrolled ? "sticky-header-scrolled" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-gradient">Pulse</span> Academy
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#how-it-works" className="text-white hover:text-violet-400 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-white hover:text-violet-400 transition-colors">
              Testimonials
            </a>
            <a href="#instructors" className="text-white hover:text-violet-400 transition-colors">
              Instructors
            </a>
            <a href="#faq" className="text-white hover:text-violet-400 transition-colors">
              FAQ
            </a>
          </nav>
          <Button className="pulse-cta bg-violet-700 hover:bg-violet-800 text-white">
            Book Now
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ProblemSection />
        <WhoIsThisForSection />
        <MethodSection />
        <SocialProofSection />
        <ComparisonSection />
        <OfferSection />
        <InstructorSection />
        <ProgramOverviewSection />
        <FinalCTASection />
        <FAQSection />
      </main>
      
      <Footer />
      
      {/* Load the audio widget script */}
      <script src="/src/components/AudioWidget.js" async></script>
    </div>
  );
};

export default Index;
