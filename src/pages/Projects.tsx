
import ProjectCard from "@/components/projects/ProjectCard";

const projects = [
  {
    title: "Enhancing Sample-to-Order Conversion at Champo Carpets", // PROJECT 1
    description: "ERP data analysis with ML for improved sales conversion and profitability",
    techStack: ["Python", "Pandas", "Scikit-learn", "Looker Studio"],
    projectLink: "https://drive.google.com/file/d/1Y_ei5j88Zr1cWqrhga_MyTYvG0gjYvfr/view",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535987/Project_1_zcu7wa.webp"
  },
  {
    title: "AmiColo – Smart Moves for City Transitions", // PROJECT 20
    description: "Created a roommate-matching platform using AI and clustering on social indices via Facebook Graph API. Achieved 130K+ visits, 15% engagement growth, and secured $60K seed funding.",
    techStack: ["Python", "HTML", "CSS", "Scikit-learn", "pandas", "NumPy", "ChatGPT 4.0", "Meta API", "Power BI"],
    projectLink: "https://youtu.be/Wja8LpWUxqM?si=UVDBnj_F0x0j3kJs",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535995/Project_20_bkq3wc.webp"
  },
  {
    title: "Potter vs. Friends: Culture in Data", // PROJECT 17
    description: "Contrasted Harry Potter and Friends using Excel and PowerBI to analyze characters, tones, and franchise impact. Built side-by-side dashboards for cross-series insights.",
    techStack: ["PowerBI", "Excel"],
    projectLink: "http://tiny.cc/AMR-Project-17",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535993/Project_17_cj5qhr.webp"
  },
  {
    title: "AcademAI – AI Agents for Smarter Learning", // PROJECT 21
    description: "Built GenAI-powered academic assistants using LangChain, Pinecone, and OpenAI to support students. Recognized among Canada's Top 40 AI projects with $50K pitch opportunity.",
    techStack: ["Python", "VectorDB", "Pinecone", "LangChain", "Replit", "OpenAI API"],
    projectLink: "https://youtu.be/2jL-TQpGDfw?si=r3rZETKbsnUqAq3F",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535996/Project_21_paqbkf.webp"
  },
  {
    title: "Simulation & Optimization – Decontamination Center", // PROJECT 2
    description: "Discrete event simulation to optimize AGV vs manual operations in hospitals",
    techStack: ["Rockwell Arena", "Process Simulation"],
    projectLink: "https://docs.google.com/presentation/d/11B1h0vNq-Rdlt0mPznJ02TIJgdSeXpmK/present?slide=id.p1",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535987/Project_2_w9ycog.webp"
  },
  {
    title: "Uber Eats Canada: Data-Driven Optimization", // PROJECT 14
    description: "Analyzed Uber Eats data to reveal cost-performance patterns, cuisine popularity, and review sentiment using GenAI and BI tools to improve visibility and user retention.",
    techStack: ["PowerBI", "SQL", "Excel", "GenAI"],
    projectLink: "http://tiny.cc/AMR-Project-14",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535992/Project_14_dimjdq.webp"
  },
  {
    title: "CryptoVoltz – Market Trend Analyzer", // PROJECT 15
    description: "Built PowerBI dashboards to monitor volatility, volume, and ROI across coins. Used SQL for historical analysis and Excel for strategy simulation and risk segmentation.",
    techStack: ["PowerBI", "SQL", "Excel"],
    projectLink: "http://tiny.cc/AMR-Project-15",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535992/Project_15_cibsca.webp"
  },
  {
    title: "Wizarding World Analytics Explorer", // PROJECT 16
    description: "Explored character arcs, house visibility, and narrative peaks in Harry Potter using structured SQL data and PowerBI to derive fan-centric and content strategies.",
    techStack: ["PowerBI", "SQL", "Excel"],
    projectLink: "http://tiny.cc/AMR-Project-16",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535992/Project_16_dy3huk.webp"
  },
  {
    title: "EUROMART STORES 2022 DASHBOARD", // PROJECT 3
    description: "Built real-time dashboard in Looker Studio to enable sales analysis",
    techStack: ["Looker Studio", "Google Sheets"],
    projectLink: "https://lookerstudio.google.com/s/v7lwBEYN2XE",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535988/Project_3_ybhhpb.webp"
  },
  {
    title: "Analyze Box Office Data with Plotly and Python", // PROJECT 4
    description: "Visual storytelling of movie revenue trends",
    techStack: ["Python", "Plotly", "Pandas"],
    projectLink: "https://www.coursera.org/account/accomplishments/verify/4U6S9QR3RQH9",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535988/Project_4_cj6o2x.webp"
  },
  {
    title: "COVID-19 Spread Prediction – India", // PROJECT 5
    description: "Forecasted COVID-19 patterns by state using real datasets in R",
    techStack: ["R", "ggplot2", "forecast"],
    projectLink: "https://www.youtube.com/watch?v=ouFDAOLkMoI",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535988/Project_5_sdx8je.webp"
  },
  {
    title: "Go-Kart Design – INDKC Season 4", // PROJECT 6
    description: "Built a 125cc go-kart and presented a winning business strategy",
    techStack: ["AutoCAD", "SolidWorks", "Sponsorship"],
    projectLink: "https://www.instagram.com/tv/B-XW6jJnwLX/",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535987/Project_6_ce3weo.webp"
  },
  {
    title: "Smart Building Proposal – Schneider Electric Challenge", // PROJECT 7
    description: "Concept proposal for a sustainable, IoT-enabled smart building",
    techStack: ["IoT", "Automation", "Smart Grids"],
    projectLink: "https://docs.google.com/presentation/d/1nLXsYkLf9feyAOjMdCx2l8Fh6Tdf95IbQv5We_5yt24/edit?usp=sharing",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535987/Project_7_e7orsh.webp"
  },
  {
    title: "Excel-Only Sales Insights Dashboard", // PROJECT 19
    description: "Designed an Excel-based interactive dashboard to track daily sales, product performance, and customer trends—no BI tools needed. Ideal for SMBs and lean teams.",
    techStack: ["Excel"],
    projectLink: "http://tiny.cc/AMR-Project-19",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535994/Project_19_rsfzgv.webp"
  },
  {
    title: "Financial Pulse Check for Strategic Growth", // PROJECT 8
    description: "Evaluated a corporation's financial health using KPIs like gross margins, churn, and liquidity to drive cost reduction, supplier diversification, and revenue strategy.",
    techStack: ["PowerBI", "SQL", "Excel"],
    projectLink: "https://app.powerbi.com/view?r=eyJrIjoiYjVlOTdkMTUtMDJhYi00YThjLWE4ZjUtMmU3OWE2NWI5YWJjIiwidCI6IjRkN2NlYWVlLWJhMDUtNGY2MS1iYTM3LWJmNjkwZmE2MmFkMiJ9",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535988/Project_8_roulaj.webp"
  },
  {
    title: "Menu Intelligence with SQL Insights", // PROJECT 9
    description: "Transformed raw restaurant order data using SQL and Excel, performed web scraping for menu insights, and delivered actionable reports on bestsellers and underperforming dishes.",
    techStack: ["SQL", "Excel"],
    projectLink: "https://drive.google.com/drive/folders/16iKNlgIxOSZxXC7-fUs76sd-Clq8cJN-?usp=sharing",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535988/Project_9_wnlchg.webp"
  },
  {
    title: "Skyline Insights for Airline Operations", // PROJECT 10
    description: "Analyzed 10K+ flight records to assess route profitability, load factors, and passenger patterns. Created a dynamic Tableau dashboard for data-driven airline decisions.",
    techStack: ["Tableau", "SQL", "Excel"],
    projectLink: "https://public.tableau.com/views/SkylineInsightsOptimizingAirlinePerformancethroughData-DrivenAnalytics/AirlineDashboard?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535988/Project_10_epk5r4.webp"
  },
  {
    title: "Regional Sales Performance Analyzer", // PROJECT 18
    description: "Developed an interactive sales dashboard to evaluate shipping modes, product profit margins, and customer behavior. Improved decision-making with real-time performance KPIs.",
    techStack: ["PowerBI", "SQL"],
    projectLink: "http://tiny.cc/AMR-Project-18",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535993/Project_18_tucxur.webp"
  },
  {
    title: "Optimizing Call Center Agent Efficiency", // PROJECT 13
    description: "Created KPI-rich dashboards to monitor agent productivity, identify peak load times, and reduce call wait times—boosting FCR and CSAT through actionable insights.",
    techStack: ["PowerBI", "SQL", "Excel"],
    projectLink: "http://tiny.cc/AMR-Project-13",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535989/Project_13_o6fzqj.webp"
  },
  {
    title: "Inventory Intelligence for Cost Efficiency", // PROJECT 12
    description: "Analyzed product stock data to uncover aging inventory, low stock risks, and reorder hotspots using PowerBI. Suggested replenishment strategy to free up $3.4M in capital.",
    techStack: ["Tableau", "SQL", "Excel"],
    projectLink: "https://drive.google.com/file/d/1dSWZV6CLsJz4EsL9XMxzavLWW5wIF2aA/view",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535989/Project_12_sggwzs.webp"
  },
  {
    title: "Fitness Finance Tracker for 2023 Strategy", // PROJECT 11
    description: "Built a 4-page PowerBI dashboard to analyze revenue, profit, and efficiency across three business lines and advised on operational improvements for 2024 planning.",
    techStack: ["PowerBI", "Excel", "SQL"],
    projectLink: "https://app.powerbi.com/view?r=eyJrIjoiZjdjYWQxNjgtMGMzNC00MDcwLTg3MDUtMjkzZjI5ZGEyZThhIiwidCI6ImJhYjBiNjc5LWJkNWYtNGZlOC1iNTE2LWM2YjhiMzE3Yzc4MiIsImMiOjR9",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746535989/Project_11_x5yon9.webp"
  },
];

const Projects = () => {
  return (
      <div className="section-container">
        <h1 className="page-title">Projects</h1>
        <p className="subtitle">
          Explore my portfolio of data-driven business solutions
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              projectLink={project.projectLink}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
  );
};

export default Projects;
