
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Skills from "@/components/home/Skills";
import ProjectCard from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Enhancing Sample-to-Order Conversion at Champo Carpets",
    description: "ERP data analysis with ML for improved sales conversion and profitability",
    techStack: ["Python", "Pandas", "Scikit-learn", "Looker Studio"],
    projectLink: "https://drive.google.com/file/d/1Y_ei5j88Zr1cWqrhga_MyTYvG0gjYvfr/view",
    imageUrl: "https://i.postimg.cc/QtzHwXG7/Enhancing-Sample-to-Order-Conversion-at-Champo-Carpets-Using-Machine-Learning.png"
  },
  {
    title: "AmiColo – Smart Moves for City Transitions",
    description: "Created a roommate-matching platform using AI and clustering on social indices via Facebook Graph API. Achieved 130K+ visits, 15% engagement growth, and secured $60K seed funding.",
    techStack: ["Python", "HTML", "CSS", "Scikit-learn", "pandas", "Meta API"],
    projectLink: "https://youtu.be/Wja8LpWUxqM?si=UVDBnj_F0x0j3kJs",
    imageUrl: "/assets/project_logo/Project_20.png"
  },
  {
    title: "Potter vs. Friends: Culture in Data",
    description: "Contrasted Harry Potter and Friends using Excel and PowerBI to analyze characters, tones, and franchise impact. Built side-by-side dashboards for cross-series insights.",
    techStack: ["PowerBI", "Excel"],
    projectLink: "http://tiny.cc/AMR-Project-17",
    imageUrl: "/assets/project_logo/Project_17.png"
  },
  {
    title: "AcademAI – AI Agents for Smarter Learning",
    description: "Built GenAI-powered academic assistants using LangChain, Pinecone, and OpenAI to support students. Recognized among Canada's Top 40 AI projects with $50K pitch opportunity.",
    techStack: ["Python", "VectorDB", "Pinecone", "LangChain", "OpenAI API"],
    projectLink: "https://youtu.be/2jL-TQpGDfw?si=r3rZETKbsnUqAq3F",
    imageUrl: "/assets/project_logo/Project_21.png"
  },
  {
    title: "Simulation & Optimization – Decontamination Center",
    description: "Discrete event simulation to optimize AGV vs manual operations in hospitals",
    techStack: ["Rockwell Arena", "Process Simulation"],
    projectLink: "https://docs.google.com/presentation/d/11B1h0vNq-Rdlt0mPznJ02TIJgdSeXpmK/present?slide=id.p1",
    imageUrl: "https://i.postimg.cc/4dsDGtZk/Simulation-Optimization-of-a-Decontamination-Center-Using-Rockwell-Arena.png"
  },
  {
    title: "Uber Eats Canada: Data-Driven Optimization",
    description: "Analyzed Uber Eats data to reveal cost-performance patterns, cuisine popularity, and review sentiment using GenAI and BI tools to improve visibility and user retention.",
    techStack: ["PowerBI", "SQL", "Excel", "GenAI"],
    projectLink: "http://tiny.cc/AMR-Project-14",
    imageUrl: "/assets/project_logo/Project_14.png"
  },
];

const Index = () => {
  return (
    <>
      <Hero />
      <Stats />
      
      {/* Featured Projects Section */}
      <section className="section-container">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground mt-2">
              Explore some of my recent work
            </p>
          </div>
          <Button asChild variant="ghost">
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              projectLink={project.projectLink}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </section>
      
      <Skills />
    </>
  );
};

export default Index;
