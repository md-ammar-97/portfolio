import { cn } from "@/lib/utils";

interface TimelineItemProps {
  year: string;
  title: string;
  company?: string;
  description: string;
  isAlternate?: boolean;
}

const TimelineItem = ({
  year,
  title,
  company,
  description,
  isAlternate = false,
}: TimelineItemProps) => {
  return (
    <div className={cn(
      "flex flex-col md:grid gap-4 mb-4", // Added mb-4 for space between items
      isAlternate ? "md:grid-cols-[1fr_auto_1fr]" : "md:grid-cols-[auto_1fr]"
    )}>
      {isAlternate && (
        <div className="hidden md:block text-right">
          <h3 className="text-lg font-medium">{title}</h3>
          {company && <p className="text-accent">{company}</p>}
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
      )}
      
      <div className={cn(
        "flex md:flex-col items-center",
        isAlternate ? "" : "mr-4 md:mr-6"
      )}>
        <div className="bg-accent h-2 w-2 rounded-full"></div>
        <div className="bg-accent/30 h-full w-px mx-4 md:mx-0 md:my-2"></div>
        <div className="bg-accent h-2 w-2 rounded-full"></div>
      </div>
      
      <div className={isAlternate ? "md:hidden" : ""}>
        <div className="flex flex-wrap items-baseline gap-x-2">
          <h3 className="text-lg font-medium">{title}</h3>
          <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded">
            {year}
          </span>
        </div>
        {company && <p className="text-accent">{company}</p>}
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>
      
      {isAlternate && (
        <div className="hidden md:block">
          <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs font-medium rounded">
            {year}
          </span>
        </div>
      )}
    </div>
  );
};

const Timeline = ({ type }: { type: "experience" | "education" }) => {
  const experienceData = [
    {
      year: "Oct 2024 - Present",
      title: "Operations Consultant",
      company: "Invisible Technologies",
      description: "Developed real-time dashboards, automated data pipelines, and enhanced AI model accuracy to optimize business processes and reporting efficiency."
    },
    {
      year: "Jun 2023 - Dec 2024",
      title: "Operations Associate",
      company: "FedEx Canada",
      description: "Streamlined MRO processes, conducted time-motion studies, and led training initiatives to improve efficiency and reduce delays."
    },
    {
      year: "Jul 2023 - Sept 2024",
      title: "Business Strategy Analyst",
      company: "AmiColo (Startup)",
      description: "Co-founded a roommate-matching platform, applied clustering algorithms to improve profile matching, and secured seed funding to grow the business."
    },
    {
      year: "Sept 2023 - Jan 2024",
      title: "Technical Project Coordinator",
      company: "Innovation Center – Concordia University",
      description: "Developed AI-powered academic tools using Python and OpenAI, securing recognition among Canada's top AI products and pitching for funding."
    },
    {
      year: "Sept 2022 - Jan 2023",
      title: "Technical Project Coordinator",
      company: "Innovation Center – Concordia University",
      description: "Built a web platform and dashboards for food redistribution, reducing waste by 13% and securing pilot funding for the project."
    },
    {
      year: "Jun 2020 - Nov 2022",
      title: "Business Systems Analyst",
      company: "Sygnius Infotech Ventures",
      description: "Automated reporting and process mapping, leading to increased productivity and reduced errors in MRO systems."
    }
  ];

  const educationData = [
    {
      year: "2022 - 2024",
      title: "M.Eng. Industrial Engineering",
      company: "Concordia University",
      description: "Specialized in data analytics, operations research, and process optimization, with involvement in multiple academic and industry conferences."
    },
    {
      year: "2017 - 2021",
      title: "B.Tech. Mechanical Engineering",
      company: "Jamia Millia Islamia",
      description: "Focused on manufacturing systems and automation, with leadership roles in student societies and event management."
    }
  ];

  const dataToRender = type === "experience" ? experienceData : educationData;

  return (
    <div>
      {dataToRender.map((item, index) => (
        <TimelineItem
          key={index}
          year={item.year}
          title={item.title}
          company={item.company}
          description={item.description}
          isAlternate={false}
        />
      ))}
    </div>
  );
};

export default Timeline;
