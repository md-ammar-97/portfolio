import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Import pages
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Research from "./pages/Research";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Store the current pathname in localStorage on every navigation
    localStorage.setItem("lastVisitedPage", location.pathname);
  }, [location]);

  useEffect(() => {
    // Redirect to the last visited page on page reload (except for home page)
    const lastVisitedPage = localStorage.getItem("lastVisitedPage");

    if (lastVisitedPage && lastVisitedPage !== "/") {
      window.location.href = lastVisitedPage;
    }
  }, []);

  console.log("for testing");


  

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/portfolio"> {/* Add the base path for GitHub Pages */}
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/research" element={<Research />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
