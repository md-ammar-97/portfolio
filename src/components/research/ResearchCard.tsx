
import { Button } from "@/components/ui/button";

interface ResearchProps {
  title: string;
  publisher: string;
  date: string;
  doi: string;
  summary: string;
  link: string;
  imageUrl: string;
}

const ResearchCard = ({
  title,
  publisher,
  date,
  doi,
  summary,
  link,
  imageUrl
}: ResearchProps) => {
  return (
    <div className="glass-card overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6 md:w-2/3">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">{publisher}</span> • {date}
          </p>
        </div>
        <p className="text-muted-foreground mb-4">{doi}</p>
        <p className="text-muted-foreground mb-4">Abstract:</p>
        <p className="text-muted-foreground mb-4">{summary}</p>
        <Button asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Read Publication
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ResearchCard;
