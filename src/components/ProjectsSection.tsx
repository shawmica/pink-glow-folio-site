
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform built with React and Node.js, featuring product filtering, user authentication, and Stripe payment integration.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application with drag-and-drop task management, user collaboration features, and real-time updates using Socket.io.",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "Express", "Socket.io"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather application showcasing current conditions and forecasts using data from multiple weather APIs with interactive charts.",
      image: "/placeholder.svg",
      tags: ["JavaScript", "Chart.js", "API Integration"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Recipe Finder App",
      description: "A web application that allows users to search for recipes based on ingredients they have, with filtering options and step-by-step instructions.",
      image: "/placeholder.svg",
      tags: ["React", "Firebase", "Tailwind CSS"],
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Fitness Tracker",
      description: "A comprehensive fitness application for tracking workouts, setting goals, and visualizing progress with interactive dashboards.",
      image: "/placeholder.svg",
      tags: ["React", "Redux", "Node.js", "MongoDB"],
      link: "#",
      github: "#"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing skills, projects, and experience with a unique design and smooth animations.",
      image: "/placeholder.svg",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#090909] to-black">
      <div className="container mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-pink mx-auto mb-6"></div>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
          Here are some of my recent projects. Each project represents different challenges I've overcome and skills I've developed.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-gray-900/40 border border-gray-800 overflow-hidden hover:border-pink transition-all duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
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
                  {project.tags.map((tag, index) => (
                    <Badge key={index} className="bg-pink/20 text-pink border border-pink/30 hover:bg-pink/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4 p-4 pt-0">
                <Button 
                  size="sm" 
                  className="bg-pink hover:bg-pink-dark text-white flex-1"
                >
                  Live Demo
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-pink text-pink hover:bg-pink/10 flex-1"
                >
                  Source Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-transparent border border-pink text-pink hover:bg-pink hover:text-white transition-colors">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
