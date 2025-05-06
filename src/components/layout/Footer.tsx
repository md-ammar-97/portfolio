
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary py-8 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Mohammad Ammar</h3>
            <p className="text-sm opacity-80">
              Business & Operations Analyst | Strategy Consultant | Agentic AI Enthusiast
            </p>
            <p className="text-sm mt-2 opacity-70">
              © {currentYear} All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm opacity-80 hover:opacity-100 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-sm opacity-80 hover:opacity-100 transition">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-sm opacity-80 hover:opacity-100 transition">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">
                <span className="block">Email:</span>
                <a href="mailto:mdammar.ca@gmail.com" className="hover:opacity-100 transition">
                  mdammar.ca@gmail.com
                </a>
              </li>
              <li className="text-sm opacity-80">
                <span className="block">Phone:</span>
                <a href="tel:+15148194161" className="hover:opacity-100 transition">
                  +1 (514) 819-4161
                </a>
              </li>
              <li className="text-sm opacity-80">
                <span className="block">LinkedIn:</span>
                <a 
                  href="https://www.linkedin.com/in/mohd-ammar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-100 transition"
                >
                  www.linkedin.com/in/mohd-ammar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
