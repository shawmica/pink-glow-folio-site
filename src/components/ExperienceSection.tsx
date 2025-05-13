
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      duration: "Jan 2023 - Present",
      description: "Lead the development of responsive web applications using React, TypeScript, and Tailwind CSS. Collaborated with cross-functional teams to deliver high-quality products. Implemented best practices and improved performance by 40%.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Redux"]
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Digital Solutions LLC",
      duration: "Mar 2021 - Dec 2022",
      description: "Developed and maintained client websites and applications. Collaborated with designers to implement UI/UX improvements. Participated in code reviews and mentored junior developers.",
      skills: ["JavaScript", "React", "CSS", "Git"]
    },
    {
      id: 3,
      role: "Web Development Intern",
      company: "CreativeWeb Agency",
      duration: "Jun 2020 - Feb 2021",
      description: "Assisted in the development of client websites. Gained practical experience in frontend technologies and agile development processes. Contributed to multiple successful project deliveries.",
      skills: ["HTML", "CSS", "JavaScript", "UI/UX"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Work <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-pink mx-auto mb-12"></div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 transform -translate-x-1/2"></div>
          
          {experiences.map((experience, index) => (
            <div key={experience.id} className="mb-12 md:mb-0">
              <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                <div className="md:w-1/2 md:p-8">
                  <Card className="bg-gray-900/40 border border-gray-800 overflow-hidden hover:border-pink transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
                      <p className="text-pink mb-2">{experience.company}</p>
                      <p className="text-gray-400 text-sm mb-4">{experience.duration}</p>
                      <p className="text-gray-300 mb-4">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="text-xs bg-pink/20 text-pink px-2 py-1 rounded-full border border-pink/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="hidden md:flex justify-center items-center md:w-1/2 relative">
                  <div className="h-12 w-12 rounded-full bg-pink flex items-center justify-center z-10">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
