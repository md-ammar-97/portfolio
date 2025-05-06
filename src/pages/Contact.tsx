import { useState } from "react";
import ContactForm from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/button";
import { SimpleCaptcha } from "@/components/ui/captcha";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [isCalendlyCaptchaVerified, setIsCalendlyCaptchaVerified] = useState(false);

  const redirectToCalendly = () => {
    if (!isCalendlyCaptchaVerified) {
      toast({
        title: "Verification Required",
        description: "Please complete the verification before proceeding.",
        variant: "destructive",
      });
      return;
    }

    window.open('https://calendly.com/md-ammar/15min-coffee-chat-with-ammar', '_blank');
  };

  return (
    <div className="section-container">
      <h1 className="page-title">Contact Me</h1>
      <p className="subtitle">
        Let's connect and discuss how we can work together
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <ContactForm />
          </div>
        </div>

        <div>
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  {/* Phone Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+15148194161" className="text-muted-foreground hover:text-accent transition">
                    +1 (514) 819-4161
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  {/* Email Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:mdammar.ca@gmail.com" className="text-muted-foreground hover:text-accent transition">
                    mdammar.ca@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  {/* LinkedIn Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/mohd-ammar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition"
                  >
                    www.linkedin.com/in/mohd-ammar
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold mb-6">Schedule a Call</h2>
            <p className="text-muted-foreground mb-6">
              Prefer to talk directly? Let's schedule a 15-minute coffee chat to discuss your business needs.
            </p>

            <div className="space-y-6">
              <SimpleCaptcha onVerify={() => setIsCalendlyCaptchaVerified(true)} />

              <Button 
                onClick={redirectToCalendly}
                className="w-full"
                disabled={!isCalendlyCaptchaVerified}
              >
                Schedule on Calendly
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
