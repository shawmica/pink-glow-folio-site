
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { useInView } from 'react-intersection-observer';

const ActivitiesSection = () => {
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

  const activities = [
    {
      id: 1,
      title: "Volunteer Coding Instructor",
      organization: "Code Youth Initiative",
      duration: "2022 - Present",
      description: "Teaching coding fundamentals to underprivileged high school students. Organizing workshops and mentoring sessions to help students develop practical programming skills.",
      achievements: ["Mentored 30+ students", "Developed curriculum", "Organized 5 hackathons"]
    },
    {
      id: 2,
      title: "Tech Conference Speaker",
      organization: "Various Tech Conferences",
      duration: "2021 - Present",
      description: "Regular speaker at local and regional tech conferences. Presenting on topics related to frontend development, UI/UX, and career growth in tech.",
      achievements: ["Spoke at 8 conferences", "Highest rated speaker at DevCon 2022", "Published 3 technical articles"]
    },
    {
      id: 3,
      title: "Open Source Contributor",
      organization: "GitHub Community",
      duration: "2020 - Present",
      description: "Active contributor to various open-source projects, primarily focused on React components and developer tools. Maintaining several packages with significant community adoption.",
      achievements: ["200+ GitHub contributions", "Maintaining 2 popular libraries", "Resolved 50+ issues"]
    },
    {
      id: 4,
      title: "Hackathon Participant",
      organization: "Global Hackathon Events",
      duration: "2019 - Present",
      description: "Regular participant in local and global hackathons. Collaborating with diverse teams to build innovative solutions under time constraints.",
      achievements: ["Won 'Best UI/UX' award", "Finalist in 3 events", "Mentored new participants"]
    },
    {
      id: 5,
      title: "Photography Club Leader",
      organization: "Urban Captures Photography Club",
      duration: "2018 - Present",
      description: "Leading a community of photography enthusiasts. Organizing monthly photo walks, critique sessions, and annual exhibitions showcasing members' work.",
      achievements: ["Grew membership by 75%", "Organized 2 major exhibitions", "Featured in local art magazine"]
    }
  ];

  return (
    <section ref={ref} id="activities" className="py-20 bg-gradient-to-b from-black to-[#050505]">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Extracurricular <span className="text-gradient">Activities</span>
        </h2>
        <div className="w-20 h-1 bg-pink mx-auto mb-12 shimmer"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <Card 
              key={activity.id} 
              className={`bg-gray-900/40 border border-gray-800 overflow-hidden hover:border-pink transition-all duration-500 hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:-translate-y-1 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${(index % 2) * 0.1 + 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-dark to-pink flex items-center justify-center animate-pulse-glow">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                    <p className="text-pink">{activity.organization}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{activity.duration}</p>
                <p className="text-gray-300 mb-4">{activity.description}</p>
                
                <div>
                  <h4 className="text-white font-semibold mb-2">Key Achievements</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {activity.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm hover:text-pink transition-colors duration-300">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
