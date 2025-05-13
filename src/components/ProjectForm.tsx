
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { User } from "@supabase/supabase-js";

const projectSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  image_url: z.string().url("Please enter a valid URL").or(z.string().length(0)),
  project_url: z.string().url("Please enter a valid URL").or(z.string().length(0)),
  github_url: z.string().url("Please enter a valid URL").or(z.string().length(0)),
  tags: z.string().transform(val => val.split(',').map(tag => tag.trim()).filter(Boolean)),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  user: User | null;
  existingProject?: any;
  onSave: () => void;
  onCancel: () => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({ user, existingProject, onSave, onCancel }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: existingProject?.title || "",
      description: existingProject?.description || "",
      image_url: existingProject?.image_url || "",
      project_url: existingProject?.project_url || "",
      github_url: existingProject?.github_url || "",
      tags: existingProject?.tags ? existingProject.tags.join(", ") : "",
    },
  });

  const onSubmit = async (values: ProjectFormValues) => {
    if (!user) {
      toast.error("You must be logged in to save projects");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (existingProject) {
        // Update existing project
        const { error } = await supabase
          .from('projects')
          .update({
            ...values,
            updated_at: new Date().toISOString(),
          })
          .eq('id', existingProject.id);
          
        if (error) throw error;
        toast.success("Project updated successfully!");
      } else {
        // Create new project
        const { error } = await supabase
          .from('projects')
          .insert({
            ...values,
            user_id: user.id,
          });
          
        if (error) throw error;
        toast.success("Project created successfully!");
        form.reset({
          title: "",
          description: "",
          image_url: "",
          project_url: "",
          github_url: "",
          tags: "",
        });
      }
      
      onSave();
    } catch (error: any) {
      toast.error(`Error saving project: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Title</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  className="bg-gray-900/60 border-gray-800 focus:border-pink text-white"
                  placeholder="My Awesome Project"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  className="min-h-[120px] bg-gray-900/60 border-gray-800 focus:border-pink text-white"
                  placeholder="A detailed description of your project"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="image_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className="bg-gray-900/60 border-gray-800 focus:border-pink text-white"
                    placeholder="https://example.com/image.jpg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="project_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Live Demo URL</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className="bg-gray-900/60 border-gray-800 focus:border-pink text-white"
                    placeholder="https://my-project.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="github_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GitHub URL</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className="bg-gray-900/60 border-gray-800 focus:border-pink text-white"
                    placeholder="https://github.com/yourusername/project"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags (comma-separated)</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className="bg-gray-900/60 border-gray-800 focus:border-pink text-white"
                    placeholder="React, Node.js, MongoDB"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="flex justify-end gap-3">
          {existingProject && (
            <Button 
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          )}
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-pink-dark via-pink to-pink-light hover:opacity-90"
          >
            {isSubmitting ? 'Saving...' : existingProject ? 'Update Project' : 'Add Project'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProjectForm;
