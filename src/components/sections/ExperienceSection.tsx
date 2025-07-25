import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import GlitchText from '../ui-custom/GlitchText';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "SDE 3",
    company: "Zemoso",
    period: "July 2024 - Present",
    description: [
      "Spearheaded the Telematics module, designing and maintaining scalable real-time data pipelines that processed 10M+ sensor events/day from over 15,000+ connected trucks/trailers.",
      "Led a team of 4 developers, overseeing daily task management, code reviews, delivery planning, and technical decision-making to ensure quality and efficiency.",
      "Contributed to release and deployment processes, supporting codebase migration, optimising GitLab CI/CD pipelines.",
      "Redesigned components of AppSmith's open-source architecture using Node.js, React, Material UI, and Atomic Design principles.",
      "Automated business workflows for Wabash using Power Automate, cutting manual effort by over 70% and boosting operational efficiency."
    ],
    technologies: ["Node.js", "NestJS", "React", "Material UI", "GitLab CI/CD", "Power Automate", "PostgreSQL", "JavaScript", "Redis", "Kafka", "Kubernetes"]
  },
  {
    title: "Sr. DevOps and Software Engineer",
    company: "Shyft",
    period: "July 2023 - June 2024",
    description: [
      "Directed a team of 4 developers to deliver RPC, APIs, and indexed data for trading, DeFi, and Web3 products.",
      "Designed and scaled infrastructure to handle 500K+ requests/min, ensuring high availability and performance.",
      "Managed Solana RPC nodes for real-time data, indexing, and plugin execution with optimised reliability on bare metal servers.",
      "Architected systems using Kafka, gRPC, and Lua-enhanced Redis for centralised caching and rate-limiting.",
      "Implemented monitoring with Prometheus, Grafana, and New Relic for proactive system health and alerting.",
      "Led AWS migration with zero downtime, leveraging EC2, ECS, ECR, VPC, CloudFormation, Load Balancers, and Auto Scaling."
    ],
    technologies: ["TypeScript", "GoLang", "NestJS", "MongoDB/Mongoose", "AWS (EC2, ECS, ECR, SES, CloudFront, Route 53)", "Kafka", "gRPC", "Redis", "Prometheus", "Grafana", "New Relic", "Bare Metal"]
  },
  {
    title: "Sr. Software Engineer",
    company: "Sunstone",
    period: "April 2022 - June 2023",
    description: [
      "Ensured stability and performance of in-house CRM through SQL query tuning and code optimisation.",
      "Led a team of 2 developers to build the Opportunity module, boosting active student engagement by 65%.",
      "Migrated codebase from JavaScript to TypeScript, improving type safety and maintainability.",
      "Set up a CI/CD pipeline to automate deployments, including integration, database seeding, and SQL migrations."
    ],
    technologies: ["TypeScript", "JavaScript", "Node.js", "MySQL", "Redis", "Sequelize", "GitLab CI/CD", "Docker"]
  },
  {
    title: "Software Engineer",
    company: "Yapsody",
    period: "Jan 2018 - Feb 2022",
    description: [
      "Improved notification delivery system efficiency by 35–40% through architectural and logic optimisation.",
      "Created an E2E API testing tool integrated with Swagger for automated validation.",
      "Developed a robust notification manager supporting bulk and single sends using AWS SES, SNS, and SQS.",
      "Created a custom CLI tool to auto-generate boilerplate, modules, and services, standardising microservice development.",
      "Contributed to architecture and scalability improvements across the platform.",
      "Transitioned the platform from monolith to microservices using Node.js, Angular, TypeScript, and Mongoose, deployed on AWS."
    ],
    technologies: ["Node.js", "TypeScript", "Angular 4", "MongoDB", "Mongoose", "EJS", "Swagger", "AWS (SES, SNS, SQS, EC2, CloudFormation)", "Docker", "GitLab CI/CD"]
  },
  {
    title: "Software Engineer",
    company: "Mosusebelly F&B",
    period: "March 2017 - Jan 2018",
    description: [
      "Planned and collaborated to create a home-cooked food ordering web application and serve around 100 customers daily (MEAN Stack)",
      "Managed business operations in Gurgaon city, India and served 40-50 people daily"
    ],
    technologies: ["MongoDB", "Express.js", "Angular", "Node.js"]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <GlitchText>$ ./career_history.sh</GlitchText>
        </h2>
        
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-black/50 border border-[#00ff00]/20 hover:border-[#00ff00]/50 transition-all">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                  <CardTitle className="text-[#00ff00] text-xl md:text-2xl">
                    {exp.title} @ {exp.company}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground font-mono">
                    {exp.period}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i} className="terminal-text">{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="bg-black/30 border-[#00ff00]/30 text-[#00ff00]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}