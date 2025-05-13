
import React from "react";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const frontendSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ];
  
  const backendSkills = [
    { name: "Node.js", level: 70 },
    { name: "Express", level: 65 },
    { name: "MongoDB", level: 60 },
    { name: "SQL", level: 55 },
    { name: "GraphQL", level: 50 },
  ];
  
  const toolsSkills = [
    { name: "Git", level: 85 },
    { name: "Figma", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Adobe XD", level: 60 },
    { name: "Jest", level: 65 },
  ];

  return (
    <section id="skills" className="py-20 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-pink mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Frontend Skills */}
          <div className="bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 rounded-lg p-6 hover-scale">
            <h3 className="text-xl font-semibold mb-6 text-white">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-pink">{skill.level}%</span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-2 bg-gray-800"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 rounded-lg p-6 hover-scale">
            <h3 className="text-xl font-semibold mb-6 text-white">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-pink">{skill.level}%</span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-2 bg-gray-800"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools & Others */}
          <div className="bg-gradient-to-b from-gray-900/50 to-black border border-gray-800 rounded-lg p-6 hover-scale">
            <h3 className="text-xl font-semibold mb-6 text-white">Tools & Others</h3>
            <div className="space-y-6">
              {toolsSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-pink">{skill.level}%</span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-2 bg-gray-800"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
