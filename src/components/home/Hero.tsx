
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CrosswordBackground from './CrosswordBackground';

const Hero = () => {
  const redirectToLinkedIn = () => {
    window.open('https://www.linkedin.com/in/mohd-ammar', '_blank');
  };

  return (
    <div className="relative bg-gradient-to-br from-primary to-navy-light text-primary-foreground py-24 sm:py-32 overflow-hidden">
      {/* Crossword Background */}
      <CrosswordBackground />
      
      {/* Background pattern (kept for additional texture) */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjIuNCAzLjIuOGw2LTguMWMyLTIuNyA1LjktMy4zIDguNy0xLjMgMi43IDIgMy4zIDUuOSAxLjMgOC43bC03LjYgMTAuM2MxLjIgMi4yIDEuOSA0LjYgMS45IDcuMUw2MCAzNmMwIDMuNC0yLjcgNi4yLTYuMiA2LjJzLTYuMi0yLjctNi4yLTYuMmwuNS0uNWMwLTYuOC01LjYtMTIuNC0xMi41LTEyLjR2LjFjLTYuOSAwLTEyLjUgNS42LTEyLjUgMTIuNHYuNWMwIDMuNC0yLjcgNi4yLTYuMiA2LjJTMTEgMzkuNSAxMSAzNmwxMC41LjVjMC0yLjUuNy00LjkgMS45LTcuMWwtNy42LTEwLjNjLTItMi43LTEuNC02LjYgMS4zLTguNyAyLjctMiA2LjYtMS40IDguNyAxLjNsNiA4LjFjMS0uNCAyLS44IDMuMi0uOGguN3oiIGZpbGwtb3BhY2l0eT0iLjA1IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-10">
            <div className="relative inline-block">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-accent to-tech-blue opacity-80 mx-auto relative overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dav1ts03b/image/upload/v1746563259/AmmarPSN_lrt1kp.webp" 
                  alt="Mohammad Ammar" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-primary/70 backdrop-blur-sm py-3 px-4 rounded-b-full text-white text-base md:text-lg font-medium">
                Mohammad Ammar
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight fade-in">
            Driving Strategic Impact Through Data, AI, and Innovation
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 fade-in delay-100">
            Business Analyst | Strategy Consultant | Agentic AI Enthusiast
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 fade-in delay-200">
            <Button asChild size="lg" variant="default">
              <Link to="/resume">
                View Resume
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="bg-white/10">
              <Link to="/projects">
                Explore Projects
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="bg-white/10">
              <a href="https://www.linkedin.com/in/mohd-ammar" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </a>
            </Button>
            
            <Button size="lg" className="bg-accent hover:bg-accent/90" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
