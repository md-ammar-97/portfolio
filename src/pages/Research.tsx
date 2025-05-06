import ResearchCard from "@/components/research/ResearchCard";

const researchPapers = [
  {
    title: "Improving Material Quality Management & Manufacturing Organization Systems Through Industry 4.0 Technologies",
    publisher: "Elsevier: Materials Today (Vol. 5, Part 6)",
    date: "Feb 26, 2021",
    doi: "DOI: 10.1016/j.matpr.2021.01.585",
    summary: "In these changing times, Industry 4.0 technologies are being adopted in many parts of the world. These technologies are used to develop smart materials, smart factories, smart logistics, smart warehousing and smart supply chains. In the business aspect, it has the potential to solve complex manufacturing problems. This paper provides a thorough study of various Industry 4.0 technologies for improving the material quality and manufacturing systems. We have listed out various available technologies, their characteristics, and benefits of effective management in the upcoming industries. Digital technologies help companies optimize their material wastage and inventory which ends up in cost reductions. With remote collaboration, on-site and off-site employees can easily collaborate as and when needed. These technologies ultimately reduce communication gaps and help them stay up to date with the information. Smart predictive analysis will help to properly monitor the equipment in the industries using Industry 4.0 technologies. Faults in materials can be detected and resolved at an early stage. Further, this provides transparency in the systems and processes and fulfills the required expectation of the customer.",
    link: "https://www.sciencedirect.com/science/article/pii/S2214785321006775?dgcid=author",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746563259/Improving_material_quality_management_and_manufacturing_organizations_system_through_Industry_4.0_technologies_2_jlukxj.webp"
  },
  {
    title: "Improving the Performance of Supply Chain Through Industry 4.0 Technologies",
    publisher: "Springer Nature: Advancement in Materials, Manufacturing and Energy Engineering",
    date: "Mar 18, 2021",
    doi: "DOI: 10.1007/978-981-16-5371-1_67",
    summary: "Industry 4.0 technologies are implemented in many parts of the globe in these evolving times. Smart factories, smart logistics, smart warehousing, and smart supply chains are being developed using these technologies. These technologies have the ability to address difficult supply chain issues in the business sector. This paper focuses on management systems for Smart Supply Chain and Manufacturing. Here, we also discuss various types of technologies for proper management, roles of these technologies for manufacturing management, and the role of these technologies for the smart supply chain. The supply chain has applications with inventory, logistics, warehousing, forecasting, vendor selection, and revolutionizing the strategic decision-making process.",
    link: "https://link.springer.com/chapter/10.1007%2F978-981-16-8341-1_16",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746563260/Improving_the_performance_of_Supply_Chain_through_Industry_4.0_technologies_hdzjvz.webp"
  },
  {
    title: "Implementing Industry 4.0 Technologies in Self-Healing Materials and Digitally Managing the Quality of Manufacturing",
    publisher: "Elsevier: Materials Today",
    date: "Jul 1, 2021",
    doi: "DOI: 10.1016/j.matpr.2021.09.248",
    summary: "Quality has always been an essential part of manufacturing. Companies have always focused on methods and techniques to improve and manage the quality, even in the past. With the help of Industry 4.0 technologies, manufacturing industries have evolved a lot. Technologies like Industrial Internet of Things (IIoT), Additive Manufacturing (AM), Big Data, Augmented reality (AR)/ Virtual Reality (VR)/ Mixed Reality (MR) and many more have opened new manufacturing industries. Various new methods to manage the quality have been introduced. This paper discussed the integration of Software Suites, Interactive SOPs and training platforms, Electronic Logs, Advanced SPC, and Big Data Analytics for quality management systems. It has also discussed various error detection methods during manufacturing, problems and their solutions using Industry 4.0.",
    link: "https://www.sciencedirect.com/science/article/pii/S2214785321060958",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746563259/Implementing_Industry_4.0_Technologies_in_Self-Healing_Materials_and_Digitally_Managing_the_Quality_of_Manufacturing_ik7hvh.webp"
  },
  {
    title: "Significant Applications of Smart Materials and Internet of Things (IoT) in the Automotive Industry",
    publisher: "Elsevier: Materials Today",
    date: "Jul 26, 2022",
    doi: "DOI: 10.1016/j.matpr.2022.07.180",
    summary: "This paper discusses the significant applications of Smart materials and the Internet of Things (IoT) in the automobile industry. These are the two technologies most tech companies are working on right now. These both have resulted in the game-changing technologies of this era. Firstly, the various IoT solutions from companies like Airbus, Boeing, Amazon, John Deere, Bosch, Shell, and many more are discussed. Technologies like Advanced Driver-Assistance Systems, Connected Cars, V2V, V2I, V2P, V2X, and CV2X have also been discussed. Then we discussed the ongoing research in developing nations like India. We have discussed collaborations by different companies like Robert Bosch Engineering India Ltd., Renault Nissan Technical Center, Mercedes Benz Research and Development India, and Tata Elxsi. Then we talked about other properties smart materials possess (like transiency, immediacy and self-actuation, selectivity, self-diagnostic, and self-healing). Finally, various ongoing projects and inventions in smart materials by General Motors, Chevrolet Corvette, Hyundai Motor Group, KIA Corporation, and Lamborghini (Sián FKP 37 and Roadster) are discussed.",
    link: "https://authors.elsevier.com/c/1fTj17tbNaNzeF",
    imageUrl: "https://res.cloudinary.com/dav1ts03b/image/upload/v1746563259/Significant_Applications_of_Smart_Materials_and_Internet_of_Things_IoT_in_the_Automotive_Industry_x04v7r.webp"
  }
];

const Research = () => {
  return (
      <div className="section-container">
        <h1 className="page-title">Research Publications</h1>
        <p className="subtitle">
          Academic contributions in Industry 4.0, smart materials, and IoT applications
        </p>
        
        <div className="space-y-8">
          {researchPapers.map((paper, index) => (
            <ResearchCard
              key={index}
              title={paper.title}
              publisher={paper.publisher}
              date={paper.date}
              doi={paper.doi}
              summary={paper.summary}
              link={paper.link}
              imageUrl={paper.imageUrl}
            />
          ))}
        </div>
      </div>
  );
};

export default Research;
