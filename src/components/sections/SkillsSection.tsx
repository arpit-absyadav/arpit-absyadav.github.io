import { Progress } from "@/components/ui/progress";
import TerminalSection from "../ui-custom/TerminalSection";
import GlitchText from "../ui-custom/GlitchText";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Go / Golang", level: 80 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "NestJS", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "GraphQL / gRPC", level: 80 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React.js", level: 82 },
      { name: "Material UI", level: 80 },
      { name: "HTML5 / CSS3", level: 78 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 85 },
      { name: "DynamoDB", level: 75 },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 88 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "Terraform", level: 72 },
      { name: "GitLab CI/CD", level: 85 },
    ],
  },
  {
    name: "Streaming & Observability",
    skills: [
      { name: "Kafka", level: 85 },
      { name: "Prometheus / Grafana", level: 82 },
      { name: "New Relic", level: 80 },
      { name: "ELK Stack", level: 78 },
      { name: "Sentry", level: 75 },
    ],
  },
  {
    name: "AI & Automation",
    skills: [
      { name: "Claude (Anthropic)", level: 85 },
      { name: "OpenAI API", level: 82 },
      { name: "Prompt Engineering", level: 85 },
      { name: "LLM Integration", level: 80 },
    ],
  },
  {
    name: "Web3 & Blockchain",
    skills: [
      { name: "Solana", level: 85 },
      { name: "RPC Nodes", level: 90 },
      { name: "Validators", level: 80 },
      { name: "Bare Metal Infra", level: 82 },
      { name: "DeFi APIs", level: 78 },
    ],
  },
  {
    name: "Testing & Architecture",
    skills: [
      { name: "Jest / Supertest", level: 85 },
      { name: "Mocha / Chai", level: 80 },
      { name: "Microservices", level: 92 },
      { name: "Event-Driven Architecture", level: 88 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <GlitchText>$ man skills</GlitchText>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {skillCategories.slice(0, Math.ceil(skillCategories.length / 2)).map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xl font-mono text-[#00ff00] mb-3 terminal-text">{category.name}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-mono">{skill.name}</span>
                        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-black/50 border border-[#00ff00]/20"
                        indicatorClassName="bg-[#00ff00]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {skillCategories.slice(Math.ceil(skillCategories.length / 2)).map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xl font-mono text-[#00ff00] mb-3 terminal-text">{category.name}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-mono">{skill.name}</span>
                        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-black/50 border border-[#00ff00]/20"
                        indicatorClassName="bg-[#00ff00]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <TerminalSection title="skill_matrix">
            <div className="font-mono text-[#00ff00] text-sm">
              <p className="mb-2">{'>'} ANALYZING SKILL PATTERNS...</p>
              <p className="mb-2">{'>'} PRIMARY STRENGTHS DETECTED:</p>
              <p className="mb-2">{'>'} ■ Backend Systems with Node.js / Go / TypeScript</p>
              <p className="mb-2">{'>'} ■ Distributed Systems & Event-Driven Architecture</p>
              <p className="mb-2">{'>'} ■ Cloud Infrastructure & DevOps on AWS</p>
              <p className="mb-2">{'>'} ■ Real-time Data Pipelines & Kafka Streaming</p>
              <p className="mb-2">{'>'} ■ Solana RPC Nodes & Web3 Infrastructure</p>
              <p className="mb-2">{'>'} ■ LLM Integration & AI-Assisted Engineering</p>
              <p>{'>'} SKILL ANALYSIS COMPLETE ✓</p>
            </div>
          </TerminalSection>
        </div>
      </div>
    </section>
  );
}