
import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-900/10 to-black"></div>
        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Pulse Academy</h3>
              <p className="text-gray-400 mb-4">
                Transforming amateur productions into label-ready tracks through objective analysis.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-pink-500 transition-colors">How It Works</a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-pink-500 transition-colors">Testimonials</a>
                </li>
                <li>
                  <a href="#instructors" className="text-gray-400 hover:text-pink-500 transition-colors">Instructors</a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-pink-500 transition-colors">FAQ</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Refund Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">Cookie Policy</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:team@pulseacademy.com" className="text-gray-400 hover:text-pink-500 transition-colors">team@pulseacademy.com</a>
                </li>
                <li>
                  <p className="text-gray-400">Support Hours: 9AM-5PM EST</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} Pulse Academy. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Ambient particle drift */}
      <div className="absolute inset-0 pointer-events-none z-[5]" aria-hidden="true">
        {/* These would be animated with CSS in a real implementation */}
        <div className="absolute w-2 h-2 bg-pink-500 rounded-full opacity-20 top-1/4 left-1/4"></div>
        <div className="absolute w-3 h-3 bg-purple-500 rounded-full opacity-10 top-1/2 left-3/4"></div>
        <div className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-30 top-3/4 left-1/3"></div>
        <div className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-10 top-1/3 left-2/3"></div>
      </div>
    </footer>
  );
};

export default Footer;
