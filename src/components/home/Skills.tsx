
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

console.log("for testing");


const Skills = () => {
  const skillLogos = [
    { src: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746616132/Python_Logo_c61tp0.webp", alt: "Python Logo" },
    { src: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746616134/SQL_logo_r5qcop.webp", alt: "SQL Logo" },
    { src: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746616107/Tableau_Logo_xmwv9i.webp", alt: "Tableau Logo" },
    { src: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746616130/Looker_LOGO_jqwpe7.webp", alt: "Looker Logo" },
    { src: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746616131/PowerBI_Logo_u5zmuo.webp", alt: "Power BI Logo" },
    { src: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746616132/R_Logo_eb1oup.webp", alt: "R Logo" },
    { src: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746616131/Pandas_Logo_r1w38w.webp", alt: "Pandas Logo" },
    { src: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746616130/NumPy_Logo_sojrfj.webp", alt: "NumPy Logo" },
    { src: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746616133/Scikit_Learn_Logo_jzf6gz.webp", alt: "Scikit-Learn Logo" },
    { src: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746616107/VBA_MACROS_Logo_wgxqyv.webp", alt: "Excel VBA Macros Logo" },
    { src: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746616129/CPLEX_Logo_hbujjd.webp", alt: "CPLEX Logo" },
    { src: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746616401/Six_Sigma_kv2mfv.webp", alt: "Six Sigma Logo" },
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
