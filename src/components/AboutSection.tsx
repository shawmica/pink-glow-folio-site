
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-[#090909]">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-20 h-1 bg-pink mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I am a passionate frontend developer with expertise in creating responsive, 
              user-friendly web applications. With a strong foundation in modern web technologies
              and a keen eye for design, I deliver high-quality digital experiences that delight users.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My journey in web development started 3 years ago, and since then, 
              I've worked on various projects that have sharpened my skills in 
              React, TypeScript, and other modern frameworks. I'm committed to 
              writing clean, maintainable code and staying updated with the latest 
              industry standards.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or engaging in my extracurricular 
              activities like hiking and photography.
            </p>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-pink transition-colors">
                <h3 className="font-semibold mb-2 text-white">Education</h3>
                <p className="text-sm text-gray-400">Bachelor's Degree in Computer Science</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-pink transition-colors">
                <h3 className="font-semibold mb-2 text-white">Experience</h3>
                <p className="text-sm text-gray-400">2+ years professional experience</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-pink transition-colors">
                <h3 className="font-semibold mb-2 text-white">Location</h3>
                <p className="text-sm text-gray-400">San Francisco, CA</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-pink transition-colors">
                <h3 className="font-semibold mb-2 text-white">Languages</h3>
                <p className="text-sm text-gray-400">English, Spanish</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="border-2 border-pink rounded-lg overflow-hidden shadow-[0_0_20px_rgba(217,70,239,0.3)]">
              <img 
                src="/placeholder.svg" 
                alt="About Me" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -left-5 h-24 w-24 border-2 border-pink/50 rounded-lg"></div>
            <div className="absolute -top-5 -right-5 h-24 w-24 border-2 border-pink/50 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
