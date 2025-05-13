
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useInView } from 'react-intersection-observer';

const EducationSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const education = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      duration: "2019 - 2021",
      description: "Specialized in Software Engineering and Machine Learning. Completed thesis on optimizing frontend performance for modern web applications.",
      courses: ["Advanced Algorithms", "Machine Learning", "Web Systems Architecture", "Database Systems"]
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      duration: "2015 - 2019",
      description: "Graduated with honors. Focused on software development and user interface design. Completed multiple practical projects with industry partners.",
      courses: ["Data Structures", "Object-Oriented Programming", "UI/UX Design", "Web Development"]
    },
    {
      id: 3,
      degree: "Web Development Bootcamp",
      institution: "Tech Academy",
      duration: "Summer 2018",
      description: "Intensive 12-week program focused on modern web development technologies and practices. Built multiple full-stack applications.",
      courses: ["JavaScript Fundamentals", "React", "Node.js", "Full-Stack Projects"]
    }
  ];

  return (
    <section ref={ref} id="education" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-gradient">Education</span>
        </h2>
        <div className="w-20 h-1 bg-pink mx-auto mb-12 shimmer"></div>
        
        <div className="space-y-8">
          {education.map((item, index) => (
            <Card 
              key={item.id} 
              className={`bg-gray-900/40 border border-gray-800 overflow-hidden hover:border-pink transition-all duration-500 hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 0.2 + 0.2}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-pink-dark to-pink-light flex items-center justify-center animate-pulse-glow">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-gray-400 text-sm">{item.duration}</div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                    <p className="text-pink mb-4">{item.institution}</p>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.courses.map((course, index) => (
                          <span 
                            key={index} 
                            className="text-xs bg-pink/20 text-pink px-2 py-1 rounded-full border border-pink/30 hover:bg-pink/30 transition-colors duration-300 hover-scale"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
