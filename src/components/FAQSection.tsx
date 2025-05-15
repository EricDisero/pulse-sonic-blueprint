
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-white hover:no-underline">
                "Will this work for my genre?"
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                While we specialize in electronic music, pop, and hip-hop, the approach works for any genre. The principles of professional production are universal.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-white hover:no-underline">
                "Do I need special plugins?"
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Not at all. Our methods work with any DAW and standard plugins. It's about techniques, not specific tools.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-white hover:no-underline">
                "How is this different from other courses?"
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Instead of subjective tips, we show you exactly what makes professional tracks work at the stem level. We focus on measurements, not opinions.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-white hover:no-underline">
                "I've tried everything. Why would this be different?"
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                That's why the free session exists – experience it yourself with your own music, then decide.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-white hover:no-underline">
                "How advanced do I need to be?"
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                You should know your way around your DAW, but you don't need to be advanced – just committed to improving.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 text-lg font-medium text-white hover:no-underline">
                "What if I'm short on time?"
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                Our approach actually saves time by eliminating guesswork. Many of our students tell us they achieved more in weeks than they did in years of trial and error.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
