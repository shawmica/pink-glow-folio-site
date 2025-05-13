
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectForm from "@/components/ProjectForm";
import { toast } from "sonner";
import { Pencil, Trash2 } from "lucide-react";

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const [projects, setProjects] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('projects');

  useEffect(() => {
    if (user) {
      fetchProjects();
      fetchMessages();
    }
  }, [user]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error: any) {
      toast.error(`Error fetching projects: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error: any) {
      toast.error(`Error fetching messages: ${error.message}`);
    }
  };

  const deleteProject = async (id: string) => {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setProjects(projects.filter(project => project.id !== id));
      toast.success('Project deleted successfully');
    } catch (error: any) {
      toast.error(`Error deleting project: ${error.message}`);
    }
  };

  const handleEditProject = (project: any) => {
    setEditingProject(project);
  };

  const handleProjectSaved = () => {
    setEditingProject(null);
    fetchProjects();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090909] to-black">
      <header className="bg-black/80 backdrop-blur-sm border-b border-gray-800 p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-gradient">Portfolio Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70 text-sm">
              {user?.email}
            </span>
            <Button variant="outline" size="sm" onClick={() => signOut()}>
              Sign Out
            </Button>
            <Button size="sm" onClick={() => window.location.href = '/'}>
              View Portfolio
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto pt-8 px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects">
            <div className="mb-8">
              <Card className="bg-gray-900/40 border-gray-800">
                <CardHeader>
                  <CardTitle>{editingProject ? 'Edit Project' : 'Add New Project'}</CardTitle>
                  <CardDescription>
                    {editingProject ? 'Update your existing project' : 'Add a new project to your portfolio'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProjectForm 
                    user={user}
                    existingProject={editingProject}
                    onSave={handleProjectSaved}
                    onCancel={() => setEditingProject(null)}
                  />
                </CardContent>
              </Card>
            </div>

            <h2 className="text-xl font-semibold mb-4">Your Projects</h2>
            
            {loading ? (
              <div className="flex justify-center py-10">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink"></div>
              </div>
            ) : projects.length === 0 ? (
              <div className="text-center py-10 text-gray-400">
                <p>No projects yet. Add your first project above!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                  <Card key={project.id} className="bg-gray-900/40 border-gray-800 overflow-hidden hover:border-pink transition-all duration-300">
                    {project.image_url && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={project.image_url} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardHeader className="p-4">
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags && project.tags.map((tag: string, index: number) => (
                          <span key={index} className="bg-pink/20 text-pink text-xs py-1 px-2 rounded border border-pink/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between p-4 pt-0">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleEditProject(project)}
                        className="border-pink text-pink hover:bg-pink/10"
                      >
                        <Pencil size={16} className="mr-1" /> Edit
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => deleteProject(project.id)}
                        className="border-red-500 text-red-500 hover:bg-red-950/30"
                      >
                        <Trash2 size={16} className="mr-1" /> Delete
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="messages">
            <Card className="bg-gray-900/40 border-gray-800">
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>
                  Messages from visitors through your contact form
                </CardDescription>
              </CardHeader>
              <CardContent>
                {messages.length === 0 ? (
                  <div className="text-center py-10 text-gray-400">
                    <p>No messages yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map(message => (
                      <Card key={message.id} className="bg-gray-900/60 border-gray-800">
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-lg">{message.name}</CardTitle>
                          <CardDescription>{message.email}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <p className="text-white">{message.message}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 text-xs text-gray-400">
                          {new Date(message.created_at).toLocaleString()}
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profile">
            <Card className="bg-gray-900/40 border-gray-800 max-w-xl mx-auto">
              <CardHeader>
                <CardTitle>Your Profile</CardTitle>
                <CardDescription>
                  Manage your account details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400">Email</label>
                    <p className="text-white">{user?.email}</p>
                  </div>
                  {/* Add profile update functionality here in the future */}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  onClick={() => signOut()}
                  className="border-pink text-pink hover:bg-pink/10"
                >
                  Sign Out
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
