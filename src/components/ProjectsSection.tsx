
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useInView } from 'react-intersection-observer';

const ProjectsSection = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
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
  
  useEffect(() => {
    fetchProjects();
  }, []);
  
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error);
        return;
      }

      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fallback to static projects if no database projects exist
  const staticProjects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform built with React and Node.js, featuring product filtering, user authentication, and Stripe payment integration.",
      image_url: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      project_url: "#",
      github_url: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application with drag-and-drop task management, user collaboration features, and real-time updates using Socket.io.",
      image_url: "/placeholder.svg",
      tags: ["React", "TypeScript", "Express", "Socket.io"],
      project_url: "#",
      github_url: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather application showcasing current conditions and forecasts using data from multiple weather APIs with interactive charts.",
      image_url: "/placeholder.svg",
      tags: ["JavaScript", "Chart.js", "API Integration"],
      project_url: "#",
      github_url: "#"
    }
  ];

  // Use database projects if available, otherwise use static projects
  const displayProjects = projects.length > 0 ? projects : staticProjects;

  return (
    <section ref={ref} id="projects" className="py-20 bg-gradient-to-b from-[#090909] to-black">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-pink mx-auto mb-6"></div>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
          Here are some of my recent projects. Each project represents different challenges I've overcome and skills I've developed.
        </p>
        
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink"></div>
          </div>
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {displayProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-gray-900/40 border border-gray-800 overflow-hidden hover:border-pink transition-all duration-300 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image_url || "/placeholder.svg"} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader className="p-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {Array.isArray(project.tags) && project.tags.map((tag: string, tagIndex: number) => (
                      <Badge key={tagIndex} className="bg-pink/20 text-pink border border-pink/30 hover:bg-pink/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 p-4 pt-0">
                  <Button 
                    size="sm" 
                    className="bg-pink hover:bg-pink-dark text-white flex-1"
                    onClick={() => window.open(project.project_url, '_blank')}
                  >
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-pink text-pink hover:bg-pink/10 flex-1"
                    onClick={() => window.open(project.github_url, '_blank')}
                  >
                    Source Code
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button 
            className="bg-transparent border border-pink text-pink hover:bg-pink hover:text-white transition-colors"
            onClick={() => window.location.href = '/dashboard'}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
