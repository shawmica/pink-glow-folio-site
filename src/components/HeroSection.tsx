
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Frontend Developer & UI Designer";

  useEffect(() => {
    setIsLoaded(true);
    
    // Typing animation effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#050505] py-20">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-pink/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-700/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink/10 rounded-full blur-[80px] gradient-shift"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-[20%] right-[10%] w-2 h-2 bg-pink rounded-full animate-ping"></div>
        <div className="absolute top-[60%] left-[5%] w-2 h-2 bg-pink rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-[15%] right-[15%] w-2 h-2 bg-pink rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyMTIxMjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDU5SDFWMWM1OCAwIDU4IDU4IDU4IDU4eiIgc3Ryb2tlPSIjMzkzOTM5IiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10 relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className={`flex-1 text-center md:text-left transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-gradient shimmer">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 typing-cursor">{typedText}</p>
          <p className={`text-gray-400 mb-10 max-w-lg mx-auto md:mx-0 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.4s' }}>
            Creating beautiful, functional, and user-friendly web experiences with a focus on clean code and modern design principles.
          </p>
          
          <div className={`flex flex-wrap gap-4 justify-center md:justify-start transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.6s' }}>
            <Button className="bg-gradient-to-r from-pink-dark via-pink to-pink-light hover:bg-pink/90 text-white rounded-md px-8 py-6 hover:shadow-[0_0_15px_rgba(217,70,239,0.5)] transition-all duration-300">
              View My Work
            </Button>
            <Button variant="outline" className="border-pink text-pink hover:bg-pink/10 rounded-md px-8 py-6 hover:shadow-[0_0_15px_rgba(217,70,239,0.3)] transition-all duration-300">
              Contact Me
            </Button>
          </div>
          
          <div className={`mt-16 flex gap-6 justify-center md:justify-start transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.8s' }}>
            <div className="text-center hover-scale">
              <span className="block text-3xl font-bold text-gradient">2+</span>
              <span className="text-sm text-gray-400">Years Experience</span>
            </div>
            <div className="h-12 w-px bg-gray-800"></div>
            <div className="text-center hover-scale">
              <span className="block text-3xl font-bold text-gradient">20+</span>
              <span className="text-sm text-gray-400">Projects Completed</span>
            </div>
            <div className="h-12 w-px bg-gray-800"></div>
            <div className="text-center hover-scale">
              <span className="block text-3xl font-bold text-gradient">10+</span>
              <span className="text-sm text-gray-400">Happy Clients</span>
            </div>
          </div>
        </div>
        
        <div className={`relative transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1s' }}>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-pink shadow-[0_0_30px_#D946EF] float-animation">
            <img 
              src="/placeholder.svg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-black border border-gray-800 py-2 px-4 rounded-full animate-pulse-glow">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span className="text-sm">Available for work</span>
            </span>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
