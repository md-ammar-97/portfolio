
import { cn } from '@/lib/utils';

interface SkillLogoProps {
  src: string;
  alt: string;
}

const SkillLogo = ({ src, alt }: SkillLogoProps) => {
  return (
    <div className="skill-logo-container p-4 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 rounded-lg shadow-sm hover:shadow-md transition-all">
      <img
        src={src}
        alt={alt}
        className="h-16 w-auto object-contain"
      />
    </div>
  );
};

const Skills = () => {
  const skillLogos = [
    { src: "/assets/logo/Python_Logo.png", alt: "Python Logo" },
    { src: "/assets/logo/SQL_logo.png", alt: "SQL Logo" },
    { src: "/assets/logo/Tableau_Logo.png", alt: "Tableau Logo" },
    { src: 'https://res.cloudinary.com/dav1ts03b/image/upload/v1746577218/Looker_LOGO_am4hbu.png', alt: "Looker Logo" },
    { src: "/assets/logo/PowerBI_Logo.png", alt: "Power BI Logo" },
    { src: "/assets/logo/R_Logo.png", alt: "R Logo" },
    { src: "/assets/logo/Pandas_Logo.png", alt: "Pandas Logo" },
    { src: "/assets/logo/NumPy_Logo.png", alt: "NumPy Logo" },
    { src: "/assets/logo/Scikit_Learn_Logo.png", alt: "Scikit-Learn Logo" },
    { src: "/assets/logo/VBA_MACROS_LOGO.png", alt: "Excel VBA Macros Logo" },
    { src: "/assets/logo/CPLEX_Logo.png", alt: "CPLEX Logo" },
    { src: "/assets/logo/GCP_LOGO.png", alt: "Google Cloud Platform Logo" },
  ];

  return (
    <div className="section-container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Skills & Expertise</h2>
        <p className="text-muted-foreground mt-2">
          Tools and technologies I use to solve complex business problems
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skillLogos.map((logo, index) => (
          <SkillLogo
            key={index}
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
