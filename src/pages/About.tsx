import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h1 className="page-title">About Me</h1>
          
          <div className="glass-card p-8 mb-10">
            <p className="text-lg leading-relaxed">
              Analytical and purposeful Business Analyst with 3+ years of experience using data to power decision-making and solve complex business problems. I specialize in translating messy data into clear strategies using tools like Python, SQL, and Power BI. Currently focused on agentic AI solutions and preparing for CBAP & Six Sigma Green Belt certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-6">Quick Facts</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Location: Canada</span>
                    <p className="text-muted-foreground">Open to Relocate</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Degrees:</span>
                    <p className="text-muted-foreground">🎓 Concordia University - Canada</p>
                    <p className="text-muted-foreground">Masters of Engineering</p>
                    <p className="text-muted-foreground">Industrial Engineering</p>
                    <p></p>
                    <p className="text-muted-foreground">🎓 Jamia Millia Islamia - India</p>
                    <p className="text-muted-foreground">Bachelors of Technology</p>
                    <p className="text-muted-foreground">Mechanical Engineering</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                      <line x1="4" x2="4" y1="22" y2="15"></line>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Visas:</span>
                    <p className="text-muted-foreground">Canada - Open Work Permit</p>
                    <p className="text-muted-foreground">Valid: June 2027</p>
                    <p className="text-muted-foreground">United States - B1/B2 Visa</p>
                    <p className="text-muted-foreground">Valid: March 2023</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-6">Areas of Expertise</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Business Analysis</h3>
                  <div className="h-2 bg-secondary rounded-full">
                    <div className="h-2 bg-gradient-to-r from-accent to-tech-blue rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Data Analytics</h3>
                  <div className="h-2 bg-secondary rounded-full">
                    <div className="h-2 bg-gradient-to-r from-accent to-tech-blue rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Business Intelligence (BI)</h3>
                  <div className="h-2 bg-secondary rounded-full">
                    <div className="h-2 bg-gradient-to-r from-accent to-tech-blue rounded-full" style={{ width: "80%" }}></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Project Management</h3>
                  <div className="h-2 bg-secondary rounded-full">
                    <div className="h-2 bg-gradient-to-r from-accent to-tech-blue rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">SQL</h3>
                  <div className="h-2 bg-secondary rounded-full">
                    <div className="h-2 bg-gradient-to-r from-accent to-tech-blue rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Python</h3>
                  <div className="h-2 bg-secondary rounded-full">
                    <div className="h-2 bg-gradient-to-r from-accent to-tech-blue rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/projects">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline">
              <Link to="/resume">
                See My Resume
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
  );
};

export default About;
