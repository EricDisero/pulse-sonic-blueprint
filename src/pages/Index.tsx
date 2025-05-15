
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-pink-500">Pulse</span> Academy
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#how-it-works" className="text-white hover:text-pink-500 transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-white hover:text-pink-500 transition-colors">
              Testimonials
            </a>
            <a href="#instructors" className="text-white hover:text-pink-500 transition-colors">
              Instructors
            </a>
            <a href="#faq" className="text-white hover:text-pink-500 transition-colors">
              FAQ
            </a>
          </nav>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">
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
    </div>
  );
};

export default Index;
