
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SimpleCaptcha } from "@/components/ui/captcha";
import { toast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "", // Added organization field
    message: "",
  });

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isCaptchaVerified) {
      toast({
        title: "Verification Required",
        description: "Please complete the verification before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = "service_lxe9fct";
      const templateId = "template_2ehywar";
      const publicKey = "fTXn0P2GN3_WUrU2q";

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_organisation: formData.organization,
        from_message: formData.message,
      };

      // Send email
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("Email sent successfully:", result);

      toast({
        title: "Thank you!",
        description: "Your message has been sent.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        organization: "",
        message: "",
      });
      setIsCaptchaVerified(false);
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Message not sent",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Name
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Organization
        </label>
        <Input
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          required
          placeholder="Your organization"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1"
        >
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message..."
          rows={5}
        />
      </div>

      <div>
        <SimpleCaptcha onVerify={() => setIsCaptchaVerified(true)} />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
