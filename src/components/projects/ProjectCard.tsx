
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  projectLink: string;
  imageUrl: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  projectLink, 
  imageUrl 
}: ProjectProps) => {
  // Helper function to determine if an image URL is a direct URL or needs to be processed
  const processImageUrl = (url: string) => {
    // Check if it's a GitHub path that needs conversion
    if (url.includes('/assets/project_logo/')) {
      return url; // Already has the correct path format
    }
    return imageUrl; // Keep any external URLs as is
  };

  return (
    <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        <img 
          src={processImageUrl(imageUrl)} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <Button asChild>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "w-full"
            )}
          >
            View Project
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
